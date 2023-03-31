// @filename: SlotStatus.ts

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

/**
 *  The free/busy status of the slot.
 * 
 *  Source: http://hl7.org/fhir/ValueSet/slotstatus.
 */
type SlotStatus = 
    { code: 'busy', display: 'Busy', definition: 'Indicates that the time interval is busy because one or more events have been scheduled for that interval.' } |
    { code: 'free', display: 'Free', definition: 'Indicates that the time interval is free for scheduling.' } |
    { code: 'busy-unavailabe', display: 'Busy (Unavailable)', definition: 'Indicates that the time interval is busy and that the interval cannot be scheduled.' } |
    { code: 'busy-tentative', display: 'Busy (Tentative)', definition: 'Indicates that the time interval is busy because one or more events have been tentatively scheduled for that interval.' } |
    { code: 'entered-in-error', display: 'Entered in error', definition: "This instance should not have been part of this patient's medical record." }

export {
    SlotStatus
}