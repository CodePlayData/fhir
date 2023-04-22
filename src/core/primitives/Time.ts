//@filename: Time.ts

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

import { PrimitiveType } from "../PrimitiveType.js";
import { IANATimezones } from "../../values/IANATimezones.js";

class Time implements PrimitiveType {
    
    timezone: IANATimezones = 'pt-BR';

    constructor(private readonly _date: Date) {};

    static fromString = (str: string) => new Time(new Date(str));
    static fromDate = (date: Date) => new Time(new Date(date));
    static fromStruct = (
        year: number, 
        monthIndex: number, 
        day: number, 
        hours: number, 
        minutes: number, 
        seconds: number, 
        milliseconds: number 
        ) => new Time(new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds));


        valueOf() {
            return this._date.toLocaleTimeString(this.timezone)
        };
    
        toString() {
            return this.valueOf()
        }
    
        toJSON() {
            return `${this.toString()}`
        }
}

export {
    Time
}