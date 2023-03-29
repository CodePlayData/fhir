// @filename: Slot.test.ts

/**
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

import test from "node:test";
import assert from "node:assert";
import { Slot } from "./Slot.js";
import { Identifier } from "../core/valuesObjects/Identifier.js";
import { CodeableConcept } from "../core/valuesObjects/CodeableConcept.js";
import { Coding } from "../core/valuesObjects/Coding.js";
import { CodeableReference } from "../core/valuesObjects/CodeableReference.js";
import { Instant } from "../core/generics/Instant.js";

test('Deve instanciar um Slot vazio.', () => {
    const slot = new Slot();
    assert.strictEqual(slot.end, undefined);
});

test('Deve instanciar um Slot com pelo menos um identificador.', () => {
    const slot = new Slot(
        [
            new Identifier(undefined, undefined, 'urn:system', 'slot-001')
        ]
    );
    assert.strictEqual(slot.identifier![0].system, 'urn:system');
});

test('Deve instanciar um Slot com a identificacao da categoria do servico.', () => {
    const slot = new Slot(
        undefined,
        [
            new CodeableConcept(
                [
                    new Coding(
                        new URL("http://terminology.hl7.org/CodeSystem/service-category"),
                        undefined,
                        "17",
                        "General Practice"
                    )
                ]
            )
        ]
    );
    assert.strictEqual(slot.serviceCategory![0].coding![0].display, "General Practice");
});

test('Deve instanciar um Slot com a identificacao do tipo do servico (v4).', () => {
    const slot = new Slot(
        undefined,
        undefined,
        [
            new CodeableConcept(
                [
                    new Coding(
                        new URL("http://terminology.hl7.org/CodeSystem/service-type"),
                        undefined,
                        "57",
                        "Immunization"
                    )
                ]
            )
        ]
    );

    const code = slot.serviceType![0] as CodeableConcept;
    assert.strictEqual(code.coding![0].display, "Immunization");

});

test('Deve instanciar um Slot com a identificacao do tipo de servico (v5).', () => {
    const slot = new Slot(
        undefined,
        undefined,
        [
            new CodeableReference(
                new CodeableConcept(
                    [
                        new Coding(
                            new URL("http://terminology.hl7.org/CodeSystem/service-type"),
                            undefined,
                            "57",
                            "Immunization"
                        )
                    ]
                )
            )
        ]
    );

    const code = slot.serviceType![0] as CodeableReference;
    assert.strictEqual(code.concept?.coding![0].display, "Immunization");
});

test('Deve instanciar um Slot com identificacao da especialidade.', () => {
    const slot = new Slot(
        undefined,
        undefined,
        undefined,
        [
            new CodeableConcept(
                [
                    new Coding(
                        new URL("http://snomed.info/sct"),
                        undefined,
                        "408480009",
                        "Clinical immunology"
                    )
                ]
            )
        ]
    );
    assert.strictEqual(slot.specialty![0].coding![0].display, "Clinical immunology");
});

test('Deve instanciar um Slot com identificacao do tipo de agendamento que ira gerar.', () => {
    const slot = new Slot(
        undefined,
        undefined,
        undefined,
        undefined,
        [
            new CodeableConcept(
                [
                    new Coding(
                        new URL("http://hl7.org/fhir/v2/0276"),
                        undefined,
                        'WALKIN',
                        "A previously unscheduled walk-in visit"
                    )
                ]
            )
        ]
    );
    assert.strictEqual(slot.appointmentType![0].coding![0].code, 'WALKIN');
});

test('Deve instanciar um Slot com um status.', () => {
    const slot = new Slot(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        'free'
    )
    assert.strictEqual(slot.status, 'free');
});

test('Deve instanciar um Slot definindo um status de inicio e a um final.', () => {
    const slot = new Slot(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        new Instant("201-10-30T10:45:31.449+05:30"),
        new Instant("2019-10-30T11:15:31.450+05:30")
    )
    assert.strictEqual(slot.end?.toString(), "2019-10-30T11:15:31.450+05:30");
});

test('Deve instanciar um Slot com comentario.', () => {
    const slot = new Slot(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        false,
        "Assessments should be performed before requesting appointments in this slot."
    )
    assert.strictEqual(
        slot.comment,
        "Assessments should be performed before requesting appointments in this slot.")
});

test('Deve instanciar um Slot completo e válido com a referência disponível.', () => {
    const slot = new Slot(
        [
            new Identifier(undefined, undefined, 'urn:system', 'slot-001')
        ],
        [
            new CodeableConcept(
                [
                    new Coding(
                        new URL("http://terminology.hl7.org/CodeSystem/service-category"),
                        undefined,
                        "17",
                        "General Practice"
                    )
                ]
            )
        ],
        [
            new CodeableConcept(
                [
                    new Coding(
                        new URL("http://terminology.hl7.org/CodeSystem/service-type"),
                        undefined,
                        "57",
                        "Immunization"
                    )
                ]
            )
        ]
    )
});
