// @filename: CareTeam.ts

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
 *  The Care Team includes all the people and organizations who plan to participate in the coordination and delivery of care.
 * 
 *  ### Scope and Usage
 * 
 *  The CareTeam includes all the people and organizations who plan to participate in the coordination and delivery of care and is assigned to:
 *  * a single patient, or
 *  * a group (such as a married couple in therapy or a support group), or
 *  * an event, prior to a subject being identified (such as a code blue team or emergency response team)
 * 
 *  Care Team is not limited to practitioners, but may include other caregivers such as family members, guardians, the patient themself, or others. 
 *  The Care Team, depending on where used, may include care team members specific to a particular care plan, an episode, an encounter, or may reflect 
 *  all known team members across these perspectives. An individual's CareTeam can be dynamic over time, such that there can be transience of team members, 
 *  such as a rehabilitation team.
 *  
 *  Care Team is distinct from Group. Group identifies an undifferentiated set of individuals who are intended to be the target of one or more clinical 
 *  activities (e.g. set of clinical trial participants, set of individuals impacted by or at risk of a public health event, a herd or flock, etc.) 
 *  while a CareTeam are the individual members or organized group of individuals.
 *  
 *  Source: https://www.hl7.org/fhir/careteam.html.
 *  
 */

abstract class CareTeam implements Aggregate, ResourceType {
    readonly resourceType = 'CareTeam';
    readonly identifier?: Identifier[]
};

export {
    CareTeam
}