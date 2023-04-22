// @filename: Time.test.ts

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
import { Time } from "./Time.js";

describe('Teste Unitário do Time com...', () => {
  
  it('a inserção de uma String de data pré-definida.', () => {
    const instant = Time.fromString('December 17, 1995 03:24:00');
    strictEqual(instant.valueOf(), '03:24:00')
  });

  // TODO
  it.todo('a inserção de um objecto Data.');

  //TODO
  it.todo('uma estrutura chamada nos parâmetros.');
})