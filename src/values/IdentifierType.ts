// @filename: IdentifierType.ts

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
 *  **A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.**
 *  
 *  **System**: http://hl7.org/fhir/ValueSet/identifier-type.
 * 
 *  |    Code   |   |  Definition  |
 *  |:----------|---|:-------------|
 *  | DL        |   | Driver's license number.|
 *  | PPN       |   | A unique number assigned to the document affirming that a person is a citizen of the country. |
 *  | BRN       |   | Breed Registry Number. |
 *  | MR        |   | An identifier that is unique to a patient within a set of medical records, not necessarily unique within an application. |
 *  | MCN       |   | Microchip Number. |
 *  | EN        |   | Employer number. |
 *  | TAX       |   | Tax ID number. |
 *  | NIIP      |   | National Insurance Payor Identifier (Payor) |
 *  | PRN       |   | A number that is unique to an individual provider, a provider group or an organization within an Assigning Authority. |
 *  | MD        |   | An identifier that is unique to a medical doctor within the jurisdiction of a licensing board. |
 *  | DR        |   | Donor Registration Number. |
 *  | ACSN      |   | Accession Identifier  |
 *  | UDI       |   | An identifier assigned to a device using the Unique Device Identification framework as defined by IMDRF (http://imdrf.org). |
 *  | SNO       |   | An identifier affixed to an item by the manufacturer when it is first made, where each item has a different identifier. |
 *  | SB        |   | An identifier issued by a governmental organization to a person to identify the person should they apply for or receive social services and/or benefits. |
 *  | PLAC      |   | An identifier for a request where the identifier is issued by the person or service making the request. |
 *  | FILL      |   | An identifier for a request where the identifier is issued by the person, or service, that produces the observations or fulfills the request. |
 *  | JHN       |   | Jurisdictional health number. |
 */
type IdentifierType = 
  'DL'    |
  'PPN'   |
  'BRN'   |
  'MR'    |
  'MCN'   |
  'EN'    |
  'TAX'   |
  'NIIP'  |
  'PRN'   |
  'MD'    |
  'DR'    |
  'ACSN'  |
  'UDI'   |
  'SNO'   |
  'SB'    |
  'PLAC'  |
  'FILL'  |
  'JHN'

export {
  IdentifierType
}