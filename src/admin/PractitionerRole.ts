// @filename: PractitionerRole.ts

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
 *  A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period 
 *  of time.
 *  
 *  ### Scope and Usage
 *  The PractitionerRole describes the types of services that practitioners provide for an organization at specific 
 *  location(s). The PractitionerRole resource can be used in multiple contexts including:
 * 
 *  * Provider Registries where it indicates what a practitioner can perform for an organization (may indicate multiple 
 *  healthcareservices, locations, and roles);
 *  * In a Clinical system where it indicates the role, healthcareservice and location details associated with a 
 *  practitioner that are applicable to the healthcare event (e.g. Observation, Appointment, Condition, CarePlan);
 *  * In a Clinical system as a point of reference rather than an event, such as a patient's preferred general 
 *  practitioner (at a specific clinic);
 *  
 *  The role, specialty, Location telecom and HealthcareService properties can be repeated if required in other instances 
 *  of the PractitionerRole. Some systems record a collection of service values for a single location, others record the 
 *  single service and the list of locations it is available. Both are acceptable options for representing this data. 
 *  Where availability, telecom, or other details are not the same across all healthcareservices, or locations a separate 
 *  PractitionerRole instance should be created.
 *  
 *  Many resource types have a choice of a reference to either a Practitioner resource or a PractitionerRole resource. The latter provides 
 *  organizational context for the practitioners participation when it is required, otherwise a direct reference to the practitioner may be 
 *  used. Many implementations may choose to profile the PractitionerRole to a single location/role/healthcareservice for their specific usage. 
 *  As the property that references a PractitionerRole typically has a specific context, the code on the PractitionerRole having duplicate code 
 *  values is not a big concern (and is used for discovery where required).e.g. These references are all very context specific: 
 *  Patient.GeneralPractitioner, CarePlan.reported, CarePlan.contributor, Appointment.participant (through the participant.role), 
 *  Immunization.informationSource, Immunization.performer (through the performer.function property)
 * 
 *  For use cases where an organization has activities where a practitioner is not defined/pre-allocated for a specific role (e.g. an un-named 
 *  surgeon at XYZ Hospital), a PractitionerRole resource can be used with an empty Practitioner property, and the other relevant role properties 
 *  populated - i.e. code, organization.
 * 
 *  Souce: https://www.hl7.org/fhir/practitionerrole.html.
 */
abstract class PractitionerRole implements Resource {
    readonly resourceType = 'PractitionerRole';
    readonly identifier?: Identifier[]
};

export {
    PractitionerRole
}