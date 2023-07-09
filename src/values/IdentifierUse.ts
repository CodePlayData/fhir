// @filename: IdentifierUse.ts

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

import { Override } from "../shared/Override.js"
import { ValueSet } from "./ValueSet.js"

type IdentifierUseType = {
    version: '5.0.0',
    compose: {
        include: [
            {
                system: 'http://hl7.org/fhir/identifier-use',
                concept: 
                    { code: 'usual', display: 'Usual', definition?: 'The identifier recommended for display and use in real-world interactions which should be used when such identifier is different from the "official" identifier.' } |
                    { code: 'official', display: 'Official', definition?: 'The identifier considered to be most trusted for the identification of this item. Sometimes also known as "primary" and "main". The determination of "official" is subjective and implementation guides often provide additional guidelines for use.' } |
                    { code: 'temp', display: 'Temp', definition?: 'A temporary identifier.' } |
                    { code: 'secondary', display: 'Secondary', definition?: 'An identifier that was assigned in secondary use - it serves to identify the object in a relative context, but cannot be consistently assigned to the same object again in a different context.' } |
                    { code: 'old', display: 'Old', definition?: 'The identifier id no longer considered valid, but may be relevant for search purposes. E.g. Changes to identifier schemes, account merges, etc.' }
            }
        ]
    }
}

/** 
 *  Identifies the purpose for this identifier, if known.
 *  
 *  Source: http://hl7.org/fhir/identifier-use.
 */
type IdentifierUse = Override<ValueSet, IdentifierUseType>;

export type {
    IdentifierUse
}