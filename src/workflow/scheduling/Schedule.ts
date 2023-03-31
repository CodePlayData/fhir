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

import { Reference } from "../../core/generics/Reference";
import { CodeableConcept } from "../../core/generics/CodeableConcept";
import { CodeableReference } from "../../core/valuesObjects/CodeableReference";
import { Identifier } from "../../core/valuesObjects/Identifier";
import { Period } from "../../core/valuesObjects/Period";
import { Aggregate } from "../Aggregate";
import { ResourceType } from "../ResourceType";


/**
 *  A container for slots of time that may be available for booking appointments.
 * 
 *  Source: http://hl7.org/fhir/R5/schedule.html.
 */
class Schedule implements Aggregate, ResourceType {
    readonly resourceType = 'Schedule';
    constructor(
        readonly identifier?: Identifier[],
        readonly active?: boolean,
        readonly serviceCategory?: CodeableConcept<any>,
        readonly serviceType?: CodeableReference[] | CodeableConcept<any>[],
        readonly specialty?: CodeableConcept<any>[],
        readonly name?: string,
        readonly actor?: Reference<any>,
        readonly planningHorizon?: Period,
        readonly comment?: string
    ) {}
}

export {
    Schedule
}