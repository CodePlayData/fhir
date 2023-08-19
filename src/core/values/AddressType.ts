//@filename: AddressType.ts

import { Override } from "../shared/Override";
import { ValueSet } from "./ValueSet";

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

type AddressTypeType = {
    version: '5.0.0',
    compose: {
        include: [
            {
                system: 'http://hl7.org/fhir/ValueSet/address-type',
                concept: 
                    { code: 'postal', display: 'Postal', definition?: 'Mailing addresses - PO Boxes and care-of addresses.' }  |
                    { code: 'physical', display: 'Physical', definition?: 'A physical address that can be visited.'         }  |
                    { code: 'both', display: 'Both', definition?: 'An address that is both physical and postal.'            }
            }
        ]
    }
}

/**
 * 
 *  The type of an address (physical / postal).
 * 
 *  Source: https://hl7.org/fhir/valueset-address-type.html.
 */
type AddressType = Override<ValueSet, AddressTypeType>;
    

export {
    AddressType
}
