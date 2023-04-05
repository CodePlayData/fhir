// @filename: ServiceType.ts

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

import { Code } from "../core/generics/Code.js";
import { CodeableConcept } from "../core/generics/CodeableConcept.js";
import { Coding } from "../core/valuesObjects/Coding.js";
import { ServiceType as ServiceTypeValueSet } from "../values/ServiceType.js";

type ServiceType = CodeableConcept<{
    readonly coding?: Coding<{
        readonly system?: URL;
        readonly version?: string;
        readonly code?: Code<ServiceTypeValueSet['code']>;
        readonly display?: ServiceTypeValueSet['display'];
        readonly userSelected?: boolean;
    }>[] | undefined;
    readonly text?: string;
}>

export {
    ServiceType
}