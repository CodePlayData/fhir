// @filename: Base64Binary.test.ts

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
import { strictEqual } from "node:assert";
import { Base64Binary } from "./Base64Binary.js";

describe('Teste Unitário do Base64Binary com...', () => {
  it('a inserção de uma String pré-definida.', () => {
    const base64string = new Base64Binary('This is a string message in Base64 code');
    strictEqual(base64string.valueOf(), 'VGhpcyBpcyBhIHN0cmluZyBtZXNzYWdlIGluIEJhc2U2NCBjb2Rl')
  });
})