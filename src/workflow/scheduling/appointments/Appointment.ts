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
import { VirtualServiceDetail } from "../../../core/metadata/VirtualServiceDetail.js";
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
import { Code } from "../../../core/primitives/Code.js";
import { DateTime } from "../../../core/primitives/DateTime.js";
import { Instant } from "../../../core/primitives/Instant.js";
import { PositiveInt } from "../../../core/primitives/PositiveInt.js";
import { Annotation } from "../../../core/general/Annotation.js";
import { CodeableConcept } from "../../../core/general/CodeableConcept.js";
import { Identifier } from "../../../core/general/Identifier.js";
import { Period } from "../../../core/general/Period.js";
import { CodeableReference } from "../../../core/special/CodeableReference.js";
import { Reference } from "../../../core/special/Reference.js";
import { Binary } from "../../../foundation/other/Binary.js";
import { Resource } from "../../../core/Resource.js";

type AppointmentSchemaBase = {
    readonly identifier?: Identifier[],
    readonly status: Code<AppointmentStatus['code']>,
    readonly cancellationReason?: CodeableConcept<AppointmentCancellationReason>,
    readonly serviceCategory?: CodeableConcept<ServiceCategory>[],
    readonly specialty?: CodeableConcept<PracticeSettingCodeValueSet>[],
    readonly appointmentType?: CodeableConcept<Hl7VSAppointmentReasonCodes>,
    readonly description?: string,
    readonly supportingInformation?: Reference<any>[],
    readonly start?: Instant,
    readonly end?: Instant,
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
class Appointment implements Resource {
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
     *  Appointment resources are used to provide information about a planned meeting that may be in the future or past. The resource only
     *  describes a single meeting, a series of repeating visits would require multiple appointment resources to be created for each instance. 
     *  Examples include a scheduled surgery, a follow-up for a clinical visit, a scheduled conference call between clinicians to discuss a case 
     *  (where the patient is a subject, but not a participant), the reservation of a piece of diagnostic equipment for a particular use, etc. 
     *  The visit scheduled by an appointment may be in person or remote (by phone, video conference, etc.) All that matters is that the time and 
     *  usage of one or more individuals, locations and/or pieces of equipment is being fully or partially reserved for a designated period of 
     *  time.        
     *  This definition takes the concepts of appointments in a clinical setting and also extends them to be relevant in the community healthcare
     *  space, and to ease exposure to other appointment / calendar standards widely used outside of healthcare.
     * 
     *  The basic workflow to create an appointment is:
     *  a. **Discovery/Addressing**
     *     Before an appointment can be made, the address/endpoint details of the resource that we want to schedule an appointment with must be
     *     determined. This is often based on the healthcare service type and any formatting information which indicates how to make the request. 
     *     This is typically handled via the Schedule resource.
     *  b. **Checking Availability on the Schedule (optional)**
     *     This optional step permits the checking of any existing available times (Slot resources associated with a selected Schedule) that can 
     *     be booked against. Just because a time is indicated as available doesn't guarantee that an appointment can be made. The booking system 
     *     that is going to process the request may make other qualifying decisions to determine if the appointment can be made, such as 
     *     permissions, assessments, availability of other resources, etc. This step is optional, as the creation of the appointment is never a
     *     guaranteed action. But by performing this availability check, you can increase the chances of making a successful booking.
     *  c. **Making the Appointment Request**
     *    When an appointment is required, a requester creates new Appointment resource with the Appointment.status="proposed".
     *    All included participants (optional or mandatory) should have the status="needs-action" to allow filtering and displaying
     *    appointments to user-participants for accepting or rejecting new and updated requests. Based on internal system business rules, certain
     *    statuses may be automatically updated, for example: "reject because the requested participant is on vacation" or "this type of user is 
     *    not allowed to request those specific appointments".
     *  d. **Replying to the request**
     *     The reply process is simply performed by the person/system handling the requests, updating the participant statuses on the 
     *     appointment as needed. If there are multiple systems involved, then these will create AppointmentResponse entries with the desired
     *     statuses. Once all participants have their participation status created/updated (and the main system marking the appointment 
     *     participant records with the AppointmentResponse statuses) then the overall status of the Appointment is updated.
     *  e. **Checking the overall status (Requester)**
     *     The requester (organizer) of the appointment checks for the overall status of the appointment (and appointment responses, where 
     *     applicable) using FHIR pub-sub techniques.
     *     Where the participant statuses indicate that a re-scheduling is required, then the process may start again, with other systems
     *     replying to a new set of times.
     *  f. **Waitlisting the Appointment (optional)**
     *      This optional step permits creating a waitlisted appointment. This could occur if an appointment needs to be booked into a time that 
     *      is not ideal for the patient due to lack of available time slots. In this workflow, there would be two appointments, the booked 
     *      appointment in the time slot that is currently available, and the waitlisted appointment with a requestedPeriod spanning the time 
     *      that the patient would prefer if new slots become available.
     *      If new time slots become available during the requestedPeriod, the scheduling system, or staff at the scheduling organization, can 
     *      notify the patient that a new time slot is available. If the patient chooses, the waitlisted appointment would then be booked into 
     *      that specific slot, and the previously booked appointment would be canceled. The specific business process for notifying patients of 
     *      new availability is not specified, and is up to the implementing system to determine.
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
     *      10. **reasonCode** - The coded reason that this appointment is being scheduled. This is more clinical than administrative.
     *      11. **reasonReference** - Reason the appointment has been scheduled to take place, as specified using information from another
     *                                resource. When the patient arrives and the encounter begins it may be used as the admission diagnosis. The 
     *                                indication will typically be a Condition (with other resources referenced in the evidence.detail), or 
     *                                a Procedure.
     *      12. **priority** - The priority of the appointment. Can be used to make informed decisions if needing to re-prioritize 
     *                         appointments. (The iCal Standard specifies 0 as undefined, 1 as highest, 9 as lowest priority).
     *      13. **description** - The brief description of the appointment as would be shown on a subject line in a meeting request, 
     *                            or appointment list. Detailed or expanded information should be put in the note field.
     *      14. **replaces** - Appointment replaced by this Appointment in cases where there is a cancellation, the details of the 
     *                         cancellation can be found in the cancellationReason property (on the referenced resource).
     *      15. **virtualService** - Connection details of a virtual service (e.g. conference call).
     *                               There are two types of virtual meetings that often exist:
     *                               a.    a persistent, virtual meeting room that can only be used for a single purpose at a time,
     *                               b.    and a dynamic virtual meeting room that is generated on demand for a specific purpose.
     *                                     Implementers may consider using Location.virtualService for persistent meeting rooms.
     *                               If each participant would have a different meeting link, an extension using the 
     *                               VirtualServiceContactDetail can be applied to the Appointment.participant BackboneElement.
     *      16. **supportingInformation** - Additional information to support the appointment provided when making the appointment.
     *      17. **previousAppointment** - The previous appointment in a series of related appointments. This property is intended 
     *                                    for use when representing a series of related appointments. For example, in a nuclear 
     *                                    medicine procedure, where there is an appointment for the injection of the isotopes, 
     *                                    and then a subsequent appointment for the scan, the scan appointment would refer to 
     *                                    the injection appointment via Appointment.previousAppointment. For representing recurring 
     *                                    appointments, see the guidance on recurring vs. series appointments.
     *      18. **originatingAppointment** - The originating appointment in a recurring set of related appointments. This property 
     *                                       is intended for use when representing a recurring set of related appointments.
     *                                       For example, a patient undergoing physical therapy may have a recurring appointment 
     *                                       every Tuesday and Thursday. Each occurrence of the set will refer to the originating 
     *                                       appointment, which contains the recurring template information. For representing 
     *                                       appointment series, see the guidance on recurring vs. series appointments.
     *      19. **start** - Date/Time that the appointment is to take place.
     *      20. **end** - Date/Time that the appointment is to conclude.
     *      21. **minutesDuration** - Number of minutes that the appointment is to take. This can be less than the duration between 
     *                                the start and end times. For example, where the actual time of appointment is only an estimate 
     *                                or if a 30 minute appointment is being requested, but any time would work. Also, if there is, 
     *                                for example, a planned 15 minute break in the middle of a long appointment, the duration may 
     *                                be 15 minutes less than the difference between the start and end.
     *      22. **requestedPeriod** - A set of date ranges (potentially including times) that the appointment is preferred to be scheduled 
     *                                within. 
     *                                The duration (usually in minutes) could also be provided to indicate the length of the appointment to fill 
     *                                and populate the start/end times for the actual allocated time. However, in other situations the duration 
     *                                may be calculated by the scheduling system.
     *      23. **slot** - The slots from the participants' schedules that will be filled by the appointment.
     *      24. **account** - The set of accounts that is expected to be used for billing the activities that result from this Appointment.
     *      25. **created** - The date that this appointment was initially created. This could be different to the meta.lastModified value 
     *                        on the initial entry, as this could have been before the resource was created on the FHIR server, and should 
     *                        remain unchanged over the lifespan of the appointment.
     *      26. **comment** - Additional comments about the appointment.
     *      27. **cancellationDate** - The date/time describing when the appointment was cancelled.
     *      28. **note** - Additional notes/comments about the appointment.
     *      29. **patientInstruction** - While Appointment.note contains information for internal use, Appointment.patientInstructions is used 
     *                                   to capture patient facing information about the Appointment (e.g. please bring your referral or fast
     *                                   from 8pm night before).
     *      30. **basedOn** - The request this appointment is allocated to assess (e.g. incoming referral or procedure request).
     *      31. **subject** - The patient or group associated with the appointment, if they are to be present (usually) then they should also 
     *                        be included in the participant backbone element.
     *      32. **recurrenceId** - The sequence number that identifies a specific appointment in a recurring pattern.
     *      33. **occurrenceChanged** - This appointment varies from the recurring pattern.
     *      34. **participant** - List of participants involved in the appointment.
     *      35. **recurrenceTemplate** - The details of the recurrence pattern or template that is used to generate recurring appointments.
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
    Appointment,
    AppointmentSchemaBase,
    AppointmentSchemaR4B,
    AppointmentSchemaR5
}