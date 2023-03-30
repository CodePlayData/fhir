// @filename: Schedule.ts

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

import { Reference } from "../core/generics/Reference";
import { CodeableConcept } from "../core/valuesObjects/CodeableConcept";
import { CodeableReference } from "../core/valuesObjects/CodeableReference";
import { Identifier } from "../core/valuesObjects/Identifier";
import { Period } from "../core/valuesObjects/Period";
import { Aggregate } from "./Aggregate";
import { ResourceType } from "./ResourceType";

class Schedule implements Aggregate, ResourceType {
    readonly resourceType = 'Schedule';
    constructor(
        readonly actor: Reference<any>,
        readonly identifier?: Identifier[],
        readonly active?: boolean,
        readonly serviceCategory?: CodeableConcept,
        readonly serviceType?: CodeableReference[] | CodeableConcept[],
        readonly specialty?: CodeableConcept[],
        readonly name?: string,
        readonly planningHorizon?: Period,
        readonly comment?: string
    ) {}
}

export {
    Schedule
}