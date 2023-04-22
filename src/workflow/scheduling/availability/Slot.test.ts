// @filename: Slot.test.ts

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
   limitations under the License.                 .;

*/

import { describe, it } from "node:test";
import assert from "node:assert";
import { Slot } from "./Slot.js";
import { Identifier } from "../../../core/datatypes/Identifier.js";
import { CodeableConcept } from "../../../core/generics/CodeableConcept.js";
import { Coding } from "../../../core/datatypes/Coding.js";
import { CodeableReference, CodeableReferenceSchema } from "../../../core/datatypes/CodeableReference.js";
import { Reference } from "../../../core/generics/Reference.js";
import { Code } from "../../../core/primitives/Code.js";
import { Instant } from "../../../core/primitives/Instant.js";

describe('Testes Unitários do Slot com...', () => {
    
    //TODO
    it.todo('o horário de término anterior ao de início.', () => {});
    
    //TODO
    it.todo('um status inexistente.', () => {});

    //TODO
    it.todo('pelo menos uma especialidade inexistente.', () => {});

    //TODO
    it.todo('pelo menos uma categoria de serviço inexistente.', () => {});

    //TODO
    it.todo('pelo menos um identificador inválido', () => {})

    //TODO
    it.todo('uma referência que não é a um calendário.', () => {});

    //TODO
    it.todo('uma combinação trocada do tipo de serviço com o tipo de consulta.', () => {});

    it('o mínimo de dados obrigatórios.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
                status: new Code('free'),
                start: new Instant(new Date("2019-10-30T10:45:31.449+05:30")),
                end: new Instant(new Date("2019-10-30T11:15:31.450+05:30"))
            }
        )
    });

    it('pelo menos um identificador.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
                identifier: [ 
                    new Identifier(undefined, undefined, 'urn:system', 'slot-001')
                ],
                start: new Instant(new Date("2019-10-30T10:45:31.449+05:30")),
                end: new Instant(new Date("2019-10-30T11:15:31.450+05:30")),
                status: new Code('free')
            });
        assert.strictEqual(slot.identifier![0].system, 'urn:system');
    });

    it('a categoria do serviço.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
                serviceCategory: [
                    new CodeableConcept(
                        [
                            new Coding(
                                new URL("http://terminology.hl7.org/CodeSystem/service-category"),
                                undefined,
                                new Code('1'),
                                'Adoption'
                            )
                        ]
                    )
                ],
                start: new Instant(new Date("2019-10-30T10:45:31.449+05:30")),
                end: new Instant(new Date("2019-10-30T11:15:31.450+05:30")),
                status: new Code('free')
            }
        );
        const serviceCategory = slot.serviceCategory as CodeableConcept<any>[];
        assert.strictEqual(serviceCategory[0].coding[0].display, "Adoption");
    });

    it('o tipo do serviço na versão R4B.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
                serviceType: [
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
                ],
                start: new Instant(new Date("2019-10-30T10:45:31.449+05:30")),
                end: new Instant(new Date("2019-10-30T11:15:31.450+05:30")),
                status: new Code('free')
            }
        );
    
        const code = slot.serviceType![0] as CodeableConcept<any>;
        assert.strictEqual(code.coding![0].display, "Immunization");
    });

    it('o tipo de serviço na versão R5.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
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
                ],
                start: new Instant(new Date("2019-10-30T10:45:31.449+05:30")),
                end: new Instant(new Date("2019-10-30T11:15:31.450+05:30")),
                status: new Code('free')
            }        
        );
    
        const code = slot.serviceType![0] as CodeableReference<CodeableReferenceSchema>;
        assert.strictEqual(code.concept?.coding![0].display, "Immunization");
    });

    it('a especialidade.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
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
                ],
                start: new Instant(new Date("2019-10-30T10:45:31.449+05:30")),
                end: new Instant(new Date("2019-10-30T11:15:31.450+05:30")),
                status: new Code('free')
            }        
        );
        const specialty = slot.specialty as CodeableConcept<any>[];
        assert.strictEqual(specialty![0].coding![0].display, "Clinical immunology");
    });

    it('o tipo de agendamento.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
                appointmentType: [
                    new CodeableConcept(
                        [
                            new Coding(
                                new URL("http://hl7.org/fhir/v2/0276"),
                                undefined,
                                new Code('WALKIN'),
                                "A previously unscheduled walk-in visit"
                            )
                        ]
                    )
                ],
                start: new Instant(new Date("2019-10-30T10:45:31.449+05:30")),
                end: new Instant(new Date("2019-10-30T11:15:31.450+05:30")),
                status: new Code('free')
            }
        );
        const appointmentType = slot.appointmentType as CodeableConcept<any>[];
        const coding = appointmentType[0].coding as Coding<any>[];
        assert.deepEqual(coding[0].code, new Code('WALKIN'));
    });

    it('um status válido.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
                status: new Code('free'),
                start: new Instant(new Date("2019-10-30T10:45:31.449+05:30")),
                end: new Instant(new Date("2019-10-30T11:15:31.450+05:30"))
            }
        )
        assert.deepEqual(slot.status, new Code('free'));
    });

    it('um status, um horário de início e um de final válidos.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
                start: new Instant(new Date("2019-10-30T10:45:31.449-03:00")),
                end: new Instant(new Date("2019-10-30T11:15:31.450-03:00")),
                status: new Code('free')
            }
        )
        assert.strictEqual(JSON.stringify(slot.end), '"2019-10-30T14:15:31.450-03:00"');
    });
    
    it('um comentário.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
                comment: "Assessments should be performed before requesting appointments in this slot.",
                start: new Instant(new Date("2019-10-30T10:45:31.449+05:30")),
                end: new Instant(new Date("2019-10-30T11:15:31.450+05:30")),
                status: new Code('free')
            }
        )
        assert.strictEqual(
            slot.comment,
            "Assessments should be performed before requesting appointments in this slot.")
    });
    
    it('todos os dados completos.', () => {
        const slot = new Slot(
            {
                schedule: new Reference(new URL("https://schedule.example.com")),
                identifier: [ new Identifier(undefined, undefined, 'urn:system', 'slot-0001')],
                serviceCategory: [
                    new CodeableConcept(
                        [
                            new Coding(
                                new URL("http://terminology.hl7.org/CodeSystem/service-category"),
                                undefined,
                                new Code("17"),
                                "General Practice"
                            )
                        ]
                    )
                ],
                serviceType: [
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
                ],
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
                ],
                appointmentType:[ 
                    new CodeableConcept(
                    [
                        new Coding(
                            new URL("http://hl7.org/fhir/v2/0276"),
                            undefined,
                            new Code('WALKIN'),
                            "A previously unscheduled walk-in visit"
                        )
                    ]
                )],
                status: new Code('free'),
                start: new Instant(new Date("2019-10-30T10:45:31.449+05:30")),
                end: new Instant(new Date("2019-10-30T11:15:31.450+05:30")),
                comment: "Assessments should be performed before requesting appointments in this slot."
            }
        )
    
        assert.strictEqual(
            JSON.stringify(slot),
            JSON.stringify({
                "resourceType":"Slot",
                "identifier":[
                    {
                        "system":"urn:system",
                        "value":"slot-0001"
                    }
                ],
                "serviceCategory":[
                    {
                        "coding":[
                            {
                                "system":"http://terminology.hl7.org/CodeSystem/service-category",
                                "code":"17",
                                "display":"General Practice"
                            }
                        ]
                    }
                ],
                "serviceType":[
                    {
                        "coding":[
                            {
                                "system":"http://terminology.hl7.org/CodeSystem/service-type",
                                "code":"57",
                                "display":"Immunization"
                            }
                        ]
                    }
                ],
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
                "appointmentType":[
                    {
                        "coding":[
                            {
                                "system":"http://hl7.org/fhir/v2/0276",
                                "code":"WALKIN",
                                "display":"A previously unscheduled walk-in visit"
                            }
                        ]
                    }
                ],
                "schedule":{
                    "reference":"https://schedule.example.com/"
                },
                "status":"free",
                "start":"2019-10-30T05:15:31.449-03:00",
                "end":"2019-10-30T05:45:31.450-03:00",
                "comment":"Assessments should be performed before requesting appointments in this slot."
            })
        );
    });
});