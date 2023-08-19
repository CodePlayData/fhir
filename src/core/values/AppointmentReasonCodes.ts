// @filename: AppointmentReasonCodes.ts

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

import { Override } from "../shared/Override.js"
import { ValueSet } from "./ValueSet.js"

type AppointmentReasonCodesType = {
    version: '2.0.0',
    compose: {
        include: [
            {
                system: 'https://terminology.hl7.org/3.1.0/ValueSet-v2-0276.html',
                concept: 
                    { code: 'ROUTINE', display: 'Routine appointment - default if not valued', definition?: 'Routine appointment - default if not valued'       } |
                    { code: 'WALKIN', display: 'A previously unscheduled walk-in visit', definition?: 'A previously unscheduled walk-in visit'                  } |
                    { code: 'CHECKUP', display: 'A routine check-up, such as an annual physical', definition?: 'A routine check-up, such as an annual physical' } |
                    { code: 'FOLLOWUP', display: 'A follow up visit from a previous appointment', definition?: 'A follow up visit from a previous appointment'  } |
                    { code: 'EMERGENCY', display: 'Emergency appointment', definition?: 'Emergency appointment'                                                 }
            }
        ]
    }
}
/**
 *  Value Set of codes that describe the kind of appointment or the reason why an appointment has been scheduled.
 * 
 *  Source: https://terminology.hl7.org/5.1.0/ValueSet-v2-0276.html.
 */
type AppointmentReasonCodes = Override<ValueSet, AppointmentReasonCodesType>;

export {
    AppointmentReasonCodes
}