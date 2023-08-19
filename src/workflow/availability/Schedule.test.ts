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
import { Practitioner } from "../../admin/Practitioner.js";
import { Schedule } from "./Schedule.js";
import { Identifier } from "../../data/general/Identifier.js";

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
    type customValueSet = {
            version: '0.1.0',
            compose: {
                include: [
                    {
                        system: 'urn:system',
                        concept: 
                            { code: 'slot-0001', display: 'Slot-1' }
                    }
              ]
        }
    }
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      identifier: [ new Identifier<any, customValueSet>(undefined, undefined, 'urn:system', 'schedule-001') ]
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      '{"resourceType":"Schedule","identifier":[{"value":"schedule-001","system":"urn:system"}],"actor":[{}]}'
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

  it('a categoria de serviço completa.', async (context) => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      serviceCategory: {
          system: 'http://terminology.hl7.org/CodeSystem/service-category',
          version: '0.1.0',
          code: '1',
          display: 'Adoption',
          useSelected: true
      }
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
                "version": '0.1.0',
                "code":"1",
                "display":"Adoption",
                "userSelected": true
              }
            ]
          },
          "actor": [{}]
        })
    )
  });

  it('a categoria de serviço parcial.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      serviceCategory: {
          display: 'Adoption',
      }
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      JSON.stringify(
        {
          "resourceType":"Schedule",
          "serviceCategory":{
            "coding":[
              {
                "display":"Adoption",
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
          {
              concept: {
                  system: 'http://terminology.hl7.org/CodeSystem/service-type',
                  version: '0.1.0',
                  code: '57',
                  display: 'Immunization',
                  useSelected: true
              }
          }
      ]
    })

    assert.strictEqual(
      JSON.stringify(schedule),
      '{"resourceType":"Schedule","serviceType":[{"concept":{"coding":[{"system":"http://terminology.hl7.org/CodeSystem/service-type","version":"0.1.0","code":"57","display":"Immunization","userSelected":true}]},"reference":{"type":"HealthcareService"}}],"actor":[{}]}'
    );
  });

  it('a especialidade identificada.', () => {
    const practitioner = { } as Practitioner;
    const schedule = new Schedule({
      actor: [practitioner],
      specialty: [
          {
            system: 'http://hl7.org/fhir/ValueSet/c80-practice-codes',
            version: '5.0.0',
            code: '394539006',
            display: 'Pediatric surgery',
            useSelected: true
          }
      ]
    });

    assert.strictEqual(
      JSON.stringify(schedule),
      '{"resourceType":"Schedule","specialty":[{"coding":[{"system":"http://hl7.org/fhir/ValueSet/c80-practice-codes","version":"5.0.0","code":"394539006","display":"Pediatric surgery","userSelected":true}]}],"actor":[{}]}'
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
      planningHorizon: {
        start: new Date("2019-10-30T10:45:31.449+05:30"),
        end: new Date("2019-10-30T11:45:31.449+05:30"),
      }
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

