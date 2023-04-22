// @filename: Period.test.ts

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
import assert from "node:assert";
import { Period } from "./Period.js";

describe('Testes Unitários do Period com...', () => {

    //TODO
    it.todo('uma das datas/horários inválidos.', () => {});

    //TODO
    it.todo('a data/horário de final anterior ao e início.', () => {});

    it('os dados completos.', () => {
        const period = new Period(new Date('2023-02-05'), new Date('2025-02-05'));
        assert.deepEqual(period.start, new Date('2023-02-05'));
    });
});
