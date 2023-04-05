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
  // ...
  {
    code: 'QA01',
    display: 'Examination or encounter for administrative purposes',
    definition: 'Examination or encounter for administrative purposes'
  } |
  // ...
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