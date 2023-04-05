// @filename: Hl7VSAppointmentReasonCodes.ts

import { Code } from "../core/generics/Code";
import { CodeableConcept } from "../core/generics/CodeableConcept";
import { Coding } from "../core/valuesObjects/Coding";
import { AppointmentReasonCodes } from "../values/AppointmentReasonCodes";

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

type Hl7VSAppointmentReasonCodes = CodeableConcept<{
    readonly coding?: Coding<{
        readonly system?: URL;
        readonly version?: string;
        readonly code?: Code<AppointmentReasonCodes['code']>;
        readonly display?: AppointmentReasonCodes['display'];
        readonly userSelected?: boolean;
    }>[] | undefined;
    readonly text?: string | undefined;
}>

export {
    Hl7VSAppointmentReasonCodes
}