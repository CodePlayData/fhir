// @filename: Location.ts

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
 *  Details and position information for a place where services are provided and resources and 
 *  participants may be stored(remember that a Device can be a participant), found, contained, 
 *  or accommodated.
 * 
 *  A Location includes both incidental locations (a place which is used for healthcare without 
 *  prior designation or authorization) and dedicated, formally appointed locations. Locations 
 *  may be private, public, mobile or fixed and scale from small freezers to full hospital 
 *  buildings or parking garages.
 * 
 *  Locations and Organizations are very closely related resources and can often be mixed/matched/confused.
 *  The Location is intended to describe the more physical structures managed/operated by an organization, 
 *  whereas the Organization is intended to represent the more conceptual hierarchies, such as a ward. 
 *  Location may also be used to represent virtual locations, for example for telehealth visits.
 * 
 *  As noted in the Event pattern, a Location represents where a service is performed. An Organization can 
 *  represent who performed the service.
 * 
 *  Source: https://www.hl7.org/fhir/location.html.
 *  
 */
class Location implements Aggregate, ResourceType {
    readonly resourceType = 'Location';
    readonly identifier?: Identifier[]
};

export {
    Location
}