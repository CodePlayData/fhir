// @filename: Id.test.ts

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

import { describe, it } from "node:test";
import { strictEqual, throws } from "node:assert";
import { Id } from "./Id.js";

describe('Testes Unitários do Id com...', () => {
    
    it('um id númerico válido', () => {
        const id = new Id(12345);
        strictEqual(id.toString(), '12345');
    });

    it('um id muito maior que o permitido.', () => {
        throws(
            () => {
                new Id('123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789')
            },
            Error,
            'The Id must have max length of 64 characters.'
          );
    });
});