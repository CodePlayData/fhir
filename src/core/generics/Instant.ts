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
class Instant<T extends String> {
    constructor(private readonly _date: T) {
        this._validateDate(_date.toString());
    }

    private _validateDate(dateString: string) {
        const regex = new RegExp("^([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\\.[0-9]+)?(Z|(\\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00))");
        if(!regex.test(dateString)) {
            throw new InvalidInstanteDate();
        }
    }

    toJSON() {
        return this._date
    }

    toString() {
        return this.toJSON();
    }
}

export {
    Instant
}