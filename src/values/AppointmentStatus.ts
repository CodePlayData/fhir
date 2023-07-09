// @filename: AppointmentStatus.ts

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

type AppointmentStatusType = {
    version: '5.0.0',
    compose: {
        include: [
            {
                system: 'http://hl7.org/fhir/ValueSet/appointmentstatus',
                concept: 
                    { code: 'proposed', display: 'Proposed', definition?: 'None of the participant(s) have finalized their acceptance of the appointment request, and the start/end time might not be set yet.'                                                                                               } |
                    { code: 'pending', display: 'Pending', definition?: 'Some or all of the participant(s) have not finalized their acceptance of the appointment request.'                                                                                                                                   } |
                    { code: 'booked', display: 'Booked', definition?: 'All participant(s) have been considered and the appointment is confirmed to go ahead at the date/times specified.'                                                                                                                     } |
                    { code: 'arrived', display: 'Arrived', definition?: 'The patient/patients has/have arrived and is/are waiting to be seen.'                                                                                                                                                                } |
                    { code: 'fulfilled', display: 'Fulfilled', definition?: 'The planning stages of the appointment are now complete, the encounter resource will exist and will track further status changes. Note that an encounter may exist before the appointment status is fulfilled for many reasons.' } |
                    { code: 'cancelled', display: 'Cancelled', definition?: 'The appointment has been cancelled.'                                                                                                                                                                                             } |
                    { code: 'noshow', display: 'No Show', definition?: 'Some or all of the participant(s) have not/did not appear for the appointment (usually the patient).'                                                                                                                                 } |
                    { code: 'entered-in-error', display: 'Entered in error', definition?: "This instance should not have been part of this patient's medical record."                                                                                                                                         } |
                    { code: 'checked-in', display: 'Checked In', definition?: 'When checked in, all pre-encounter administrative work is complete, and the encounter may begin. (where multiple patients are involved, they are all present).'                                                                } |
                    { code: 'waitlist', display: 'Waitlisted', definition?: 'The appointment has been placed on a waitlist, to be scheduled/confirmed in the future when a slot/service is available. A specific time might or might not be pre-allocated.'                                                   }
            }
        ]
    }
}
/**
 *  The free/busy status of an appointment.
 * 
 *  Source: http://hl7.org/fhir/ValueSet/appointmentstatus.
 */
type AppointmentStatus = Override<ValueSet, AppointmentStatusType>;

export {
    AppointmentStatus
}