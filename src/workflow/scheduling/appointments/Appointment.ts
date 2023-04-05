// @filename: Appointment.ts

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

import { Aggregate } from "../../../Aggregate.js";
import { ResourceType } from "../../../ResourceType.js";
import { Code } from "../../../core/generics/Code.js";
import { CodeableConcept } from "../../../core/generics/CodeableConcept.js";
import { CodeableReference } from "../../../core/valuesObjects/CodeableReference.js";
import { Identifier } from "../../../core/valuesObjects/Identifier.js";
import { HealthcareService } from "../../../shared/HealthcareService.js";
import { Hl7VSAppointmentReasonCodes } from "../../../shared/Hl7VSAppointmentReasonCodes.js";
import { PracticeSettingCodeValueSet } from "../../../shared/PracticeSettingCodeValueSet.js";
import { ServiceCategory } from "../../../shared/ServiceCategory.js";
import { ServiceType } from "../../../shared/ServiceType.js";
import { AppointmentStatus } from "../../../values/AppointmentStatus.js";
import { AppointmentCancellationReason } from "./AppointmentCancellationReason.js";

type AppointmentSchema = {
    readonly identifier?: Identifier[],
    readonly status: Code<AppointmentStatus['code']>,
    readonly cancellationReason?: CodeableConcept<AppointmentCancellationReason>,
    readonly class?: CodeableConcept<any>,
    readonly serviceCategory?: CodeableConcept<ServiceCategory>[]
    readonly serviceType?: CodeableReference<HealthcareService>[] | CodeableConcept<ServiceType>[],
    readonly specialty?: CodeableConcept<PracticeSettingCodeValueSet>[],
    readonly appointmentType?: CodeableConcept<Hl7VSAppointmentReasonCodes> | CodeableConcept<Hl7VSAppointmentReasonCodes>[],
    readonly reason?: CodeableReference<{}>
}

class Appointment implements Aggregate, ResourceType {
    readonly resourceType = 'Appointment';
    readonly identifier;

    constructor(appointment: AppointmentSchema) {
        this.identifier = appointment?.identifier;
    }
}

export {
    Appointment
}