// @filename: OpenSchedule.ts

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

import { ScheduleRepository } from "./ScheduleRepository";
import { Schedule } from "../domain/availability/Schedule.js";
import { UseCase } from "./UseCase";
import { Bookable } from "../domain/availability/Bookable.js";
import { ScheduleOptions } from "../domain/availability/ScheduleOptions.js";

type ScheduleInput = {
    readonly actors: Bookable[], 
    readonly period: {
        start: Date,
        end: Date
    },
    readonly options?: ScheduleOptions
}

export class OpenSchedule implements UseCase<Schedule, ScheduleInput> {
    resource!: Schedule

    constructor(readonly repository: ScheduleRepository) {
    }

    exec(input: ScheduleInput) {
        this.resource = new Schedule(input.actors, input.period, input.options);
        this.repository.saveSchedule(this.resource);
        return {}
    }
}