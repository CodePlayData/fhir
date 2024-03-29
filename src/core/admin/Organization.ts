// @filename: Organization.ts

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

import { Resource } from "../data/Resource.js";
import { Identifier } from "../data/general/Identifier.js";

/**
 *  A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of 
 *  collective action. Includes companies, institutions, corporations, departments, community groups, healthcare practice 
 *  groups, payer/insurer, etc.
 * 
 *  Source: https://www.hl7.org/fhir/organization.html.
 */
abstract class Organization implements Resource {
    readonly resourceType = 'Organization';
    readonly identifier?: Identifier[]
};

export {
    Organization
}