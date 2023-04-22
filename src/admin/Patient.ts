// @filename: Patient.ts

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
 *  Demographics and other administrative information about an individual or animal receiving care or other health-related 
 *  services.
 * 
 *  The data in the Resource covers the "who" information about the patient: its attributes are focused on the demographic 
 *  information necessary to support the administrative, financial and logistic procedures. A Patient record is generally 
 *  created and maintained by each organization providing care for a patient. A patient or animal receiving care at multiple 
 *  organizations may therefore have its information present in multiple Patient Resources.
 * 
 *  Source: https://www.hl7.org/fhir/patient.html.
 */
abstract class Patient implements Resource {
    readonly resourceType = 'Patient';
    readonly identifier?: Identifier[]
};

export {
    Patient
}