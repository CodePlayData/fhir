// @filename: Quantity.ts

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

import { QuantityComparator } from "../../values/QuantityComparator.js";
import { DataType } from "../DataType.js";
import { Code } from "../primitives/Code.js";
import { Decimal } from "../primitives/Decimal.js";
import { Uri } from "../primitives/Uri.js";

/**
 * 
 *  A measured or measurable amount.
 * 
 *  Source: https://www.hl7.org/fhir/datatypes.html#quantity.
 * 
 */
class Quantity<T extends string> extends DataType {
    
    constructor(
        readonly value?: Decimal,
        readonly comparator: Code<QuantityComparator['code']> = '=',
        readonly unit?: string,
        readonly system?: Uri,
        readonly code?: Code<T>
    ) {
        super();
    }

}

export {
    Quantity
}