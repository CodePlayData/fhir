// @filename: Practitioner.ts

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

import { Aggregate } from "../Aggregate.js";
import { ResourceType } from "../ResourceType.js";
import { Identifier } from "../core/valuesObjects/Identifier.js";

/**
 *  A person who is directly or indirectly involved in the provisioning of healthcare or related services.
 * 
 *  ### Scope and Usage
 *  Practitioner covers all individuals who are engaged in the healthcare process and healthcare-related 
 *  services as part of their formal responsibilities and this Resource is used for attribution of activities 
 *  and responsibilities to these individuals. Practitioners include (but are not limited to):
 *  * physicians, dentists, pharmacists;
 *  * physician assistants, nurses, scribes;
 *  * midwives, dietitians, therapists, optometrists, paramedics;
 *  * medical technicians, laboratory scientists, prosthetic technicians, radiographers;
 *  * social workers, professional homecare providers, official volunteers;
 *  * receptionists handling patient registration;
 *  * IT personnel merging or unmerging patient records;
 *  * service animal (e.g., ward assigned dog capable of detecting cancer in patients);
 *  * a bus driver for a community organization;
 *  * a lawyer acting for a hospital or a patient;
 *  * a person working for a supplier of a healthcare organization
 * 
 *  The Practitioner resource is used for anyone involved in the provision of care or services to a Patient 
 *  associated with an organization. The RelatedPerson resource is used for anyone involved in the care for 
 *  a patient, typically having a personal *relationship *or non-healthcare-specific professional relationship 
 *  to the patient.
 * 
 *  Source: https://www.hl7.org/fhir/practitioner.html.
 */
class Practitioner implements Aggregate, ResourceType {
    readonly resourceType = 'Practitioner';
    readonly identifier?: Identifier[]
};

export {
    Practitioner
}