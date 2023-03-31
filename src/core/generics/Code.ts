// @filename: Code.ts

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
 *  Indicates that the value is taken from a set of controlled strings defined elsewhere.
 * 
 *  Source: https://build.fhir.org/datatypes.html#code.
 */
class Code<T extends string> {
    constructor(readonly code: T){
    }

    toString(): string {
        return this.code;
    }

    toJSON() {
        return this.toString()
    }
};

export {
    Code
}