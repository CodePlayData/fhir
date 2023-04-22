// @filename: AppointmentResponse.ts

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
import { CodeableConcept } from "../../../core/generics/CodeableConcept.js";
import { Reference } from "../../../core/generics/Reference.js";
import { Identifier } from "../../../core/datatypes/Identifier.js";
import { Appointment } from "./Appointment.js";
import { Patient } from "../../../admin/Patient.js";
import { Group } from "../../../admin/Group.js";
import { Practitioner } from "../../../admin/Practitioner.js";
import { PractitionerRole } from "../../../admin/PractitionerRole.js";
import { RelatedPerson } from "../../../admin/RelatedPerson.js";
import { Device } from "../../../admin/Device.js";
import { HealthcareService } from "../../../admin/HealthcareService.js";
import { Location } from "../../../admin/Location.js";
import { AppointmentResponseStatus } from "../../../values/AppointmentResponseStatus.js";
import { ParticipantType } from "./types/ParticipantType.js";
import { Code } from "../../../core/primitives/Code.js";
import { Instant } from "../../../core/primitives/Instant.js";
import { Markdown } from "../../../core/primitives/Markdown.js";
import { PositiveInt } from "../../../core/primitives/PositiveInt.js";

type AppointmentResponseSchemaBase = {
    readonly identifier?: Identifier[],
    readonly appointment: Reference<Appointment>,
    readonly start?: Instant,
    readonly end?: Instant,
    readonly participantStatus: Code<AppointmentResponseStatus['code']>,
    readonly participantType?: CodeableConcept<ParticipantType>,
}

type AppointmentReponseSchemaR5 = AppointmentResponseSchemaBase & {
    readonly proposedNewTime?: boolean,
    readonly actor?: Reference<Patient | Group | Practitioner | PractitionerRole | RelatedPerson | Device | HealthcareService | Location>,
    readonly comment?: Markdown,
    readonly recurring?: boolean,
    readonly occurrencedate?: Date,
    readonly recurrenceId?: PositiveInt
};

type AppointmentReponseSchemaR4B = AppointmentResponseSchemaBase & {
    readonly actor?: Reference<Patient | Practitioner | PractitionerRole | RelatedPerson | Device | HealthcareService | Location>,
    readonly comment?: string
};

/**
 *  A reply to an appointment request for a patient and/or practitioner(s), such as a confirmation or rejection.
 * 
 *  Source: https://www.hl7.org/fhir/appointmentresponse.html.
 */
class AppointmentResponse implements Aggregate, ResourceType {
    readonly resourceType = 'AppointmentResponse';
    readonly identifier;
    readonly appointment;
    readonly proposedNewTime;
    readonly start;
    readonly end;
    readonly participantType;
    readonly actor;
    readonly participantStatus;
    readonly comment;
    readonly recurring;
    readonly occurrencedate;
    readonly recurrenceId;

