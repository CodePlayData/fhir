// @filename: Identifier.ts

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

import { IdentifierUse } from "../../values/IdentifierUse.js";
import { Code } from "../generics/Code.js";
import { CodeableConcept, CodeableConceptSchema } from "../generics/CodeableConcept.js";
import { Period } from "./Period.js";
import { Reference } from "../generics/Reference.js";
import { Coding, CodingSchema } from "./Coding.js";
import { IdentifierType as IdentifierTypeValueSet } from "../../values/IdentifierType.js";

/**
 *  A string, typically numeric or alphanumeric, that is associated with a single object or entity 
 *  within a given system. Typically, identifiers are used to connect content in resources to 
 *  external content available in other frameworks or protocols. Identifiers are associated with 
 *  objects and may be changed or retired due to human or system process and errors.
 *  
 *  Source: https://build.fhir.org/datatypes.html#Identifier.
 */
class Identifier {
    constructor(
        readonly use?: Code<IdentifierUse>,
        readonly type?: CodeableConcept<IdentifierType>,
        readonly system?: URL | `${string}:${string}`,
        readonly value?: string,
        readonly period?: Period,
        readonly assigner?: Reference<any>
    ){
        if(typeof(use) === 'string') {
            this.use = new Code(use);
        }
    };
}

type IdentifierType = CodeableConcept<{
    readonly coding?: Coding<{
        readonly system?: URL;
        readonly version?: string;
        readonly code?: Code<IdentifierTypeValueSet>;
        readonly display?: string;
        readonly userSelected?: boolean;
    }>[] | undefined;
    readonly text?: string | undefined;
}>

export {
    Identifier
}