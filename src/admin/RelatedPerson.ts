// @filename: RelatedPerson.ts

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

import { Aggregate } from "../Aggregate.js";
import { ResourceType } from "../ResourceType.js";
import { Identifier } from "../core/valuesObjects/Identifier.js";

/**
 *  Information about a person that is involved in a patient's health or the care for a patient, but who is not the target 
 *  of healthcare, nor has a formal responsibility in the care process.
 * 
 *  ### Scope and Usage
 *  RelatedPersons typically have a personal relationship or non-healthcare-specific professional relationship to the patient. 
 *  A RelatedPerson resource is primarily used for attribution of information, since RelatedPersons are often a source of 
 *  information about the patient. For keeping information about people for contact purposes for a patient, use a Patient's 
 *  Contact element. Some individuals may serve as both a Patient's Contact and a Related Person.
 * 
 *  Example RelatedPersons are:
 *  * A patient's wife or husband
 *  * A patient's relatives or friends
 *  * A neighbor bringing a patient to the hospital
 *  * The owner or trainer of a horse
 *  * A patient's attorney or guardian
 *  * A Guide Dog
 * 
 *  Source: https://www.hl7.org/fhir/relatedperson.html.
 */
class RelatedPerson implements Aggregate, ResourceType {
    readonly resourceType = 'RelatedPerson';
    readonly identifier?: Identifier[]
};

export {
    RelatedPerson
}