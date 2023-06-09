// @filename: ServiceCategory.ts

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

import { Override } from "../shared/Override.js"
import { ValueSet } from "./ValueSet.js"

type ServiceCategoryType = {
    version: '0.1.0',
    compose: {
        include: [
            {
                system: 'http://terminology.hl7.org/CodeSystem/service-category',
                concept: 
                    { code: "1", display: "Adoption", definition: "Adoption" } |
                    { code: "2", display: "Aged Care", definition: "Aged Care" } |
                    { code: "34", display: "Allied Health", definition: "Allied Health" } |
                    { code: "3", display: "Alternative/Complementary Therapies", definition: "Alternative & Complementary Therapies" } |
                    { code: "4", display: "Child Care /Kindergarten", definition: "Child Care and/or Kindergarten" } |
                    { code: "5", display: "Child Development", definition: "Child Development" } |
                    { code: "6", display: "Child Protection & Family Services", definition: "Child Protection & Family Services" } |
                    { code: "7", display: "Community Health Care", definition: "Community Health Care" } |
                    { code: "8", display: "Counselling", definition: "Counselling" } |
                    { code: "36", display: "Crisis Line (GPAH use only)", definition: "Crisis Line (GPAH use only)" } |
                    { code: "9", display: "Death Services", definition: "Death Services" } |
                    { code: "10", display: "Dental", definition: "Dental" } |
                    { code: "11", display: "Disability Support", definition: "Disability Support" } |
                    { code: "12", display: "Drug/Alcohol", definition: "Drug/Alcohol" } |
                    { code: "13", display: "Education & Learning", definition: "Education & Learning" } |
                    { code: "14", display: "Emergency Department", definition: "Emergency Department" } |
                    { code: "15", display: "Employment", definition: "Employment" } |
                    { code: "16", display: "Financial & Material Aid", definition: "Financial & Material aid" } |
                    { code: "17", display: "General Practice", definition: "General Practice/GP (doctor)" } |
                    { code: "35", display: "Hospital", definition: "Hospital" } |
                    { code: "18", display: "Housing/Homelessness", definition: "Housing/Homelessness" } |
                    { code: "19", display: "Interpreting", definition: "Interpreting" } |
                    { code: "20", display: "Justice", definition: "Justice" } |
                    { code: "21", display: "Legal", definition: "Legal" } |
                    { code: "22", display: "Mental Health", definition: "Mental Health" } |
                    { code: "38", display: "NDIA", definition: "NDIA" } |
                    { code: "23", display: "Physical Activity & Recreation", definition: "Physical Activity & Recreation" } |
                    { code: "24", display: "Regulation", definition: "Regulation" } |
                    { code: "25", display: "Respite/Carer Support", definition: "Respite/Carer Support" } |
                    { code: "26", display: "Specialist Clinical Pathology", definition: "Specialist Clinical Pathology - requires referral" } |
                    { code: "27", display: "Specialist Medical", definition: "Specialist Medical - requires referral" } |
                    { code: "28", display: "Specialist Obstetrics & Gynecology", definition: "Specialist Obstetrics & Gynecology - requires referral" } |
                    { code: "29", display: "Specialist Paediatric", definition: "Specialist Paediatric - requires referral" } |
                    { code: "30", display: "Specialist Radiology/Imaging", definition: "Specialist Radiology/Imaging - requires referral" } |
                    { code: "31", display: "Specialist Surgical", definition: "Specialist Surgical - requires referral" } |
                    { code: "32", display: "Support Group/s", definition: "Support group/s" } |
                    { code: "37", display: "Test Message (HSD admin)", definition: "Test Message (HSD admin use only)" } |
                    { code: "33", display: "Transport", definition: "Transport" }
            }
        ]
    }
}
/** 
 *  This value set defines an example set of codes that can be used to classify groupings of service-types/specialties.
 *  
 *  Source: http://terminology.hl7.org/CodeSystem/service-category.
 */

type ServiceCategory = Override<ValueSet, ServiceCategoryType>;

export {
    ServiceCategory
}