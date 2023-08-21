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
import { Schedule } from "./Schedule.js";
import { Patient, Practitioner } from "../../core/index.js";


describe('Testes Unitários do Schedule com...', () => {

  it('apenas os parâmetros obrigatórios.', () => {
    const testPatient = {} as Patient;

    assert.ok(
      new Schedule(
        [ testPatient ],
        { start: new Date(Date.now()), end: new Date(Date.now() + 2) }
      )
    );
  });

  it('o nome.', () => {
    const testPractitioner = {} as Practitioner;
    const schedule = new Schedule(
      [ testPractitioner ],
      { start: new Date(Date.now()), end: new Date(Date.now() + 20000) },
      { name: "Dr. Pedro Paulo - Cirurgião Dentista Clínico Geral" }
    );

    assert.strictEqual(schedule.name, "Dr. Pedro Paulo - Cirurgião Dentista Clínico Geral");
  });

  it('os comentários.', () => {
    const testPractitioner = {} as Practitioner;
    const schedule = new Schedule(
      [ testPractitioner ],
      { start: new Date(Date.now()), end: new Date(Date.now() + 20000) },
      { comment: "Apenas agendar pacientes atendidos pelo SUS." }
    );

    assert.strictEqual(schedule.comment, "Apenas agendar pacientes atendidos pelo SUS.");
  });

  it('a categoria de serviço.', () => {
    const testPractitioner = {} as Practitioner;
    const schedule = new Schedule(
      [ testPractitioner ],
      { start: new Date(Date.now()), end: new Date(Date.now() + 20000) },
      { serviceCategory: "Community Health Care" }
    );

    assert.strictEqual(schedule.serviceCategory?.coding?.at(0)?.display, "Community Health Care");
  });

  it('os tipos de serviço.', () => {
    const testPractitioner = {} as Practitioner;
    const schedule = new Schedule(
      [ testPractitioner ],
      { start: new Date(Date.now()), end: new Date(Date.now() + 20000) },
      { serviceType: [ 'Dentures', 'Dentistry', 'Dental Hygiene' ] }
    );

    assert.strictEqual(schedule.serviceType?.at(0)?.concept?.coding?.at(0)?.display, 'Dentures');
    assert.strictEqual(schedule.serviceType?.at(1)?.concept?.coding?.at(0)?.display, 'Dentistry');
    assert.strictEqual(schedule.serviceType?.at(2)?.concept?.coding?.at(0)?.display, 'Dental Hygiene');
  });

  it('as especialidades.', () => {
    const testPractitioner = {} as Practitioner;
    const schedule = new Schedule(
      [ testPractitioner ],
      { start: new Date(Date.now()), end: new Date(Date.now() + 20000) },
      { specialty: [ 'Dental-General dental practice', 'Surgery-Dental-Prosthetic dentistry (Prosthodontics)'] }
    );

    assert.strictEqual(schedule.specialty?.at(0)?.coding?.at(0)?.display, 'Dental-General dental practice');
    assert.strictEqual(schedule.specialty?.at(1)?.coding?.at(0)?.display, 'Surgery-Dental-Prosthetic dentistry (Prosthodontics)');
  });

  it('o getter whose() retornando um actor.', () => {
    const testPatient = {} as Patient;
    const schedule = new Schedule(
      [ testPatient ],
      { start: new Date(Date.now()), end: new Date(Date.now() + 2) }
    );

    assert.deepEqual(
      schedule.whose,
      [ testPatient ]
    );
  });

  it('o getter whose() retornando um ou mais actors.', () => {
    const testPatient = {} as Patient;
    const testPractitioner = {} as Practitioner;

    const schedule = new Schedule(
      [ testPatient, testPractitioner ],
      { start: new Date(Date.now()), end: new Date(Date.now() + 2) }
    );

    assert.deepEqual(
      schedule.whose,
      [ testPatient, testPractitioner ]
    );
  });
  
  it('o getter start() retornando a data que a agenda se iniciará.', () => {
    const testPatient = {} as Patient;
    const schedule = new Schedule(
        [ testPatient ],
        { start: new Date('December 17, 1995 03:24:00'), end: new Date(Date.now() + 2) }
      );

    assert.strictEqual(
      schedule.start,
      'Sun Dec 17 1995 03:24:00 GMT-0200 (Horário de Verão de Brasília)'
    );
  });

  it('o getter end() retornando a data que a agenda irá se encerrar.', () => {
    const testPatient = {} as Patient;
    const endDate = new Date('April 17, 1996 03:24:00');

    endDate.setMonth(11);

    const schedule = new Schedule(
        [ testPatient ],
        { start: new Date('April 17, 1996 03:24:00'), end: endDate }
    );
    
    assert.strictEqual(
      schedule.end,
      'Tue Dec 17 1996 03:24:00 GMT-0200 (Horário de Verão de Brasília)'
    );
  });

  it('o extend() alterando o final para uma data correta.', () => {
    const testPatient = {} as Patient;
    const endDate = new Date('April 17, 1996 03:24:00');

    endDate.setMonth(5);

    let schedule: Schedule = new Schedule(
        [ testPatient ],
        { start: new Date('April 17, 1996 03:24:00'), end: endDate }
    );

    endDate.setMonth(10);

    assert.strictEqual(
       Schedule.extend(schedule, endDate.toString()).current.end,
      'Sun Nov 17 1996 03:24:00 GMT-0200 (Horário de Verão de Brasília)'
    );
  });

  it('o extend() alteando o final para uma data incorreta: antes do início', () => {
    const testPatient = {} as Patient;
    const endDate = new Date('April 17, 1996 03:24:00');

    endDate.setMonth(5);

    let schedule: Schedule = new Schedule(
        [ testPatient ],
        { start: new Date('April 17, 1996 03:24:00'), end: endDate }
    );

    assert.throws(
      () => {
        Schedule.extend(schedule, 'February 17, 1996 03:24:00')
      },
      Error,
      'The Schedule cannot end before it starts.'
    );
  });

  it('o extend() alterando o final para uma data incorreta: antes do final anterior', () => {
    const testPatient = {} as Patient;
    const endDate = new Date('April 17, 1996 03:24:00');

    endDate.setMonth(5);

    const schedule = new Schedule(
        [ testPatient ],
        { start: new Date('April 17, 1996 03:24:00'), end: endDate }
    );

    assert.throws(
      () => {
        Schedule.extend(schedule, 'May 17, 1996 03:24:00')
      },
      Error,
      'The new Schedule ending cannot be set to before the prior ending.'
    );
  });

  it('o extend() inativando o status de uma agenda anterior).', () => {
    const testPatient = {} as Patient;
    const endDate = new Date(Date.now() + 50000000000000);

    const schedule = new Schedule(
        [ testPatient ],
        { start: new Date(Date.now()), end: endDate }
    );
    
    assert.ok(schedule.active);

    const schedules = Schedule.extend(schedule, new Date(Date.now() + 70000000000000).toString());

    assert.ok(!schedules.prior.active);
    assert.ok(schedules.current.active);
  });

  it('o addActor() adicionando um novo ator para o schedule.', () => {
    const testPatient = {} as Patient;
    const testPractitioner = {} as Practitioner;

    const schedule = new Schedule(
      [ testPatient ],
      { start: new Date(Date.now()), end: new Date(Date.now() + 20000) }
      );
    
    assert.strictEqual(schedule.whose.length, 1);
    const schedules = Schedule.addActor(schedule, testPractitioner);
    assert.strictEqual(schedules.current.whose.length, 2);
  });

  it('o changeOptions() alterando os comentários do calendário.', () => {
    const testPractitioner = {} as Practitioner;
    const schedule = new Schedule(
      [ testPractitioner ],
      { start: new Date(Date.now()), end: new Date(Date.now() + 20000) },
      { comment: "Apenas agendar pacientes atendidos pelo SUS." }
    );

    const { current, prior } = Schedule.changeOptions(schedule, { comment: "Temporariamente suspenso por licença médica."})

    assert.strictEqual(prior.comment, "Apenas agendar pacientes atendidos pelo SUS.");
    assert.strictEqual(current.comment, "Temporariamente suspenso por licença médica.");
  });

  it('o changeOptions() alterando o nome do calendário.', () => {
    const testPractitioner = {} as Practitioner;
    const schedule = new Schedule(
      [ testPractitioner ],
      { start: new Date(Date.now()), end: new Date(Date.now() + 20000) },
      { name: "Dr. Pedro Paulo - Cirurgião Dentista Clínico Geral" }
    );

    const { current, prior } = Schedule.changeOptions(schedule, { name: "Dr. Pedro Paulo - Cirurgião Dentista Saúde Coletiva"})

    assert.strictEqual(prior.name, "Dr. Pedro Paulo - Cirurgião Dentista Clínico Geral");
    assert.strictEqual(current.name, "Dr. Pedro Paulo - Cirurgião Dentista Saúde Coletiva");
  });

  it('a serialização da classe.', () => {
    const testPatient = {} as Patient;
    const testPractitioner = {} as Practitioner;

    const schedule = new Schedule(
      [ testPatient, testPractitioner ],
      { start: new Date('April 17, 1996 03:24:00'), end: new Date('August 17, 1996 03:24:00') }
      );

    assert.strictEqual(
      JSON.stringify(schedule),
      '{"resourceType":"Schedule","active":false,"actor":[{},{}],"planningHorizon":{"start":"1996-04-17T06:24:00.000Z","end":"1996-08-17T06:24:00.000Z"}}'
    );
  });
});