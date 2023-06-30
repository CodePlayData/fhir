// @filename: Schedule.ts

/*
 * Copyright 2023 Pedro Paulo Teixeira dos Santos

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

*/

import { ServiceCategory } from "../../../shared/ServiceCategory.js";
import { HealthcareService } from "../../../shared/HealthcareService.js";
import { ServiceType } from "../../../shared/ServiceType.js";
import { PracticeSettingCodeValueSet } from "../../../shared/PracticeSettingCodeValueSet.js";
import { Markdown } from "../../../core/primitives/Markdown.js";
import { Patient } from "../../../admin/Patient.js";
import { Practitioner } from "../../../admin/Practitioner.js";
import { PractitionerRole } from "../../../admin/PractitionerRole.js";
import { CareTeam } from "../../../admin/CareTeam.js";
import { RelatedPerson } from "../../../admin/RelatedPerson.js";
import { Device } from "../../../admin/Device.js";
import { HealthcareService as HealthcareServiceResource } from "../../../admin/HealthcareService";
import { Location } from "../../../admin/Location.js";
import { CodeableConcept } from "../../../core/general/CodeableConcept.js";
import { Identifier } from "../../../core/general/Identifier.js";
import { Period } from "../../../core/general/Period.js";
import { CodeableReference } from "../../../core/special/CodeableReference.js";
import { Reference } from "../../../core/special/Reference.js";
import { Resource } from "../../../core/Resource.js";

type ScheduleSchemaR4B = {
    readonly identifier?: Identifier[],
    readonly active?: boolean,
    readonly serviceCategory?: CodeableConcept<ServiceCategory>,
    readonly serviceType?: CodeableReference<HealthcareService>[] | CodeableConcept<ServiceType>[],
    readonly specialty?: CodeableConcept<PracticeSettingCodeValueSet>[],
    // TODO: tem que trocar pra Array.
    readonly actor: Reference<Patient | Practitioner | PractitionerRole | CareTeam | RelatedPerson | Device | HealthcareServiceResource | Location>[],
    readonly planningHorizon?: Period,
    readonly comment?: Markdown
}


type ScheduleSchemaR5 = ScheduleSchemaR4B & {
    readonly name?: string
}

/**
 *  A container for slots of time that may be available for booking appointments.
 * 
 *  Source: http://hl7.org/fhir/R5/schedule.html.
 */
class Schedule implements Resource {
    readonly resourceType = 'Schedule';
    readonly identifier;
    readonly active;
    readonly serviceCategory;
    readonly serviceType;
    readonly specialty;
    readonly name;
    readonly actor;
    readonly planningHorizon;
    readonly comment;

    /**
     * 
     * Schedule resources provide a container for time-slots that can be booked using an appointment. 
     * It provides the window of time (period) that slots are defined for and what type of appointments 
     * can be booked.
     * 
     * The schedule does not provide any information about actual appointments. This separation greatly 
     * assists where access to the appointments would not be permitted for security or privacy reasons, 
     * while still being able to determine if an appointment might be available.
     * 
     * A schedule controls the dates and times available for the performance of a service and/or the use 
     * of a resource. One schedule applies to one service or resource, since each service or resource can 
     * be reserved independently of the others.
     * If two or more services, people, locations, or things cannot be reserved independently of one another, 
     * they are considered to be one activity or resource.
     * 
     * A schedule consists of slots of time during which the controlled service or resource is potentially 
     * available for provision or use. Slots are categorized as open, booked, or blocked. An open slot on 
     * a schedule indicates that the service or resource is available for provision or use during that 
     * period of time. A booked slot indicates that the service or resource is not available during the 
     * time period, because an appointment has been scheduled. A blocked slot indicates that a service 
     * or resource is unavailable for reasons other than a scheduled appointment.
     * 
     * A slot is one unit on a schedule. A slot represents the smallest unit of time or quantity that a 
     * service or resource may be booked. Depending on the nature of the service or resource, there may 
     * be more than one defined slot at a given instant of time. For example, if a service is an open 
     * group therapy session with twelve available seats, then there are twelve slots for the given 
     * block of time.
     * 
     * The schedule belongs to a single instance of a service or resource. This is normally a HealthcareService, 
     * Practitioner, Location or Device. In the case where a single resource can provide different services, 
     * potentially at different location, then the schedulable resource is considered the composite of the actors.
     * For example, if a practitioner can provide services at multiple locations, they might have one schedule per 
     * location, where each schedule includes both the practitioner and location actors. When booking an appointment 
     * with multiple schedulable resources, multiple schedules may need to be checked depending on the configuration 
     * of the system.
     * 
     * If an appointment has two practitioners, a specific medical device and a room then there could be a schedule 
     * for each of these resources that may need to be consulted to ensure that no collisions occur.
     * If the schedule needed to be consulted, then there would be one created covering the planning horizon for 
     * the time of the appointment.
     * 
     * If an appointment has two practitioners, a specific medical device and a room then there could be a schedule 
     * for each of these resources that may need to be consulted to ensure that no collisions occur. 
     * If the schedule needed to be consulted, then there would be one created covering the planning horizon for the 
     * time of the appointment.
     * 
     * When checking availability for an appointment, the creator of the appointment should determine which schedules 
     * are applicable, then check for available slots within each schedule.
     * 
     * Determining which schedules should be consulted often will involve searching via the properties of the 
     * referenced actors, such as the ServiceCategory on the HealthcareService, or the Address on a Location.
     * 
     * The type parameter can be used to filter the type of services that can be booked within the associated slots.
     * If all slots are busy, the caller may attempt to book an appointment into an already-booked slot, but the server 
     * business rules will dictate whether overbooking is allowed, or whether the appointment may be given a higher 
     * precedence and allocated the overbooked slot.
     * 
     * @param schedule @type { ScheduleSchemaR4B | ScheduleSchemaR5 } - An object that contains:
     *      1. **identifier** - External Ids for this item
     *      2. **active** - Whether this schedule is in active use
     *      3. **serviceCategory** - High-level category
     *      4. **serviceType** - Specific service
     *      5. **specialty** - Type of specialty needed
     *      6. **name** - Human-readable label
     *      7. **actor (required)** - Resource(s) that availability information is being provided for
     *      8. **planningHorizon** - Period of time covered by schedule
     *      9. **comment** - Comments on availability
     * 
     */
    constructor(schedule: ScheduleSchemaR4B | ScheduleSchemaR5) {
        this.identifier = schedule?.identifier;
        this.active = schedule?.active;
        this.serviceCategory = schedule?.serviceCategory;
        this.serviceType = schedule?.serviceType;
        this.specialty = schedule?.specialty;
        this.actor = schedule?.actor;
        this.planningHorizon = schedule?.planningHorizon;
        this.comment = schedule?.comment;

        if('name' in schedule) {
            this.name = schedule.name;
        }

    }
}

export {
    Schedule,
    ScheduleSchemaR4B,
    ScheduleSchemaR5
}