    /**
     *  Appointment resources are used to provide information about a planned meeting that may be in the future or past. 
     *  They may be for a single meeting or for a series of repeating visits. Examples include a scheduled surgery, a 
     *  follow-up for a clinical visit, a scheduled conference call between clinicians to discuss a case, the reservation 
     *  of a piece of diagnostic equipment for a particular use, etc. The visit scheduled by an appointment may be in person 
     *  or remote (by phone, video conference, etc.) All that matters is that the time and usage of one or more individuals,
     *  locations and/or pieces of equipment is being fully or partially reserved for a designated period of time.
     * 
     *  This definition takes the concepts of appointments in a clinical setting and also extends them to be relevant in the
     *  community healthcare space, and also ease exposure to other appointment / calendar standards widely used outside of
     *  Healthcare.
     * 
     *  The basic worklow is:
     *  1. Making the Appointment Request - When an appointment is required, a requester creates new Appointment resource with
     *                                      the Appointment.status="proposed". All included participants (optional or mandatory)
     *                                      should have the status="needs-action" to allow filtering and displaying appointments
     *                                      to user-participants for accepting or rejecting new and updated requests. Based on
     *                                      internal system business rules, certain statuses may be automatically updated, for
     *                                      example: "reject because the requested participant is on vacation" or "this 
     *                                      typeof user is not allowed to request those specific appointments".
     *  2. Replying to the request - The reply process is simply performed by the person/system handling the requests updating
     *                               the participant statuses as needed. If there are multiple systems involved, then these will
     *                               create AppointmentResponse entries with the desired statuses. Once all participants have
     *                               their participation status created/updated (and the main system marking the appointment
     *                               participant records with the AppointmentResponse statuses) then the overall status of the
     *                               Appointment is updated. To "invalidate" an appointment response it should have the status 
     *                               changed to entered-in-error, or simply delete the resource.
     * 
     *  When a recurring appointment is requested, the participant may choose to respond to each individual occurrence, in which 
     *  case AppointmentResponse.recurring should be `false`. If the participant chooses to respond the same way for all 
     *  occurrences, they may instead use a single AppointmentResponse with recurring set to `true`. These may be combined as the 
     *  participant chooses. For example, they may accept all occurrences of a series (recurring = true), but then send a decline 
     *  for a specific occurrence (recurring = false).
     * 
     *  @param appointmentResponse @type { AppointmentReponseSchemaR4B | AppointmentReponseSchemaR5 } - An object that contains:
     *      1. **identifier** - External Ids for this item.
     *      2. **appointment** - Appointment that this response is replying to.
     *      3. **proposedNewTime** - Indicates that the response is proposing a different time that was initially requested. The
     *         new proposed time will be indicated in the start and end properties.
     *      4. **start** - Date/Time that the appointment is to take place, or requested new start time.
     *      5. **end** - This may be either the same as the appointment request to confirm the details of the appointment, or
     *         alternately a new time to request a re-negotiation of the end time.
     *      6. **participantType** - Role of participant in the appointment.
     *      7. **actor** - A Person, Location, HealthcareService, or Device that is participating in the appointment.
     *      8. **participantStatus** - Participation status of the participant. When the status is declined or tentative if the
     *          start/end times are different to the appointment, then these times should be interpreted as a requested time
     *          change. When the status is accepted, the times can either be the time of the appointment (as a confirmation of
     *          the time) or can be empty.
     *      9. **comment** - Additional comments about the appointment.
     *      10. **recurring** - Indicates that this AppointmentResponse applies to all occurrences in a recurring request. When a
     *          recurring appointment is requested, the participant may choose to respond to each individual occurrence, in which
     *          case AppointmentResponse.recurring should be false. If the participant chooses to respond the same way for all
     *          occurrences, they may instead use a single AppointmentResponse with recurring set to true. These may be combined
     *          as the participant chooses. For example, they may accept all occurrences (recurring = true), but then send a
     *          decline for a specific occurrence (recurring=false).
     *      11. **occurrenceDate** - The original date within a recurring request. This could be used in place of the
     *          recurrenceId to be more direct (or where the template is provided through the simple list of dates in Appointment
     *          occurrenceDate).
     *      12. **recurrenceId** - The recurrence ID (sequence number) of the specific appointment when responding to a recurring
     *          request. If the recurrence template was defined using the list of occurrenceDates then this property might not be
     *          used.
     */
    constructor(appointmentResponse: AppointmentReponseSchemaR4B | AppointmentReponseSchemaR5) {
        this.identifier = appointmentResponse?.identifier;
        this.appointment = appointmentResponse?.appointment;
        this.start = appointmentResponse?.start;
        this.end = appointmentResponse?.end;
        this.participantType = appointmentResponse?.participantType;
        this.actor = appointmentResponse?.actor;
        this.participantStatus = appointmentResponse?.participantStatus;
        this.comment = appointmentResponse?.comment;
        if(
            'recurring' in appointmentResponse || 
            'occurrencedate' in appointmentResponse || 
            'recurrenceId' in appointmentResponse || 
            'proposedNewTime' in  appointmentResponse
            ) {
            this.recurring = appointmentResponse?.recurring;
            this.occurrencedate = appointmentResponse?.occurrencedate;
            this.recurrenceId = appointmentResponse?.recurrenceId
            this.proposedNewTime = appointmentResponse?.proposedNewTime;
        }
    }
}

export {
    AppointmentResponse
}