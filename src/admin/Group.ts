// @filename: Group.ts

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
import { Identifier } from "../core/datatypes/Identifier.js";

/**
 *  Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to 
 *  act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization.
 * 
 *  ### Use Cases
 *  The Group resource is used in one of two ways:
 *  * To define a group of specific people, animals, devices, etc. that is being tracked, examined or otherwise referenced as part of healthcare-related activities;
 *  * To define a set of possible people, animals, devices, etc. that are of interest for some intended future healthcare-related activities;
 * 
 *  Source: https://www.hl7.org/fhir/group.html.
 */
class Group implements Aggregate, ResourceType {
    readonly resourceType = 'Group';
    readonly identifier?: Identifier[]
};

export {
    Group
}