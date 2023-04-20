// @filename: Coding.ts

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

import { Code } from "../generics/Code.js";

type CodingSchema = {
    readonly system?: URL,
    readonly version?: string,
    readonly code?: Code<string>,
    readonly display?: string,
    readonly userSelected?: boolean
}

/**
 *  A Coding is a representation of a defined concept using a symbol from a defined "code system".
 * 
 *  Source: https://build.fhir.org/datatypes.html#Coding.
 */
class Coding<T extends CodingSchema> {
    constructor(
        readonly system?: T['system'],
        readonly version?: T['version'],
        readonly code?: T['code'],
        readonly display?: T['display'],
        readonly userSelected?: T['userSelected']
    ) {};
}

export {
    Coding,
    CodingSchema
}