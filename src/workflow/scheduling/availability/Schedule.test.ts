// @filename: Schedule.test.ts

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
import { Practitioner } from "../../../admin/Practitioner.js";
import { Schedule } from "./Schedule.js";
import { Code } from "../../../core/primitives/Code.js";
import { DateTime } from "../../../core/primitives/DateTime.js";
import { CodeableConcept } from "../../../core/general/CodeableConcept.js";
import { Coding } from "../../../core/general/Coding.js";
import { Identifier } from "../../../core/general/Identifier.js";
import { Period } from "../../../core/general/Period.js";
import { CodeableReference } from "../../../core/special/CodeableReference.js";
import { Reference } from "../../../core/special/Reference.js";

describe('Testes Unitários do Schedule com...', () => {

  //TODO
  it.todo('pelo menos um identificador inválido.', () => {});

  //TODO
  it.todo('uma categoria de serviço inexistente.', () => {});

  //TODO
  it.todo('pelo menos um tipo de serviço inexistente.', () => {});

  //TODO
  it.todo('pelo menos uma especialidade inexistente.', () => {});

  //TODO
  it.todo('a referência ao ator inválido.', () => {});

  //TODO
  it.todo('um horizonte de planejamento inválido.', () => {});

  //TODO
  it.todo('comentários inválidos.', () => {});

  it('o mínimo de dados obrigatórios.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [ practitioner ]
    })

    assert.strictEqual(
      JSON.stringify(schedule), 
      JSON.stringify({
        "resourceType":"Schedule",
        "actor": [{}]
      })
    );
  });

  it('pelo menos um identificador.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      identifier: [ new Identifier(undefined, undefined, 'urn:system', 'schedule-001') ]
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({
        "resourceType":"Schedule",
        "identifier":[
          {
            "system":"urn:system",
            "value":"schedule-001"
          }
        ],
        "actor": [{}]
      })
    )
  });

  it('a propriedade que identifica se está ativo ou não.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      active: true
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({
        "resourceType":"Schedule",
        "active":true,
        "actor":[{}]
      })
    )
  });

  it('a categoria de serviço.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      serviceCategory: new CodeableConcept(
        [
            new Coding(
                new URL("http://terminology.hl7.org/CodeSystem/service-category"),
                undefined,
                new Code("1"),
                "Adoption"
            )
        ]
      )
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify(
        {
          "resourceType":"Schedule",
          "serviceCategory":{
            "coding":[
              {
                "system":"http://terminology.hl7.org/CodeSystem/service-category",
                "code":"1",
                "display":"Adoption"
              }
            ]
          },
          "actor": [{}]
        })
    )
  });

  it('o tipo de serviço.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      serviceType: [
        new CodeableReference(
          new CodeableConcept(
            [
              new Coding(
                new URL("http://terminology.hl7.org/CodeSystem/service-type"),
                undefined,
                new Code("57"),
                "Immunization"
              )
            ]
          )
        )
      ]
    })

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({
        "resourceType":"Schedule",
        "serviceType":[
          {
            "concept":{
              "coding":[
                {
                  "system":"http://terminology.hl7.org/CodeSystem/service-type",
                  "code":"57",
                  "display":"Immunization"
                }
              ]
            }
          }
        ],
        "actor":[{}]
      })
    )
  });

  it('a especialidade identificada.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      specialty: []
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({
        "resourceType":"Schedule",
        "specialty":[
          {
            "coding":[
              {
                "system":"http://hl7.org/fhir/ValueSet/c80-practice-codes",
                "version": "6.0.0",
                "code":"394539006",
                "display":"Pediatric surgery",
                "userSelected":true
              }
            ]
          }
        ],
        "actor":[{}]
      })
    )
  });

  it('um nome.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      name: "Dr. Pedro Paulo - Cirurgião Dentista Clínico Geral e Saúde Coletiva"
    })

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({
        "resourceType":"Schedule",
        "name":"Dr. Pedro Paulo - Cirurgião Dentista Clínico Geral e Saúde Coletiva",
        "actor":[{}]
      })
    )
  });

  it('o horizonte de disponibilidade válido.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      planningHorizon: new Period(
        new DateTime("2019-10-30T10:45:31.449+05:30"),
        new DateTime("2019-10-30T11:45:31.449+05:30"),
      )
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({
        "resourceType":"Schedule",
        "actor":[{}],
        "planningHorizon":{
          "start":"2019-10-30T05:15:31.449Z",
          "end":"2019-10-30T06:15:31.449Z"
        }
      })
    )
  });

  it('comentários.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      comment: '**Teste**'
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({"resourceType":"Schedule","actor":[{}],"comment":"**Teste**"})
    )
  });

});

