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
import { ActPriority } from "./types/ActPriority.js";
import { AppointmentCancellationReason } from "./types/AppointmentCancellationReason.js";
import { EncounterReasonCodesv5, EncounterReasonCodesv4 } from "./types/EncounterReasonCodes.js";
import { Participant } from "./structs/Participant.js";
import { RecurrenceTemplate } from "./structs/RecurrenceTemplate.js";

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

/**
 *  A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).
 * 
 *  Source: http://hl7.org/fhir/R5/appointment.html.
 */
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

    /**
     * 
     * @param appointment @type { AppointmentSchemaR4B | AppointmentSchemaR5 } - An object that contains:
     *      1. **identifier** - This records identifiers associated with this appointment concern that are defined by business 
     *                          processes and/or used to refer to it when a direct URL reference to the resource itself is not 
     *                          appropriate (e.g. in CDA documents, or in written / printed documentation).
     *      2. **status** - The overall status of the Appointment. Each of the participants has their own participation status 
     *                      which indicates their involvement in the process, however this status indicates the shared status.
     *      3. **cancellationReason** - The coded reason for the appointment being cancelled. This is often used in 
     *                                  reporting/billing/futher processing to determine if further actions are required, or 
     *                                  specific fees apply.
     *      4. **class** - Concepts representing classification of patient encounter such as ambulatory (outpatient), inpatient, 
     *                     emergency, home health or others due to local variations.
     *      5. **serviceCategory** - A broad categorization of the service that is to be performed during this appointment.
     *      6. **serviceType** - The specific service that is to be performed during this appointment.
     *      7. **specialty** - The specialty of a practitioner that would be required to perform the service requested in this 
     *                         appointment.
     *      8. **appointmentType** - The style of appointment or patient that has been booked in the slot (not service type).
     *      9. **reason** - The reason that this appointment is being scheduled. This is more clinical than administrative. 
     *                      This can be coded, or as specified using information from another resource. When the patient 
     *                      arrives and the encounter begins it may be used as the admission diagnosis. The indication will 
     *                      typically be a Condition (with other resources referenced in the evidence.detail), or a Procedure.
     *      10. **priority** - The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize 
     *                         appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
     *      11. **description** - The brief description of the appointment as would be shown on a subject line in a meeting request, 
     *                            or appointment list. Detailed or expanded information should be put in the note field.
     *      12. **replaces** - Appointment replaced by this Appointment in cases where there is a cancellation, the details of the 
     *                         cancellation can be found in the cancellationReason property (on the referenced resource).
     *      13. **virtualService** - Connection details of a virtual service (e.g. conference call).
     *                               There are two types of virtual meetings that often exist:
     *                               a.    a persistent, virtual meeting room that can only be used for a single purpose at a time,
     *                               b.    and a dynamic virtual meeting room that is generated on demand for a specific purpose.
     *                                     Implementers may consider using Location.virtualService for persistent meeting rooms.
     *                               If each participant would have a different meeting link, an extension using the 
     *                               VirtualServiceContactDetail can be applied to the Appointment.participant BackboneElement.
     *      14. **supportingInformation** - Additional information to support the appointment provided when making the appointment.
     *      15. **previousAppointment** - The previous appointment in a series of related appointments. This property is intended 
     *                                    for use when representing a series of related appointments. For example, in a nuclear 
     *                                    medicine procedure, where there is an appointment for the injection of the isotopes, 
     *                                    and then a subsequent appointment for the scan, the scan appointment would refer to 
     *                                    the injection appointment via Appointment.previousAppointment. For representing recurring 
     *                                    appointments, see the guidance on recurring vs. series appointments.
     *      16. **originatingAppointment** - The originating appointment in a recurring set of related appointments. This property 
     *                                       is intended for use when representing a recurring set of related appointments.
     *                                       For example, a patient undergoing physical therapy may have a recurring appointment 
     *                                       every Tuesday and Thursday. Each occurrence of the set will refer to the originating 
     *                                       appointment, which contains the recurring template information. For representing 
     *                                       appointment series, see the guidance on recurring vs. series appointments.
     *      17. **start** - Date/Time that the appointment is to take place.
     *      18. **end** - Date/Time that the appointment is to conclude.
     *      19. **minutesDuration** - Number of minutes that the appointment is to take. This can be less than the duration between 
     *                                the start and end times. For example, where the actual time of appointment is only an estimate 
     *                                or if a 30 minute appointment is being requested, but any time would work. Also, if there is, 
     *                                for example, a planned 15 minute break in the middle of a long appointment, the duration may 
     *                                be 15 minutes less than the difference between the start and end.
     *      20. **requestedPeriod** - A set of date ranges (potentially including times) that the appointment is preferred to be scheduled within. 
     *                                The duration (usually in minutes) could also be provided to indicate the length of the appointment to fill 
     *                                and populate the start/end times for the actual allocated time. However, in other situations the duration 
     *                                may be calculated by the scheduling system.
     *      21. **slot** - The slots from the participants' schedules that will be filled by the appointment.
     *      22. **account** - The set of accounts that is expected to be used for billing the activities that result from this Appointment.
     *      23. **created** - 
     */
    constructor(appointment: AppointmentSchemaR4B | AppointmentSchemaR5) {
        this.identifier = appointment?.identifier;
        this.status = appointment?.status;
        this.cancellationReason = appointment?.cancellationReason;
        this.serviceCategory = appointment?.serviceCategory;
        this.serviceType = appointment?.serviceType;
        this.specialty = appointment?.specialty;
        this.appointmentType = appointment?.appointmentType;
        this.priority = appointment?.priority;
        this.description = appointment?.description;
        this.supportingInformation = appointment?.supportingInformation;
        this.start = appointment?.start;
        this.end = appointment?.end;
        this.minutesDuration = appointment?.minutesDuration;
        this.requestedPeriod = appointment?.requestedPeriod;
        this.slot = appointment?.slot;
        this.created = appointment?.created;
        this.patientInstruction = appointment?.patientInstruction;
        this.basedOn = appointment?.basedOn;
        this.participant = appointment?.participant;

        if(
            'recurrenceTemplate' in appointment      ||
            'class' in appointment                   ||
            'subject' in appointment                 ||
            'recurrenceId' in appointment            ||
            'occurrenceChanged' in appointment       ||
            'account' in appointment                 ||
            'cancellationDate' in appointment        ||
            'note' in appointment                    ||
            'replaces' in appointment                ||
            'virtualService' in appointment          ||
            'previousAppointment' in appointment     ||
            'originatingAppointment' in appointment  ||
            'reason' in appointment
            ) {
            this.recurrenceTemplate = appointment?.recurrenceTemplate;
            this.class = appointment?.class;
            this.subject = appointment?.subject;
            this.recurrenceId = appointment?.recurrenceId;
            this.occurrenceChanged = appointment?.occurrenceChanged;
            this.account = appointment?.account;
            this.cancellationDate = appointment?.cancellationDate;
            this.note = appointment?.note;
            this.replaces = appointment?.replaces;
            this.virtualService = appointment?.virtualService;
            this.previousAppointment = appointment?.previousAppointment;
            this.originatingAppointment = appointment?.originatingAppointment;
            this.reason = appointment?.reason;
        }

        if(
            'comment' in appointment          ||
            'reasonCode' in appointment       ||
            'reasonReference' in appointment
            ) {
            this.comment = appointment?.comment;
            this.reasonCode = appointment?.reasonCode;
            this.reasonReference = appointment?.reasonReference;
        }
    }
}

export {
    Appointment
}