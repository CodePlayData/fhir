// @filename: Instant.ts

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

/**
 *  This FHIR HL7 primitive type refers to an instant in time in the format 
 *  YYYY-MM-DDThh:mm:ss.sss+zz:zz (e.g. 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). 
 *  The time SHALL specified at least to the second and SHALL include a timezone offset.
 * 
 *  Source: https://build.fhir.org/datatypes.html#instant.
 */

import { PrimitiveType } from "../PrimitiveType.js";

class Instant implements PrimitiveType {
    
    constructor(private readonly _date: Date) {};

    static fromString = (str: string) => new Instant(new Date(str));
    static fromDate = (date: Date) => new Instant(new Date(date));
    static fromStruct = (
        year: number, 
        monthIndex: number, 
        day: number, 
        hours: number, 
        minutes: number, 
        seconds: number, 
        milliseconds: number 
        ) => new Instant(new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds));
    
    valueOf() {
        return this._date.toISOString()
    };

    toString() {
        return this.valueOf()
    }

    toJSON() {
        return `${this.toString()}`
    }
}

export {
    Instant
}