// @filename: CodeableConcept.ts

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

import { Coding } from "./Coding";

/**
 *  A CodeableConcept represents a value that is usually supplied by providing a reference 
 *  to one or more terminologies or ontologies but may also be defined by the provision of text. 
 *  This is a common pattern in healthcare data.
 * 
 *  Source: https://build.fhir.org/datatypes.html#CodeableConcept.
 */
class CodeableConcept {
    constructor(readonly coding?: Coding[], readonly text?: string){};
}

export {
    CodeableConcept
}