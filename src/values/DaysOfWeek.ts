// @filename: DaysOfWeek.ts

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

import { Override } from "../shared/Override";
import { ValueSet } from "./ValueSet";

type DaysOfWeekType = {
    version: '5.0.0',
    compose: {
        include: [
            {
                system: 'http://hl7.org/fhir/ValueSet/days-of-week',
                concept: 
                    { code: 'mon', display: 'Monday'    } |
                    { code: 'tue', display: 'Tuesday'   } |
                    { code: 'wed', display: 'Wednesday' } |
                    { code: 'thu', display: 'Thursday'  } |
                    { code: 'fri', display: 'Friday'    } |
                    { code: 'sat', display: 'Saturday'  } |
                    { code: 'sun', display: 'Sunday'    } 
            }
        ]
    }
};

type DaysOfWeek = Override<ValueSet, DaysOfWeekType>;
    
export {
    DaysOfWeek
}