// @filename: ScheduleSchema.ts

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

import { Identifier } from "../../data/general/Identifier.js";
import { PracticeSettingCodeValueSet } from "../../values/PracticeSettingCodeValueSet.js";
import { Patient } from "../../admin/Patient.js";
import { Practitioner } from "../../admin/Practitioner.js";
import { PractitionerRole } from "../../admin/PractitionerRole.js";
import { CareTeam } from "../../admin/CareTeam.js";
import { RelatedPerson } from "../../admin/RelatedPerson.js";
import { Device } from "../../admin/Device.js";
import { HealthcareService as HealthcareServiceResource } from "../../admin/HealthcareService";
import { Location } from "../../admin/Location.js";
import { ServiceType as ServiceTypeValueSet } from "../../values/ServiceType.js";
import { ServiceCategory as ServiceCategoryValueSet } from "../../values/ServiceCategory.js";
import { ValueSet } from "../../values/ValueSet.js";


type ScheduleSchemaR4B<
    T extends ValueSet = ServiceCategoryValueSet,
    K extends ValueSet = ServiceTypeValueSet,
    V extends ValueSet = PracticeSettingCodeValueSet
> = {
    readonly identifier?: Identifier[],
    readonly active?: boolean,
    readonly serviceCategory?: {
        system?: T['compose']['include']['0']['system'],
        version?: T['version'],
        code?: T['compose']['include']['0']['concept']['code'],
        display?: T['compose']['include']['0']['concept']['display'],
        useSelected?: boolean
    },
    readonly serviceType?: {
        concept: {
            system?: K['compose']['include']['0']['system'],
            version?: K['version'],
            code?: K['compose']['include']['0']['concept']['code'],
            display?: K['compose']['include']['0']['concept']['display'],
            useSelected?: boolean
        },
        reference?: HealthcareServiceResource
    }[],
    readonly specialty?: {
        system?: V['compose']['include']['0']['system'],
        version?: V['version'],
        code?: V['compose']['include']['0']['concept']['code'],
        display?: V['compose']['include']['0']['concept']['display'],
        useSelected?: boolean
    }[],
    readonly actor: Array<Patient | Practitioner | PractitionerRole | CareTeam | RelatedPerson | Device | HealthcareServiceResource | Location>,
    readonly planningHorizon?: { start: Date, end: Date },
    readonly comment?: string
}


type ScheduleSchemaR5<
    T extends ValueSet = ServiceCategoryValueSet,
    K extends ValueSet = ServiceTypeValueSet,
    V extends ValueSet = PracticeSettingCodeValueSet
> = ScheduleSchemaR4B<T, K, V> & {
    readonly name?: string
}

export {
    ScheduleSchemaR4B,
    ScheduleSchemaR5
}