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

import { Reference } from "../../../core/generics/Reference.js";
import { CodeableConcept } from "../../../core/generics/CodeableConcept.js";
import { CodeableReference } from "../../../core/datatypes/CodeableReference.js";
import { Identifier } from "../../../core/datatypes/Identifier.js";
import { Period } from "../../../core/datatypes/Period.js";
import { Aggregate } from "../../../Aggregate.js";
import { ResourceType } from "../../../ResourceType.js";
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

type ScheduleSchema = {
    readonly identifier?: Identifier[],
    readonly active?: boolean,
    readonly serviceCategory?: CodeableConcept<ServiceCategory>,
    readonly serviceType?: CodeableReference<HealthcareService>[] | CodeableConcept<ServiceType>[],
    readonly specialty?: CodeableConcept<PracticeSettingCodeValueSet>[],
    readonly name?: string,
    readonly actor?: Reference<Patient | Practitioner | PractitionerRole | CareTeam | RelatedPerson | Device | HealthcareServiceResource | Location>,
    readonly planningHorizon?: Period,
    readonly comment?: Markdown
}

/**
 *  A container for slots of time that may be available for booking appointments.
 * 
 *  Source: http://hl7.org/fhir/R5/schedule.html.
 */
class Schedule implements Aggregate, ResourceType {
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

    constructor(schedule: ScheduleSchema) {
        this.identifier = schedule?.identifier;
        this.active = schedule?.active;
        this.serviceCategory = schedule?.serviceCategory;
        this.serviceType = schedule?.serviceType;
        this.specialty = schedule?.specialty;
        this.name = schedule?.name;
        this.actor = schedule?.actor;
        this.planningHorizon = schedule?.planningHorizon;
        this.comment = schedule?.comment;
    }
}

export {
    Schedule
}