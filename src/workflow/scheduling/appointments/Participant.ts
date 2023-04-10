// @filename: Participant.ts

import { CareTeam } from "../../../admin/CareTeam";
import { Device } from "../../../admin/Device";
import { Group } from "../../../admin/Group";
import { HealthcareService } from "../../../admin/HealthcareService";
import { Location } from "../../../admin/Location";
import { Patient } from "../../../admin/Patient";
import { Practitioner } from "../../../admin/Practitioner";
import { PractitionerRole } from "../../../admin/PractitionerRole";
import { RelatedPerson } from "../../../admin/RelatedPerson";
import { Code } from "../../../core/generics/Code";
import { CodeableConcept } from "../../../core/generics/CodeableConcept";
import { Reference } from "../../../core/generics/Reference";
import { Period } from "../../../core/datatypes/Period";
import { ParticipationStatus } from "../../../values/ParticipationStatus";
import { ParticipantType } from "./ParticipantType";

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

class Participant {
    constructor(
        readonly status: Code<ParticipationStatus['code']>,
        readonly type?: CodeableConcept<ParticipantType>[],
        readonly period?: Period,
        readonly actor?: Reference<Patient | Group | Practitioner | PractitionerRole | CareTeam | RelatedPerson | Device | HealthcareService | Location>,
        readonly required?: boolean,
    ) {}
}

export {
    Participant
}