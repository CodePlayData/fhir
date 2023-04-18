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
import { Account } from "../../../admin/Account.js";
import { Communication } from "../../../admin/Communication.js";
import { Group } from "../../../admin/Group.js";
import { Patient } from "../../../admin/Patient.js";
import { CarePlan } from "../../../clinical/careProvision/CarePlan.js";
import { ServiceRequest } from "../../../clinical/careProvision/ServiceRequest.js";
import { MedicationRequest } from "../../../medications/MedicationRequest.js";
import { DeviceRequest } from "../../../clinical/request&response/DeviceRequest.js";
import { DocumentReference } from "../../../diagnostics/DocumentReference.js";
import { Observation } from "../../../diagnostics/Observation.js";
import { ImmunizationRecommendation } from "../../../medications/ImmunizationRecommendation.js";
import { Condition } from "../../../clinical/summary/Condition.js";
import { Procedure } from "../../../clinical/summary/Procedure.js";
import { DateTime } from "../../../core/primitives/DateTime.js";
import { PositiveInt } from "../../../core/primitives/PositiveInt.js";
import { Code } from "../../../core/generics/Code.js";
import { CodeableConcept } from "../../../core/generics/CodeableConcept.js";
import { Instant } from "../../../core/generics/Instant.js";
import { Reference } from "../../../core/generics/Reference.js";
import { Annotation } from "../../../core/datatypes/Annotation.js";
import { Binary } from "../../../core/datatypes/Binary.js";
import { CodeableReference } from "../../../core/datatypes/CodeableReference.js";
import { Identifier } from "../../../core/datatypes/Identifier.js";
import { Period } from "../../../core/datatypes/Period.js";
import { VirtualServiceDetail } from "../../../core/datatypes/VirtualServiceDetail.js";
import { HealthcareService } from "../../../shared/HealthcareService.js";
import { Hl7VSAppointmentReasonCodes } from "../../../shared/Hl7VSAppointmentReasonCodes.js";
import { PracticeSettingCodeValueSet } from "../../../shared/PracticeSettingCodeValueSet.js";
import { ServiceCategory } from "../../../shared/ServiceCategory.js";
import { ServiceType } from "../../../shared/ServiceType.js";
import { AppointmentStatus } from "../../../values/AppointmentStatus.js";
import { Slot } from "../availability/Slot.js";
import { ActPriority } from "./ActPriority.js";
import { AppointmentCancellationReason } from "./AppointmentCancellationReason.js";
import { EncounterReasonCodesv5, EncounterReasonCodesv4 } from "./EncounterReasonCodes.js";
import { Participant } from "./Participant.js";
import { RecurrenceTemplate } from "./RecurrenceTemplate.js";

type AppointmentSchemaBase = {
    readonly identifier?: Identifier[],
    readonly status: Code<AppointmentStatus['code']>,
    readonly cancellationReason?: CodeableConcept<AppointmentCancellationReason>,
    readonly serviceCategory?: CodeableConcept<ServiceCategory>[],
    readonly specialty?: CodeableConcept<PracticeSettingCodeValueSet>[],
    readonly appointmentType?: CodeableConcept<Hl7VSAppointmentReasonCodes>,
    readonly description?: string,
    readonly supportingInformation?: Reference<any>[],
    readonly start?: Instant<string>,
    readonly end?: Instant<string>,
    readonly minutesDuration?: PositiveInt,
    readonly slot?: Reference<Slot>[],
    readonly requestedPeriod?: Period[],
    readonly participant: Participant[],
}

type AppointmentSchemaR4B = AppointmentSchemaBase & {
    readonly serviceType?: CodeableConcept<ServiceType>[],
    readonly reasonCode?:CodeableConcept<EncounterReasonCodesv4>[],
    readonly reasonReference?: Reference<Condition | Procedure | Observation | ImmunizationRecommendation>[],
    readonly priority?: number,
    readonly created?: DateTime,
    readonly comment?: string,
    readonly patientInstruction?: string
    readonly basedOn?: Reference<ServiceRequest>[],
}

