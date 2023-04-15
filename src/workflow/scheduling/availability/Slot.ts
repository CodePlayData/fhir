// @filename: Slot.ts

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

import { ResourceType } from "../../../ResourceType.js";
import { Code } from "../../../core/generics/Code.js";
import { CodeableConcept } from "../../../core/generics/CodeableConcept.js";
import { CodeableReference } from "../../../core/datatypes/CodeableReference.js";
import { Instant } from "../../../core/generics/Instant.js";
import { Reference } from "../../../core/generics/Reference.js";
import { Aggregate } from "../../../Aggregate.js";
import { Identifier } from "../../../core/datatypes/Identifier.js";
import { Schedule } from "./Schedule.js";
import { SlotStatus } from "../../../values/SlotStatus.js";
import { ServiceCategory } from "../../../shared/ServiceCategory.js";
import { HealthcareService } from "../../../shared/HealthcareService.js";
import { ServiceType } from "../../../shared/ServiceType.js";
import { PracticeSettingCodeValueSet } from "../../../shared/PracticeSettingCodeValueSet.js";
import { Hl7VSAppointmentReasonCodes } from "../../../shared/Hl7VSAppointmentReasonCodes.js";

type SlotSchema = {
    readonly identifier?: Identifier[],
    readonly serviceCategory?: CodeableConcept<ServiceCategory>[],
    // v5 update
    readonly serviceType?: CodeableReference<HealthcareService>[] | CodeableConcept<ServiceType>[],
    readonly specialty?: CodeableConcept<PracticeSettingCodeValueSet>[],
    // v5 update
    readonly appointmentType?: CodeableConcept<Hl7VSAppointmentReasonCodes> | CodeableConcept<Hl7VSAppointmentReasonCodes>[],
    readonly schedule: Reference<Schedule>,
    readonly status: Code<SlotStatus['code']>,
    readonly start: Instant<string>,
    readonly end: Instant<string>,
    readonly overbooked?: boolean,
    readonly comment?: string
}

/**
 *  A slot of time on a schedule that may be available for booking appointments.
 * 
 *  Source: http://hl7.org/fhir/slot.html.
 */
class Slot implements Aggregate, ResourceType {
    readonly resourceType = 'Slot';
    readonly identifier;
    readonly serviceCategory;
    readonly serviceType;
    readonly specialty;
    readonly appointmentType;
    readonly schedule;
    readonly status;
    readonly start;
    readonly end;
    readonly overbooked;
    readonly comment;

    /**
     * 
     * Slot resources are used to provide time-slots that can be booked using an appointment. They do not provide any
     * information about appointments that are available, just the time, and optionally what the time can be used for. 
     * These are effectively spaces of free/busy time.
     * 
     * Slots can also be marked as busy without having appointments associated.
     * 
     * A slot can have more than one appointment allocated to it. A scheduling system may permit multiple allocations 
     * up to a specific number of places. An example of this type of usage could be where the slot is being used for 
     * a group service that permits 5 participants at the same time.
     * 
     * A slot can be marked as over-booked indicating that there are too many appointments allocated to it.
     * 
     * In some situations a service may have a specific set of slots reserved for specific uses, such as "walk-ins" 
     * or a specific organization has a "standing booking" for Thursday mornings. These should be represented using 
     * the appointmentType field with a specified and agreed value.
     * 
     * Security Permissions or specific business rules on the system could enforce that only eligible appointments 
     * are allocated to them.
     * 
     * If a service had a weekly schedule created that permitted eight 1 hour appointments each day of a working week 
     * (Monday - Friday), this would be constructed by a single Schedule resource with the dates for the start and end 
     * of the week set, and then 40 (5x8) Slot resources associated with it.
     * 
     * As appointments fill up the schedule, these slots would individually be marked as busy as the appointments are 
     * filled into the slots.
     * 
     * The slots in a schedule do not need to be the same size, and can be different for different days of the week.
     * Slot instances do not have any recurrence information included. If recurring information is desired, this will 
     * be managed outside these resources, or included as extensions.
     * 
     * Note that booking an appointment does not necessarily require that slot resources be identified. When attempting 
     * to book an appointment, if the requestor knows ahead of time which schedulable resources are required, then 
     * identifying individual slots from the resources' schedules prior to creating the appointment is appropriate.
     * 
     * However, in some medical scheduling scenarios, determining which resources are required for an appointment 
     * is very complex, and options other than using schedule+slot may be a better solution.
     * 
     * @param slot @type { SlotSchema } - An object that contains:
     *      1. **identifier** -	External Ids for this item
     *      2. **serviceCategory** - A broad categorization of the service that is to be performed during this appointment
     *      3. **serviceType** - The type of appointments that can be booked into this slot (ideally this would be an identifiable service - which is at a location, rather than the location itself). If provided then this overrides the value provided on the Schedule resource
     *      4. **specialty** - The specialty of a practitioner that would be required to perform the service requested in this appointment
     *      5. **appointmentType** - The style of appointment or patient that may be booked in the slot (not service type)
     *      6. **schedule** - The schedule resource that this slot defines an interval of status information
     *      7. **status** - busy | free | busy-unavailable | busy-tentative | entered-in-error
     *      8. **start** - Date/Time that the slot is to begin
     *      9. **end** - Date/Time that the slot is to conclude
     *      10. **overbooked** - This slot has already been overbooked, appointments are unlikely to be accepted for this time
     *      11. **comment** - Comments on the slot to describe any extended information. Such as custom constraints on the slot
     * 
     */
    constructor(slot: SlotSchema) {
        this.identifier = slot?.identifier;
        this.serviceCategory = slot?.serviceCategory;
        this.serviceType = slot?.serviceType;
        this.specialty = slot?.specialty;
        this.appointmentType = slot?.appointmentType;
        this.schedule = slot?.schedule;
        this.status = slot!.status;
        this.start = slot?.start;
        this.end = slot?.end;
        this.overbooked = slot?.overbooked;
        this.comment = slot?.comment;
    }
}

export {
    Slot,
    SlotSchema
}