// @filename: Reference.ts

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

import { ResourceType } from "../../ResourceType.js";
import { Identifier } from "../valuesObjects/Identifier.js";

/**
 *  The FHIR structure that points to some Resource, usually by the identification.
 * 
 *  Source: https://www.hl7.org/fhir/references.html#Reference.
 */
class Reference <T extends ResourceType> {
    constructor(
        readonly reference?: URL,
        readonly type?: T['resourceType'],
        readonly identifier?: Identifier,
        readonly display?: string
    ){};
}

export { 
    Reference
}