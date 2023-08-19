// @filename: EncounterReasonCodes.ts

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

import { Condition } from "../../clinical/summary/Condition.js";
import { Procedure } from "../../clinical/summary/Procedure.js";
import { CodeableConcept } from "../../data/general/CodeableConcept.js";
import { Coding } from "../../data/general/Coding.js";
import { Code } from "../../data/primitives/Code.js";
import { CodeableReference } from "../../data/special/CodeableReference.js";
import { Reference } from "../../data/special/Reference.js";
import { Observation } from "../../diagnostics/Observation.js";
import { ImmunizationRecommendation } from "../../medications/ImmunizationRecommendation.js";
import { ValueSet } from "../../values/ValueSet.js";

type EncounterReasonCodesv5 = CodeableReference<{
    readonly concept?: CodeableConcept<{
        readonly coding?: Coding<{
            readonly system?: URL;
            readonly version?: string;
            // Débito Técnico: Deve incluir um ValeuSet dos códigos do CID-11 para razões de procurar atendimento.
            readonly code?: Code<ValueSet['compose']['include'][0]['concept']['code']>;
            readonly display?: ValueSet['compose']['include'][0]['concept']['display'];
            readonly userSelected?: boolean;
        }>[] | undefined;
        readonly text?: string;
    }>,
    readonly reference?: Reference<Condition | Procedure | Observation | ImmunizationRecommendation>
}>

type EncounterReasonCodesv4 = CodeableConcept<{
    readonly coding?: Coding<{
        readonly system?: URL;
        readonly version?: string;
        readonly code?: Code<ValueSet['compose']['include'][0]['concept']['code']>;
        readonly display?: ValueSet['compose']['include'][0]['concept']['display'];
        readonly userSelected?: boolean;
    }>[],
    readonly text?: string
}>

export {
    EncounterReasonCodesv5,
    EncounterReasonCodesv4
}