type AppointmentSchemaR5 = AppointmentSchemaBase & {
    readonly class?: CodeableConcept<any>[],
    readonly serviceType?: CodeableReference<HealthcareService>[] | CodeableConcept<ServiceType>[],
    readonly reason?: CodeableReference<EncounterReasonCodesv5>[],
    readonly priority?: CodeableConcept<ActPriority>,
    readonly replaces?: Reference<Appointment>[],
    readonly virtualService?: VirtualServiceDetail[],
    readonly previousAppointment?: Reference<Appointment>,
    readonly originatingAppointment?: Reference<Appointment>,
    readonly account?: Reference<Account>,
    readonly created?: DateTime,
    readonly cancellationDate?: DateTime,
    readonly note?: Annotation,
    readonly patientInstruction?: Binary | CodeableReference<{
        readonly concept?: CodeableConcept<any>,
        readonly reference?: Reference<DocumentReference | Communication>
    }>
    readonly basedOn?: Reference<ServiceRequest | CarePlan | DeviceRequest | MedicationRequest>[],
    readonly subject?: Reference<Patient | Group>,
    readonly recurrenceId?: PositiveInt,
    readonly occurrenceChanged?: boolean,
    readonly recurrenceTemplate?: RecurrenceTemplate[]
}

class Appointment implements Aggregate, ResourceType {
    readonly resourceType = 'Appointment';
    readonly identifier;
    readonly status;
    readonly cancellationReason;
    readonly class;
    readonly serviceCategory;
    readonly serviceType;
    readonly specialty;
    readonly appointmentType;
    readonly reason;
    readonly reasonCode;
    readonly reasonReference;
    readonly priority;
    readonly description;
    readonly replaces;
    readonly virtualService;
    readonly supportingInformation;
    readonly previousAppointment;
    readonly originatingAppointment;
    readonly start;
    readonly end;
    readonly minutesDuration;
    readonly requestedPeriod;
    readonly slot;
    readonly account;
    readonly created;
    readonly comment;
    readonly cancellationDate;
    readonly note;
    readonly patientInstruction;
    readonly basedOn;
    readonly subject;
    readonly recurrenceId;
    readonly occurrenceChanged;
    readonly participant;
    readonly recurrenceTemplate;

    constructor(appointment: AppointmentSchemaR4B | AppointmentSchemaR5) {
        this.identifier = appointment?.identifier;
        this.status = appointment?.status;
        this.cancellationReason = appointment?.cancellationReason;
        this.class = appointment?.class;
        this.serviceCategory = appointment?.serviceCategory;
        this.serviceType = appointment?.serviceType;
        this.specialty = appointment?.specialty;
        this.appointmentType = appointment?.appointmentType;
        this.reason = appointment?.reason;
        this.reasonCode = appointment?.reasonCode;
        this.reasonReference = appointment?.reasonReference;
        this.priority = appointment?.priority;
        this.description = appointment?.description;
        this.replaces = appointment?.replaces;
        this.virtualService = appointment?.virtualService;
        this.supportingInformation = appointment?.supportingInformation;
        this.previousAppointment = appointment?.previousAppointment;
        this.originatingAppointment = appointment?.originatingAppointment;
        this.start = appointment?.start;
        this.end = appointment?.end;
        this.minutesDuration = appointment?.minutesDuration;
        this.requestedPeriod = appointment?.requestedPeriod;
        this.slot = appointment?.slot;
        this.account = appointment?.account;
        this.created = appointment?.created;
        this.comment = appointment?.comment;
        this.cancellationDate = appointment?.cancellationDate;
        this.note = appointment?.note;
        this.patientInstruction = appointment?.patientInstruction;
        this.basedOn = appointment?.basedOn;
        this.subject = appointment?.subject;
        this.recurrenceId = appointment?.recurrenceId;
        this.occurrenceChanged = appointment?.occurrenceChanged;
        this.participant = appointment?.participant;
        this.recurrenceTemplate = appointment?.recurrenceTemplate
    }
}

export {
    Appointment
}