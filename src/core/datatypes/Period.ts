// @filename: Period.ts

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

import { DateTime } from "../primitives/DateTime";

/**
 *  A time period defined by a start and end date/time. 
 *  A period specifies a range of times. The context of use will 
 *  specify whether the entire range applies (e.g. "the patient was 
 *  an inpatient of the hospital for this time range") or one value 
 *  from the period applies (e.g. "give to the patient between 2 and 4 pm on 24-Jun 2013").
 * 
 *  Source: https://build.fhir.org/datatypes.html#Period.
 */
class Period {
    constructor(
        readonly start: DateTime,
        readonly end: DateTime
    ){};
}

export {
    Period
}