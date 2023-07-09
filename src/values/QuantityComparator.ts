// @filename: QuantityComparator.ts

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

type QuantityComparatorType = {
    version: '5.0.0',
    compose: {
        include: [
            {
                system: 'https://www.hl7.org/fhir/valueset-quantity-comparator.html',
                concept: 
                    { code: '<', display: 'Less than', definition?: 'The actual value is less than the given value.' }                                                                  |
                    { code: '<=', display: 'Less or Equal to', definition?: 'The actual value is less than or equal to the given value.' }                                              |
                    { code: '>=', display: 'Greater or Equal to', definition?: 'The actual value is greater than or equal to the given value.'}                                         | 
                    { code: '>', display: 'Greater than', definition?: 'The actual value is greater than the given value.' }                                                            |
                    { code: 'ad', display: 'Sufficient to achieve this total quantity', definition?: 'The actual value is sufficient for the total quantity to equal the given value.'}
            }
        ]
    }
}
/**
 * 
 *  How the Quantity should be understood and represented.
 * 
 *  Source: https://www.hl7.org/fhir/valueset-quantity-comparator.html.
 */
type QuantityComparator = Override<ValueSet, QuantityComparatorType>;

export {
    QuantityComparator
}