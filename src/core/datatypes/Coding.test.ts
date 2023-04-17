// @filename: Coding.test.ts

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
import { Coding } from "./Coding.js";

describe('Testes de unidade da classe Coding.', () => {
    it('Deve instanciar o Coding com o minimo de dados possiveis.', () => {
        const coding = new Coding();
        assert.strictEqual(coding.code, undefined);
    });

    it.todo('Deve instanciar o Coding com a URL do sistema identificado.');

    it('Deve instanciar o Coding com o codigo do sistema identificado.', () => {
        const coding = new Coding(undefined, '111');
        assert.strictEqual(coding.version, '111');
    });

    it.todo('Deve instanciar o Coding o conjunto de codigos.');

    it.todo('Deve instanciar o Coding com a propriedade display.');

    it.todo('Deve instanciar o Coding com a opcao UserSelected marcada');

    it.todo('Deve instanciar um Coding completo.');
});


