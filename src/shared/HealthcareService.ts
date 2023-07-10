// @filename: HealthcareService.ts

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

import { HealthcareService as HealthcareServiceResource } from "../admin/HealthcareService.js";
import { CodeableConcept, CodeableConceptSchema } from "../core/general/CodeableConcept.js";
import { CodeableReference } from "../core/special/CodeableReference.js";
import { Reference } from "../core/special/Reference.js";

type HealthcareService<Concept extends CodeableConceptSchema = CodeableConceptSchema> = CodeableReference<{
    readonly concept?: CodeableConcept<Concept>,
    readonly reference?: Reference<HealthcareServiceResource>
}>

export {
    HealthcareService
}