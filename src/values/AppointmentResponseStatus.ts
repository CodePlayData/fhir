// @filename: AppointmentResponseStatus.ts

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

import { ValueSet } from "./ValueSet.js"

/**
 *  The Participation status for a participant in response to a request for an appointment.
 * 
 *  Source: http://hl7.org/fhir/ValueSet/appointmentresponse-status.
 */
type AppointmentResponseStatus = ValueSet &
    { code: 'accepted', display: 'Accepted', definition: 'The participant has accepted the appointment.' } |
    { code: 'declined', display: 'Declined', definition: 'The participant has declined the appointment and will not participate in the appointment.' } |
    { code: 'tentative', display: 'Tentative', definition: 'The participant has tentatively accepted the appointment. This could be automatically created by a system and requires further processing before it can be accepted. There is no commitment that attendance will occur.' } |
    { code: 'needs-action', display: 'Needs Action', defintion: 'The participant needs to indicate if they accept the appointment by changing this status to one of the other statuses.' } |
    { code: 'entered-in-error', display: 'Entered in error', definition: "This instance should not have been part of this patient's medical record." }

export {
    AppointmentResponseStatus
}