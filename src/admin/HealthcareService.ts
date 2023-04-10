// @filename: HealthcareService.ts

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
import { Identifier } from "../core/datatypes/Identifier.js";

/**
 *  The details of a healthcare service available at a location.
 * 
 *  The HealthcareService resource can be used with the Schedule resource to define actual availability of the service. 
 *  This would be done by using the Schedule's Actor property. When creating an Appointment, the HealthcareService is to 
 *  be assigned to one of the participants. It is up to the scheduling system to determine if the service is available 
 *  and can be accepted.
 *  The HealthcareService resource is used with the following resources:
 *  * Organization: The organization provides the services, the healthcareservice describes the services;
 *  * ServiceRequest: This is a subject specific request for a specific service, it may be to a specific healthcare service, and/or simply a coded service value. The granularity included in the request codes may be finer than defined in the healthcare service;
 *  * OrganizationAffiliation: Might constrain a list of healthcare services that are available between 2 organizations;
 *  * Location: Specifies the place where the service(s) are offered/available within;
 * 
 *  Source: https://www.hl7.org/fhir/healthcareservice.html.
 *  
 */
class HealthcareService implements Aggregate, ResourceType {
    readonly resourceType = 'HealthcareService';
    readonly identifier?: Identifier[]
};

export {
    HealthcareService
}