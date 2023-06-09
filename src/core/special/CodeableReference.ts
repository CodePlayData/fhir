// @filename: CodeableReference.ts

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

import { CodeableConcept } from "../general/CodeableConcept.js"
import { Reference } from "./Reference.js"

type CodeableReferenceSchema = {
    readonly concept?: CodeableConcept<any>,
    readonly reference?: Reference<any>
}

/**
 *  A common pattern in healthcare records is that a single element may refer to either a concept in 
 *  principle, or a specific instance of the concept as seen in practice. For instance, a medication 
 *  may be prescribed because the patient has a headache - e.g. to refer to a headache by a SNOMED CT 
 *  code for a kind of headache. Alternatively, the record may refer to a specific observation or 
 *  problem in the problem list as evidence for the patient's headache, which conveys details specific 
 *  to the patient.
 * 
 *  Source: https://build.fhir.org/references.html#CodeableReference
 */
class CodeableReference <T extends CodeableReferenceSchema> {
    constructor(
        readonly concept?: T['concept'],
        readonly reference?: T['reference']
    ){}
}

export {
    CodeableReference,
    CodeableReferenceSchema
}