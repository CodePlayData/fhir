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
import { ValueSet } from "../../values/ValueSet.js";
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
abstract class Quantity<T extends ValueSet> extends DataType {
    readonly code!: Code<T['code']>;
    readonly comparator!: Code<QuantityComparator['code']>;
    readonly system!: Uri;

    constructor(
        readonly value: Decimal,
        readonly unit: T['display'],
        system: string,
        code: T['code'],
        comparator: QuantityComparator['code'] | '=' = '='
    ) {
        super();
        this.code = new Code(code);
        this.comparator = new Code(comparator);
        this.system = new URL(system);
    }

}

export {
    Quantity
}