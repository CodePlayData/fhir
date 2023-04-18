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
import { Reference } from "../../../core/generics/Reference.js";
import { Identifier } from "../../../core/datatypes/Identifier.js";
import { CodeableReference } from "../../../core/datatypes/CodeableReference.js";
import { Coding } from "../../../core/datatypes/Coding.js";
import { Code } from "../../../core/generics/Code.js";
import { CodeableConcept } from "../../../core/generics/CodeableConcept.js";
import { Period } from "../../../core/datatypes/Period.js";
import { DateTime } from "../../../core/primitives/DateTime.js";

describe('Testes Unitários do Schedule com...', () => {

  //TODO
  it.todo('o ator inválido.', () => {});

  it('o mínimo de dados obrigatórios.', () => {
    const schedule = new Schedule({
      actor: new Reference<Practitioner>(new URL("https://practitioner.example.com"))
    })

    assert.strictEqual(
      JSON.stringify(schedule), 
      JSON.stringify({
        "resourceType":"Schedule",
        "actor": {
          "reference":"https://practitioner.example.com/"
        }
      })
    );
  });

  it('pelo menos um identificador.', () => {
    const schedule = new Schedule({
      actor: new Reference<Practitioner>(new URL("https://practitioner.example.com")),
      identifier: [ new Identifier(undefined, undefined, 'urn:system', 'schedule-001')]
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
        "actor":{
          "reference":"https://practitioner.example.com/"
        }
      })
    )
  });

  it('a propriedade que identifica se está ativo ou não.', () => {
    const schedule = new Schedule({
      actor: new Reference<Practitioner>(new URL("https://practitioner.example.com")),
      active: true
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({
        "resourceType":"Schedule",
        "active":true,
        "actor":{
          "reference":"https://practitioner.example.com/"
        }
      })
    )
  });

  it('a categoria de serviço.', () => {
    const schedule = new Schedule({
      actor: new Reference<Practitioner>(new URL("https://practitioner.example.com")),
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
          "actor":{
            "reference":"https://practitioner.example.com/"
          }
        })
    )
  });

  it('o tipo de serviço.', () => {
    const schedule = new Schedule({
      actor: new Reference<Practitioner>(new URL("https://practitioner.example.com")),
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
        "actor":{
          "reference":"https://practitioner.example.com/"
        }
      })
    )
  });

  it('a especialidade identificada.', () => {
    const schedule = new Schedule({
      actor: new Reference<Practitioner>(new URL("https://practitioner.example.com")),
      specialty: [
        new CodeableConcept(
            [
                new Coding(
                    new URL("http://snomed.info/sct"),
                    undefined,
                    new Code("408480009"),
                    "Clinical immunology"
                )
            ]
        )
      ]
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({
        "resourceType":"Schedule",
        "specialty":[
          {
            "coding":[
              {
                "system":"http://snomed.info/sct",
                "code":"408480009",
                "display":"Clinical immunology"
              }
            ]
          }
        ],
        "actor":{
          "reference":"https://practitioner.example.com/"
        }
      })
    )
  });

  it('um nome.', () => {
    const schedule = new Schedule({
      actor: new Reference<Practitioner>(new URL("https://practitioner.example.com")),
      name: "Dr. Pedro Paulo - Cirurgião Dentista Clínico Geral e Saúde Coletiva"
    })

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({
        "resourceType":"Schedule",
        "name":"Dr. Pedro Paulo - Cirurgião Dentista Clínico Geral e Saúde Coletiva",
        "actor":{
          "reference":"https://practitioner.example.com/"
        }
      })
    )
  });

  it('o horizonte de disponibilidade válido.', () => {
    const schedule = new Schedule({
      actor: new Reference<Practitioner>(new URL("https://practitioner.example.com")),
      planningHorizon: new Period(
        new DateTime("2019-10-30T10:45:31.449+05:30"),
        new DateTime("2019-10-30T11:45:31.449+05:30"),
      )
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({
        "resourceType":"Schedule",
        "actor":{
          "reference":"https://practitioner.example.com/"
        },
        "planningHorizon":{
          "start":"2019-10-30T05:15:31.449Z",
          "end":"2019-10-30T06:15:31.449Z"
        }
      })
    )
  });

  it('comentários.', () => {
    const schedule = new Schedule({
      actor: new Reference<Practitioner>(new URL("https://practitioner.example.com")),
      comment: '**Teste**'
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify({"resourceType":"Schedule","actor":{"reference":"https://practitioner.example.com/"},"comment":"**Teste**"})
    )
  });

});

