// @filename: Address.test.ts

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
import { throws, deepEqual } from "node:assert";
import { Address } from "./Address.js";

describe('Testes de unidade da class Address...', () => {
    it('um endereço postal sem o código postal', () => {
        throws(
            () => {
                new Address(undefined, 'postal')
            },
            Error,
            'A postal address must contain a postal code.'
          );
    });

    it('vazio', () => {
        const address = new Address();
        deepEqual(address, new Address());
    })
});