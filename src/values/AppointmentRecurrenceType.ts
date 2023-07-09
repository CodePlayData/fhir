// @filename: AppointmentRecurrenceType.ts

import { Override } from "../shared/Override";
import { ValueSet } from "./ValueSet";

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

type AppointmentRecurrenceTypeType = {
    version: '5.0.0',
    compose: {
        include: [
            {
                system: 'http://hl7.org/fhir/ValueSet/appointment-recurrrence-type',
                concept: 
                    { code: 'd', display: 'day', definition?: 'day'                                                                                                          } |
                    { code: 'wk', display: 'week', definition?: 'week'                                                                                                       } |
                    { code: 'mo', display: 'month', definition?: "month - Normal practice is to use the 'mo' code as a calendar month when calculating the next occurrence." } |
                    { code: 'a', display: 'year', definition?: 'year'                                                                                                        }
            }
        ]
    }
}
/**
 * 
 *  The recurrence type of a recurring appointment.
 * 
 *  Source: http://hl7.org/fhir/ValueSet/appointment-recurrrence-type.
 */
type AppointmentRecurrenceType = Override<ValueSet, AppointmentRecurrenceTypeType>;
    
export {
    AppointmentRecurrenceType
}