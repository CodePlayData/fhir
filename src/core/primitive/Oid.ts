// @filename: Oid.ts

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

import { InvalidOid } from "../../errors/InvalidOid.js";
import { Uri } from "./Uri.js";

class Oid extends Uri {
    constructor(str: string) {
        const regex = new RegExp(`urn:oid:[0-2](\.(0|[1-9][0-9]*))+`);
        if(!regex.test(str)) {
            throw new InvalidOid();
        }
        super(str);
    }
}

export {
    Oid
}