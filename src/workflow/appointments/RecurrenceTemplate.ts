// @filename: RecurrenceTemplate.ts

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

import { PositiveInt } from "../../core/primitives/PositiveInt.js";
import { IANATimezones } from "../../values/IANATimezones.js";
import { AppointmentRecurrenceType } from "./AppointmentRecurrenceType.js";
import { MonthlyTemplate } from "./MonthlyTemplate.js";
import { WeeklyTemplate } from "./WeeklyTemplate.js";
import { YearlyTemplate } from "./YearlyTemplate.js";

class RecurrenceTemplate {
    constructor(
        readonly recurrenceType: AppointmentRecurrenceType,
        readonly timezone?: IANATimezones,
        readonly lastOccurenceDate?: Date,
        readonly occurrenceCount?: PositiveInt,
        readonly occurrenceDate?: Date[],
        readonly excludingDate?: Date[],
        readonly excludingRecurrenceId?: PositiveInt[],
        readonly weeklyTemplate?: WeeklyTemplate,
        readonly monthlyTemplate?: MonthlyTemplate,
        readonly yearlyTemplate?: YearlyTemplate
    ) {}
}

export {
    RecurrenceTemplate
}