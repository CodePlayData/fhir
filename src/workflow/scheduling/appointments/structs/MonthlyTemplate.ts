// @filename: MonthlyTemplate.ts

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


import { PositiveInt } from "../../../../core/primitives/PositiveInt.js";
import { DaysOfWeek } from "../types/DaysOfWeek.js";
import { WeekOfMonth } from "../types/WeekOfMonth.js";

class MonthlyTemplate {
    constructor(
        readonly monthInterval: PositiveInt,
        readonly dayOfMonth?: PositiveInt,
        readonly nthWeekOfMonth?: WeekOfMonth,
        readonly dayOfWeek?: DaysOfWeek
    ) {}
}

export {
    MonthlyTemplate
}