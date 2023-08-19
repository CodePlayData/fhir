// @filename: WeekOfMonth.ts

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

type WeekOfMonthType = {
    version: '5.0.0',
    compose: {
        include: [
            {
                system: 'http://hl7.org/fhir/ValueSet/week-of-month',
                concept: 
                    { code: 'first', display: 'First', definition?: 'First week of the month.' }     |
                    { code: 'second', display: 'Second', definition?: 'Second week of the month.' }  |
                    { code: 'third', display: 'Third', definition?: 'Third week of the month.' }     |
                    { code: 'fourth', display: 'Fourth', definition?: 'Fourth week of the month.' }  |
                    { code: 'last', display: 'Last', definition?: 'Last week of the month.' }
            }
        ]
    }
}

type WeekOfMonth = Override<ValueSet, WeekOfMonthType>;

export {
    WeekOfMonth
}