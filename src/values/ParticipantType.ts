// @filename: ParticipantType.ts

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

import { ValueSet } from "./ValueSet.js"

/**
 *  This value set defines a set of codes that can be used to indicate how an individual participates in an encounter.
 * 
 *  Source: http://hl7.org/fhir/ValueSet/encounter-participant-type.
 */
type ParticipantType = ValueSet &
    { code: 'ADM', display: 'admitter', definition: 'The practitioner who is responsible for admitting a patient to a patient encounter.' } |
    { code: 'ATND', display: 'attender', definition: "The practitioner that has responsibility for overseeing a patient's care during a patient encounter." } |
    { code: 'CALLBCK', display: 'callback contact', definition: 'A person or organization who should be contacted for follow-up questions about the act in place of the author.' } |
    { code: 'CON', display: 'consultant', definition: 'An advisor participating in the service by performing evaluations and making recommendations.' } |
    { code: 'DIS', display: 'discharger', definition: 'The practitioner who is responsible for the discharge of a patient from a patient encounter.' } |
    { code: 'ESC', display: 'escort', definition: 'Only with Transportation services. A person who escorts the patient.' } |
    { code: 'REF', display: 'referrer', definition: 'A person having referred the subject of the service to the performer (referring physician). Typically, a referring physician will receive a report.' } |
    { code: 'translator', display: 'Translator', definition: 'A translator who is facilitating communication with the patient during the encounter.' } |
    { code: 'emergency', display: 'Emergency', definition: 'A person to be contacted in case of an emergency during the encounter.' }


export {
    ParticipantType
}