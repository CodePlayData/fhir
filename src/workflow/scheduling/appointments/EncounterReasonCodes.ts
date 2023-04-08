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

import { Observation } from "../../../clinicalSummary/diagnostics/Observation.js";
import { ImmunizationRecommendation } from "../../../clinicalSummary/medications/ImmunizationRecommendation.js";
import { Condition } from "../../../clinicalSummary/summary/Condition.js";
import { Procedure } from "../../../clinicalSummary/summary/Procedure.js";
import { Code } from "../../../core/generics/Code.js";
import { CodeableConcept } from "../../../core/generics/CodeableConcept.js";
import { Reference } from "../../../core/generics/Reference.js";
import { CodeableReference } from "../../../core/valuesObjects/CodeableReference.js";
import { Coding } from "../../../core/valuesObjects/Coding.js";
import { ValueSet } from "../../../values/ValueSet.js";

type EncounterReasonCodes = CodeableReference<{
    readonly concept?: CodeableConcept<{
        readonly coding?: Coding<{
            readonly system?: URL;
            readonly version?: string;
            // Débito Técnico: Deve incluir um ValeuSet dos códigos do CID-11 para razões de procurar atendimento.
            readonly code?: Code<ValueSet['code']>;
            readonly display?: ValueSet['display'];
            readonly userSelected?: boolean;
        }>[] | undefined;
        readonly text?: string;
    }>,
    readonly reference?: Reference<Condition | Procedure | Observation | ImmunizationRecommendation>
}>

export {
    EncounterReasonCodes
}