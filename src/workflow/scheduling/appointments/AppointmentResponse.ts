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
import { Markdown } from "../../../core/constructors/Markdown.js";
import { PositiveInt } from "../../../core/constructors/PositiveInt.js";
import { CodeableConcept } from "../../../core/generics/CodeableConcept.js";
import { Instant } from "../../../core/generics/Instant.js";
import { Reference } from "../../../core/generics/Reference.js";
import { Identifier } from "../../../core/valuesObjects/Identifier.js";
import { Appointment } from "./Appointment.js";
import { Code } from "../../../core/generics/Code.js";
import { Patient } from "../../../admin/Patient.js";
import { Group } from "../../../admin/Group.js";
import { Practitioner } from "../../../admin/Practitioner.js";
import { PractitionerRole } from "../../../admin/PractitionerRole.js";
import { RelatedPerson } from "../../../admin/RelatedPerson.js";
import { Device } from "../../../admin/Device.js";
import { HealthcareService } from "../../../admin/HealthcareService.js";
import { Location } from "../../../admin/Location.js";
import { AppointmentResponseStatus } from "../../../values/AppointmentResponseStatus.js";
import { ParticipantType } from "./ParticipantType.js";

type AppointmentReponseSchema = {
    readonly identifier?: Identifier[],
    readonly appointment: Reference<Appointment>,
    readonly proposedNewTime?: boolean,
    readonly start?: Instant<string>,
    readonly end?: Instant<string>,
    readonly participantType?: CodeableConcept<ParticipantType>,
    readonly actor?: Reference<Patient | Group | Practitioner | PractitionerRole | RelatedPerson | Device | HealthcareService | Location>,
    readonly participantStatus: Code<AppointmentResponseStatus['code']>,
    readonly comment?: Markdown,
    readonly recurring?: boolean,
    readonly occurrencedate?: Date,
    readonly recurrenceId?: PositiveInt
};

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

    constructor(appointmentResponse: AppointmentReponseSchema) {
        this.identifier = appointmentResponse?.identifier;
        this.appointment = appointmentResponse?.appointment;
        this.proposedNewTime = appointmentResponse?.proposedNewTime;
        this.start = appointmentResponse?.start;
        this.end = appointmentResponse?.end;
        this.participantType = appointmentResponse?.participantType;
        this.actor = appointmentResponse?.actor;
        this.participantStatus = appointmentResponse?.participantStatus;
        this.comment = appointmentResponse?.comment;
        this.recurring = appointmentResponse?.recurring;
        this.occurrencedate = appointmentResponse?.occurrencedate;
        this.recurrenceId = appointmentResponse?.recurrenceId
    }
}

export {
    AppointmentResponse
}