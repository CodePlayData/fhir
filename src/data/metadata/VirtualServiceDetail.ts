// @filename: VirtualServiceDetail.ts

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

import { VirtualServiceType } from "../../values/VirtualServiceType.js";
import { Coding } from "../general/Coding.js";
import { Code } from "../primitives/Code.js";
import { PositiveInt } from "../primitives/PositiveInt.js";

/**
 *  The VirtualServiceDetail structure defines details of a virtual communication capability, such as a web conference call.
 */
abstract class VirtualServiceDetail {
    constructor(
        readonly channelType?: Coding<{
        readonly system?: URL,
        readonly version?: string,
        readonly display?: string,
        readonly userSelected?: boolean
        readonly code: Code<VirtualServiceType['compose']['include'][0]['concept']['code']>
        }>,
        readonly address?: any,
        readonly additionalInfo?: URL,
        readonly maxParticipants?: PositiveInt,
        readonly sessionKey?: string
    ){}
}

export {
    VirtualServiceDetail
}