// @filename: ChangeSchedule.ts

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
import { Schedule, ScheduleSchemaR5 } from "../core/workflow/availability/Schedule.js";
import { UseCase } from "./UseCase";

type ScheduleNewData = ScheduleSchemaR5 & {};
type ScheduleUpdatedConfirmation = {};

export class ChangeSchedule implements UseCase<Schedule, ScheduleNewData, ScheduleUpdatedConfirmation> {
    resource!: Schedule

    constructor(readonly repository: ScheduleRepository) {
    }

    exec(input: ScheduleNewData) {
        //this.resource = new Schedule(input);
        //this.repository.saveSchedule(this.resource);
        return {}
    }
}