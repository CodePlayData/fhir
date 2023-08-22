// @filename: ScheduleRepository.ts

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

import { Schedule } from "../core/index.js";
import { MongoDB, MongoDBCollection, MongoDBServer } from "@codeplaydata/adapters";


class DatabaseScheduleRepository {
    
    constructor() {

    }
    
    saveSchedule(schedule: Schedule) {

    }

    updateSchedule(id: { [key: string]: string }, data: { [key: string]: any}) {

    }

    deactiveSchedule(id: { [key: string]: string}) {

    }
}
