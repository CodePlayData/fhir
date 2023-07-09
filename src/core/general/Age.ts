// @filename: Age.ts

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

import { CommumUCUMCodesForAge } from "../../values/CommonUCUMCodesForAge.js";
import { QuantityComparator } from "../../values/QuantityComparator.js";
import { Quantity } from "./Quantity.js";

/**
 *  The age as a durantion of timelife.
 * 
 *  Source: https://www.hl7.org/fhir/datatypes.html#Age.
 */
class Age extends Quantity<CommumUCUMCodesForAge> {

    constructor(
        value: number,
        unit: CommumUCUMCodesForAge,
        comparator?: QuantityComparator['compose']['include'][0]['concept']['code']
    ) {
        super(
            value,
            unit['compose']['include'][0]['concept']['display'], 
            unit['compose']['include'][0]['system'], 
            unit['compose']['include'][0]['concept']['code'], 
            comparator
        );
    }

}

export {
    Age
}