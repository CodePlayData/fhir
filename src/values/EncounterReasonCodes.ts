// EncounterReasonCodes.ts

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
 *  This examples value set defines the set of codes that can be used to indicate reasons for 
 *  an encounter.
 * 
 *  Source: http://id.who.int/icd/entity/1206995198.
 */
type EncounterReasonCodes =
  {
    code: 'QA00',
    display: 'General examination or investigation of persons without complaint or reported diagnosis',
    definition: 'General examination or investigation of persons without complaint or reported diagnosis'
  } |
  {
    code: 'QA00.0',
    display: 'General adult medical examination',
    definition: 'Encounter for periodic examination (annual) (physical) and any associated laboratory and  \
    radiologic examinations on adult, except for Routine child health examination (QA00.1), Routine general \
    health check-up of defined subpopulation (QA03), Routine newborn health examination (QA00.2) or Symptoms, \
    signs or clinical findings, not elsewhere classified (MA00-MH2Y)'
  } |
  {
    code: 'QA00.1',
    display: 'Routine child health examination',
    definition: 'Routine health check for child over 28 days of age through 19 years of age, except for Health \
    supervision or care of abandoned infant (QC22) or Health supervision or care of other healthy infant or child \
     (QC20-QC2Z)'
  } |
  {
    code: 'QA00.2',
    display: 'Routine newborn health examination',
    definition: 'Health examination for infant under 29 days of age, except for Routine child health examination (QA00.1)'
  } |
  {
    code: 'QA00.3',
    display: 'General psychiatric examination',
    definition: 'General psychiatric examination except for examination requested for medicolegal reasons (QA04).'
  } |
  {
    code: 'QA00.4',
    display: 'Examination of potential donor of organ or tissue',
    definition: 'Examination of potential donor of organ or tissue'
  } |
  {
    code: 'QA00.5',
    display: 'Examination for normal comparison or control in clinical research programme',
    definition: 'Examination for normal comparison or control in clinical research programme'
  } | 
  {
    code: 'QA00.6',
    display: 'Examination of eyes or vision',
    definition: 'Examination of eyes or vision except for Examination for driving license (QA01.4)'
  } |
  {
    code: 'QA00.61',
    display: 'Normal Visual Field',
    definition: 'Normal Visual Field',
    postcoordination: 'XK9J - Bilateral' | 'XK8G - Left' | 'XK9K - Right' | 'XK70 - Unilateral, unspecified'
  } |
  {
    code: 'QA00.6Y',
    display: 'Other specified examination of eyes or vision',
    definition: 'Other specified examination of eyes or vision'
  } | 
  {
    code: 'QA00.6Z',
    display: 'Examination of eyes or vision, unspecified',
    definition: 'Examination of eyes or vision, unspecified'
  } | 
  {
    code: 'QA00.7',
    display: 'Examination of ears and hearing',
    definition: 'Examination of ears and hearing'
  } |
  {
    code: 'QA00.8',
    display: 'Dental examination',
    definition: 'Dental examination'
  } |
  {
    code: 'QA00.9',
    display: 'Gynaecological examination',
    definition: 'Gynaecological examination except for routine examination for contraceptive maintenance (QA21.5) or Pregnancy examination or test (QA40).'
  } |
  {
    code: 'QA00.A',
    display: 'Skin or other sensitisation tests',
    definition: 'Skin or other sensitisation tests'
  } |
  {
    code: 'QA00.B',
    display: 'Radiological examination',
    definition: 'Radiological examination except for Special screening examination for neoplasm of breast (QA09.3)'
  } |
  {
    code: 'QA00.C',
    display: 'Laboratory examination',
    definition: 'Laboratory examination'
  } |
  {
    code: 'QA00.D',
    display: 'Encounter for blood typing',
    definition: 'Encounter for blood typing'
  } |
  {
    code: 'QA00.E',
    display: 'Encounter for antibody response examination',
    definition: 'Encounter for antibody response examination except for Skin or other sensitisation tests (QA00.A)'
  } | 
  {
    code: 'QA00.Y',
    display: 'Other specified general examination or investigation of persons without complaint or reported diagnosis',
    definition: 'Other specified general examination or investigation of persons without complaint or reported diagnosis'
  } |
  {
    code: 'QA00.Z',
    display: 'General examination or investigation of persons without complaint or reported diagnosis, unspecified',
    definition: 'General examination or investigation of persons without complaint or reported diagnosis, unspecified'
  } |
  {
    code: 'QA01',
    display: 'Examination or encounter for administrative purposes',
    definition: 'Examination or encounter for administrative purposes'
  } |
  {
    code: 'QA01.0',
    display: 'Examination for admission to educational institution',
    definition: 'Examination for admission to educational institution'
  } |
  {
    code: 'QA01.1',
    display: 'Pre-employment examination',
    definition: 'Pre-employment examination except for Occupational health examination (QA03.0)'
  } |
  {
    code: 'QA01.2',
    display: 'Examination for admission to residential institutions',
    definition: 'Examination for admission to residential institutions except for Routine general health check-up of inhabitants of institutions (QA03.1)'
  } |
  {
    code: 'QA01.3',
    display: 'Examination for recruitment to armed forces',
    definition: 'Examination for recruitment to armed forces except for Routine general health check-up of armed forces (QA03.2)'
  } |
  {
    code: 'QA01.4',
    display: 'Examination for driving license',
    definition: 'Examination for driving license'
  } |
  {
    code: 'QA01.5',
    display: 'Examination for participation in sport',
    definition: 'Examination for participation in sport except for Blood-alcohol or blood-drug test (QA04.0) or Routine general health check-up of sports teams (QA03.3)'
  } |
  {
    code: 'QA01.6',
    display: ' Examination for insurance purposes',
    definition: 'Examination for insurance purposes'
  } |
  {
    code: 'QA01.7',
    display: 'Issue of medical certificate',
    definition: 'Issue of medical certificate except for General adult medical examination (QA00.0)'
  } |
  {
    code: 'QA01.8',
    display: 'Encounter for adoption services',
    definition: 'Encounter to provide pre or post-adoption services to assist prospective adoptive \
    parents in making an informed decision prior to adoption or to address the medical history and \
    current health of the child and provide parental guidance'
  } |
  {
    code: 'QA01.Y',
    display: 'Other specified examination or encounter for administrative purposes',
    definition: 'Other specified examination or encounter for administrative purposes'
  } |
  {
    code: 'QA01.Z',
    display: 'Examination or encounter for administrative purposes, unspecified',
    definition: 'Examination or encounter for administrative purposes, unspecified'
  } |
  {
    code: 'QA02',
    display: 'Medical observation or evaluation for suspected diseases or conditions, ruled out',
    definition: 'Persons without signs or symptoms or a diagnosis when suspected of having an abnormal condition which requires study, but who, after examination and observation, show no need for further treatment or medical care because suspected condition has been ruled out.’'
  } |
  // ...
  {
    code: 'QA03',
    display: 'Routine general health check-up of defined subpopulation',
    definition: 'Routine general health check-up of defined subpopulation'
  } |
  // ...
  {
    code: 'QA04',
    display: 'Examination or observation for reasons other than suspected diseases or conditions or administrative purposes',
    definition: 'Examination or observation for reasons other than suspected diseases or conditions or administrative purposes'
  } |
  // ...
  {
    code: 'QA05',
    display: 'Person consulting for explanation of investigation findings',
    definition: 'Person consulting for explanation of investigation findings'
  } |
  // ...
  {
    code: 'QA06',
    display: 'Follow-up examination after treatment for malignant neoplasms',
    defintion: 'Follow-up examination after treatment for malignant neoplasms'
  } |
  // ...
  {
    code: 'QA07',
    display: 'Follow-up examination after treatment for conditions other than malignant neoplasms',
    definition: 'Follow-up examination after treatment for conditions other than malignant neoplasms'
  } |
  // ...
  {
    code: 'QA08',
    display: 'Special screening examination for infectious diseases'
    definition: 'Special screening examination for infectious diseases'
  } |
  // ...
  {
    code: 'QA09',
    display: 'Special screening examination for neoplasms',
    definition: 'Special screening examination for neoplasms'
  } |
  // ...
  {
    code: 'QA0A',
    display: 'A Special screening examination for other diseases or disorders',
    definition: 'A Special screening examination for other diseases or disorders'
  } |
  // ...
  {
    code: 'QA0B',
    display: 'Preprocedural examination',
    definition: 'Preprocedural examination'
  } |
  // ...
  {
    code: 'QA0Y',
    display: 'Preprocedural examination',
    definition: 'Preprocedural examination'
  } |
  // ...
  {
    code: 'QA0Z',
    display: 'Examination or investigation, unspecified',
    definition: 'Examination or investigation, unspecified'
  } |
  // ...
  {
    code: 'QA10',
    display: 'Contact with health services for dietary counselling or surveillance',
    definition: 'Contact with health services for dietary counselling or surveillance'
  } |
  // ...
  {
    code: 'QA11',
    display: 'Contact with health services for alcohol use counselling or surveillance',
    definition: 'Contact with health services for alcohol use counselling or surveillance, except for Alcohol rehabilitation (QB95.2) or disorders due to use of alcohol (6C40)'
  } |
  // ...
  {
    code: 'QA12',
    display: 'Contact with health services for drug use counselling or surveillance',
    definition: 'Contact with health services for drug use counselling or surveillance, except for Drug rehabilitation (QB95.3) or Disorders due to substance use or addictive behaviours (6C40-6C5Z)'
  } |
  // ...
  {
    code: 'QA13',
    display: 'Contact with health services for tobacco use counselling',
    definition: 'Contact with health services for tobacco use counselling, except for Tobacco rehabilitation (QB95.8) or Disorders due to use of nicotine (6C4A)'
  } |
  // ...
  {
    code: 'QA14',
    display: 'Contact with health services for human immunodeficiency virus counselling',
    definition: 'Human immunodeficiency virus counselling can be defined as accessible HIV counselling services that meet the needs of clients and providers in an equitable and acceptable manner, within the resources available and in line with national guidelines. Counselling should increase knowledge of HIV prevention and help the client to focus on solutions to risk reduction.'
  } |
  // ...
  {
    code: 'QA15',
    display: 'Counselling related to sexuality',
    definition: 'Counselling related to sexuality, except for Contact with health services for contraceptive management (QA21), Conditions related to sexual health (HA00-HA8Z) or Contact with health services for procreative management (QA30-QA3Z)'
  } |
  // ...
  {
    code: 'QA16',
    display: 'Individual psychological or behavioural counselling',
    definition: 'Individual psychological or behavioural counselling'
  } |
  // ...
  {
    code: 'QA17',
    display: 'Marital or couples counselling',
    definition: 'Marital or couples counselling'
  } |
  // ...
  {
    code: 'QA18',
    display: 'Family counselling',
    definition: 'Family counselling'
  } |
  // ...
  {
    code: 'QA19',
    display: 'Group counselling',
    definition: 'Group counselling'
  } |
  // ...
  {
    code: 'QA1A',
    display: 'Discussion of issues surrounding impending death',
    definition: 'Discussion of issues surrounding impending death'
  } |
  // ...
  {
    code: 'QA1B',
    display: 'Concern about or fear of medical treatment',
    definition: 'Concern about or fear of medical treatment'
  } |
  // ...
  {
    code: 'QA1C',
    display: 'Person with feared complaint in whom no diagnosis is made',
    definition: 'Person with feared complaint in whom no diagnosis is made except for Medical observation or evaluation for suspected diseases or conditions, ruled out (QA02)'
  } |
  // ...
  {
    code: 'QA1Y',
    display: 'Contact with health services for other specified counselling',
    definition: 'Contact with health services for other specified counselling'
  } |
  // ...
  {
    code: 'QA1Z',
    display: 'Contact with health services for unspecified counselling',
    definition: 'Contact with health services for unspecified counselling'
  } |
  // ...
  {
    code: 'QA20',
    display: 'Contact with health services for concerns about pregnancy',
    definition: 'Contact with health services for concerns about pregnancy'
  } |
  // ...
  {
    code: 'QA21',
    display: 'Contact with health services for contraceptive management',
    definition: 'Contact with health services for contraceptive management'
  } |
  // ...
  {
    code: ''
  }