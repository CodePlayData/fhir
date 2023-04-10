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