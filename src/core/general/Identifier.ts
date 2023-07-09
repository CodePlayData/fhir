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
import { Period } from "./Period.js";
import { Coding } from "./Coding.js";
import { IdentifierType } from "../../values/IdentifierType.js";
import { Organization } from "../../admin/Organization.js";
import { Code } from "../primitives/Code.js";
import { Reference } from "../special/Reference.js";
import { CodeableConcept } from "./CodeableConcept.js";
import { ValueSet } from "../../values/ValueSet.js";

/**
 *  A string, typically numeric or alphanumeric, that is associated with a single object or entity 
 *  within a given system. Typically, identifiers are used to connect content in resources to 
 *  external content available in other frameworks or protocols. Identifiers are associated with 
 *  objects and may be changed or retired due to human or system process and errors.
 *  
 *  Source: https://build.fhir.org/datatypes.html#Identifier.
 */
class Identifier<
    IdentifierUseVS extends ValueSet = IdentifierUse,
    IdentifierTypeVS extends ValueSet = IdentifierType
> {
    readonly use?: Code<string>;
    readonly type?: CodeableConcept<IdentifierTypeCodes>;
    readonly system?: URL | `${string}:${string}`;
    readonly period?: Period;
    readonly assigner?: Reference<Organization>;

    constructor(
        use?: IdentifierUseVS['compose']['include']['0']['concept']['code'],
        type?: {
            system?: IdentifierTypeVS['compose']['include']['0']['system'] | `${string}:${string}`,
            version?: IdentifierTypeVS['version'],
            code?: IdentifierTypeVS['compose']['include']['0']['concept']['code'] | string,
            display?: IdentifierTypeVS['compose']['include']['0']['concept']['display'],
            userSelected?: boolean
        },
        system?: IdentifierUseVS['compose']['include']['0']['system'] | `${string}:${string}`,
        readonly value?: string,
        period?: {
            start: Date,
            end: Date
        },
        assigner?: Organization
    ){
        this.use = use ? new Code(use) : undefined;
        this.type = type ? new CodeableConcept([
            new Coding(
                type.system ? new URL(type.system.toString()) : undefined,
                type.version ? type.version.toString() : undefined,
                type.code ? new Code(type.code): undefined,
                type.display?.toString(),
                true
            )
        ]) : undefined;
        this.period = period ? new Period(period.start, period.end) : undefined;
        this.assigner = assigner ? new Reference(undefined, 'Organization', assigner.identifier ? assigner.identifier[0] : undefined) : undefined;
        this.system = system ? new URL(system) : undefined;
        
    };
}

type IdentifierTypeCodes = CodeableConcept<{
    readonly coding?: Coding<{
        readonly system?: URL;
        readonly version?: string;
        readonly code?: Code<IdentifierType['compose']['include']['0']['concept']['code']>;
        readonly display?: string;
        readonly userSelected?: boolean;
    }>[] | undefined;
    readonly text?: string | undefined;
}>

export {
    Identifier,
    IdentifierTypeCodes
}