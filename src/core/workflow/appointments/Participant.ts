// @filename: Participant.ts

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
import { Location } from "../../admin/Location.js";
import { CareTeam } from "../../admin/CareTeam.js";
import { Device } from "../../admin/Device.js";
import { Group } from "../../admin/Group.js";
import { HealthcareService } from "../../admin/HealthcareService.js";
import { Patient } from "../../admin/Patient.js";
import { Practitioner } from "../../admin/Practitioner.js";
import { PractitionerRole } from "../../admin/PractitionerRole.js";
import { RelatedPerson } from "../../admin/RelatedPerson.js";
import { Code } from "../../data/primitives/Code.js";
import { ParticipationStatus } from "../../values/ParticipationStatus.js";
import { ParticipantType } from "./ParticipantType.js";
import { CodeableConcept } from "../../data/general/CodeableConcept.js";
import { Period } from "../../data/general/Period.js";
import { Reference } from "../../data/special/Reference.js";

class Participant {
    constructor(
        readonly status: Code<ParticipationStatus['compose']['include'][0]['concept']['code']>,
        readonly type?: CodeableConcept<ParticipantType>[],
        readonly period?: Period,
        readonly actor?: Reference<Patient | Group | Practitioner | PractitionerRole | CareTeam | RelatedPerson | Device | HealthcareService | Location>,
        readonly required?: boolean,
    ) {}
}

export {
    Participant
}