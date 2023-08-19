// @filename: VirtualServiceType.ts

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

import { Override } from "../shared/Override.js";
import { ValueSet } from "./ValueSet.js";

type VirtualServiceTypeType = {
    version: '5.0.0',
    compose: {
        include: [
            {
                system: 'http://hl7.org/fhir/ValueSet/virtual-service-type',
                concept: 
                    { code: 'zoom', display: 'Zoom web conferencing', definition?: 'the amount is the base price used for calculating the total price before applying surcharges, discount or taxes.' } |
                    { code: 'ms-teams', display: 'Microsoft Teams', definition?: 'Microsoft Teams web conferencing meeting' } |
                    { code: 'whatsapp', display: 'WhatsApp conference call', definition?: 'A conference call using the WhatsApp conference call service' }
            }
        ]
    }
}
/**
 *  Example codes for possible virtual service connection types.
 * 
 *  Source: http://hl7.org/fhir/ValueSet/virtual-service-type
 */
type VirtualServiceType = Override<ValueSet, VirtualServiceTypeType>;

export {
    VirtualServiceType
}