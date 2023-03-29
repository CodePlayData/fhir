// @filename: Slot.ts

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

import { ResourceType } from "./ResourceType.js";
import { Code } from "../core/constructors/Code.js";
import { CodeableConcept } from "../core/valuesObjects/CodeableConcept.js";
import { CodeableReference } from "../core/valuesObjects/CodeableReference.js";
import { Instant } from "../core/generics/Instant.js";
import { Reference } from "../core/entities/Reference.js";
import { Aggregate } from "./Aggregate.js";
import { Identifier } from "../core/valuesObjects/Identifier.js";

class Slot implements Aggregate, ResourceType {
    resourceType = 'Slot';
    constructor(
        readonly identifier?: Identifier[],
        readonly serviceCategory?: CodeableConcept[],
        // version 5 update
        readonly serviceType?: CodeableReference[] | CodeableConcept[],
        readonly specialty?: CodeableConcept[],
        readonly appointmentType?: CodeableConcept[],
        readonly schedule?: Reference,
        readonly status?: Code,
        readonly start?: Instant<string>,
        readonly end?: Instant<string>,
        readonly overbooked?: boolean,
        readonly comment?: string
    ) {}
}

export {
    Slot
}