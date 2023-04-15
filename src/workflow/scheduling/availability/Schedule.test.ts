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

describe('Testes de unidade da classe Schedule.', () => {

  it('Deve instanciar o Schedule com o mínimo de dados obrigatórios.', () => {
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

  it('Deve instanciar o Schedule com pelo menos um identificador.', () => {
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

  it('Deve instanciar o Schedule com a propriedade que identifica se esta ativo ou nao.', () => {
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

  it('Deve instanciar o Schedule com a categoria de servico.', () => {
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

  it('Deve instanciar o Schedule com o tipo de servico.', () => {
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

  it('Deve instanciar o Schedule com a especialidade identificada.', () => {
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

  

});