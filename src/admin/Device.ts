// @filename: Device.ts

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

import { Resource } from "../core/Resource.js";
import { Identifier } from "../core/general/Identifier.js";

/**
 *  A type of a manufactured item that is used in the provision of healthcare without being substantially changed through 
 *  that activity. The device may be a medical or non-medical device.
 * 
 *  ### Scope and Usage
 *  This is a base resource that tracks individual instances of a device and their location. It is referenced by other resources 
 *  for recording which device performed an action such as a procedure or an observation, which device was implanted in or explanted 
 *  from a patient, dispensing a device to a patient for their use, managing inventory, or when requesting a specific device for a 
 *  patient's use. 
 * 
 *  Medical devices include durable (reusable) medical equipment, implantable devices, as well as disposable equipment 
 *  used for diagnostic, treatment, and research for healthcare and public health. Medical devices may also include some types of 
 *  software.
 * 
 *  Non-medical devices may include items such as a machine, cellphone, computer, software application or algorithm, etc. In short, 
 *  a Device can range from a tongue depressor to an MRI. The fields in the Device resource must be flexible enough to cover this range.
 *  
 *  Device category examples include, but are not limited to: 
 *  * active
 *  * communicating
 *  * durable medical equipment
 *  * home use
 *  * implantable
 *  * InVitro diagnostics
 *  * personal health
 *  * point-of-care
 *  * single use
 *  * re-usable
 *  * software
 * 
 *  Source: https://www.hl7.org/fhir/device.html.
 */
abstract class Device implements Resource {
    readonly resourceType = 'Device';
    readonly identifier?: Identifier[]
};

export {
    Device
}