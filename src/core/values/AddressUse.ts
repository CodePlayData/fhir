//@filename: AddressUse.ts

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

type AddressUseType = {
    version: '5.0.0',
    compose: {
        include: [
            {
                system: 'http://hl7.org/fhir/ValueSet/address-use',
                concept: 
                    { code: 'home', display: 'Home', definition?: 'A communication address at a home.'                                                          } |
                    { code: 'work', display: 'Work', definition?: 'An office address. First choice for business related contacts during business hours.'        } |
                    { code: 'temp', display: 'Temporary', definition?: 'A temporary address. The period can provide more detailed information.'                 } |
                    { code: 'old', display: 'Old / Incorrect', definition?: 'This address is no longer in use (or was never correct but retained for records).' } |
                    { code: 'billing', display: 'Billing', definition?: 'An address to be used to send bills, invoices, receipts etc.'                          }
            }
        ]
    }
}
/**
 * 
 *  The use of an address.
 * 
 *  Source: https://hl7.org/fhir/valueset-address-use.html.
 */
type AddressUse = Override<ValueSet, AddressUseType>;

export {
    AddressUse
}
