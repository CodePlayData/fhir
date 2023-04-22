// @filename: Decimal.test.ts

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
import { Decimal } from "./Decimal.js";

describe('Teste Unitário do Decimal com...', () => {
  
  it('um número válido.', () => {
    const decimal = new Decimal(2.1);
    strictEqual(decimal.valueOf(), 2.1)
  });

  it('um número inválido.', () => {
    throws(
        () => {
            new Decimal(5)
        },
        Error,
        'This is not a valid decimal.'
    )
  });
});