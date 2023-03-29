// @filename: Identifier.ts

/**
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

import { IdentifierUse } from "../../configs/valueSets/IdentifierUse.js";
import { Code } from "../constructors/Code.js";
import { CodeableConcept } from "./CodeableConcept.js";
import { Period } from "./Period.js";
import { Reference } from "../entities/Reference.js";


class Identifier {
    use?: Code;
    constructor(
        use?: IdentifierUse,
        readonly type?: CodeableConcept,
        readonly system?: URL | `${string}:${string}`,
        readonly value?: string,
        readonly period?: Period,
        readonly assigner?: Reference
    ){
        this.use = new Code(use);
    };
}

export {
    Identifier
}