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

import { InvalidInstanteDate } from "../../errors/InvalidInstanteDate.js";

/**
 *  This FHIR HL7 primitive type refers to an instant in time in the format 
 *  YYYY-MM-DDThh:mm:ss.sss+zz:zz (e.g. 2015-02-07T13:28:17.239+02:00 or 2017-01-01T00:00:00Z). 
 *  The time SHALL specified at least to the second and SHALL include a timezone offset.
 * 
 *  Source: https://build.fhir.org/datatypes.html#instant.
 */

import { PrimitiveType } from "./PrimitiveType.ts";

class Instant extends Date implements PrimitiveType {
    constructor();
    constructor(value: number | string);
    new(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number) {
        super(...arguments)
    }

    valueOf(): string {
        return new Date(super.valueOf()).toISOString()
    }

    toString(): string {
        return this.valueOf()
    }

    toJSON(): string {
        return `${this.toString()}`
    }
}

export {
    Instant
}