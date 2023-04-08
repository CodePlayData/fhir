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

import { ValueSet } from "./ValueSet.js"

/** 
 *  A coded type for an identifier that can be used to determine which identifier to use for a specific purpose.
 *  
 *  Source: http://hl7.org/fhir/ValueSet/identifier-type.
 */
type IdentifierType = ValueSet &
  {
    code: "DL",
    display: "Driver's license number",
    definition: "Driver's license number"
  } |
  {
    code: "PPN",
    display: "Passport number",
    definition: "A unique number assigned to the document affirming that a person is a citizen of the country."
  } |
  {
    code: "BRN",
    display: "Breed Registry Number",
    definition: "Breed Registry Number"
  } |
  {
    code: "MR",
    display: "Medical record number",
    definition: "An identifier that is unique to a patient within a set of medical records, not necessarily unique within an application."
  } |
  {
    code: "MCN",
    display: "Microchip Number",
    definition: "Microchip Number"
  } |
  {
    code: "EN",
    display: "Employer number",
    definition: "Employer number"
  } |
  {
    code: "TAX",
    display: "Tax ID number",
    definition: "Tax ID number"
  } |
  {
    code: "NIIP",
    display: "National Insurance Payor Identifier (Payor)",
    definition: "National Insurance Payor Identifier (Payor)"
  } |
  {
    code: "PRN",
    display: "Provider number",
    definition: "A number that is unique to an individual provider, a provider group or an organization within an Assigning Authority."
  } |
  {
    code: "MD",
    display: "Medical License number",
    definition: "An identifier that is unique to a medical doctor within the jurisdiction of a licensing board."
  } |
  {
    code: "DR",
    display: "Donor Registration Number",
    definition: "Donor Registration Number"
  } |
  {
    code: "ACSN",
    display: "Accession ID",
    definition: "Accession Identifier"
  } |
  {
    code: "UDI",
    display: "Universal Device Identifier",
    definition: "An identifier assigned to a device using the Unique Device Identification framework as defined by IMDRF (http://imdrf.org)."
  } |
  {
    code: "SNO",
    display: "Serial Number",
    definition: "An identifier affixed to an item by the manufacturer when it is first made, where each item has a different identifier."
  } |
  {
    code: "SB",
    display: "Social Beneficiary Identifier",
    definition: "An identifier issued by a governmental organization to a person to identify the person should they apply for or receive social services and/or benefits"
  } |
  {
    code: "PLAC",
    display: "Placer Identifier",
    definition: "An identifier for a request where the identifier is issued by the person or service making the request."
  } |
  {
    code: "FILL",
    display: "Filler Identifier",
    definition: "An identifier for a request where the identifier is issued by the person, or service, that produces the observations or fulfills the request."
  } |
  {
    code: "JHN",
    display: "Jurisdictional health number",
    definition: "Jurisdictional health number"
  }

export {
  IdentifierType
}