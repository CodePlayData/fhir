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

import { Coding } from "../../../../core/general/Coding.js";
import { Code } from "../../../../core/primitives/Code.js";
import { WeekOfMonth as WeekOfMonthValueSet } from "../../../../values/WeekOfMonth.js";

type WeekOfMonth = Coding<{
    readonly system?: URL;
    readonly version?: string;
    readonly code?: Code<WeekOfMonthValueSet['compose']['include'][0]['concept']['code']>;
    readonly display?: WeekOfMonthValueSet['compose']['include'][0]['concept']['display'];
    readonly userSelected?: boolean;
}>

export {
    WeekOfMonth
}