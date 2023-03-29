// @filename: ReferenceType.ts

/**
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

type ResourceType = 
    'Resource'                        |
    'Binary'                          |
    'Bundle'                          |
    'DomainResource'                  |
    'Account'                         |
    'ActivityDefinition'              |
    'AdministrableProductDefinition'  |
    'AdverseEvent'                    |
    'AllergyIntolerance'              |
    'Appointment'                     |
    'AppointmentResponse'             |
    'AuditEvent'                      |
    'Basic'                           |
    'BiologicallyDerivedProduct'      |
    'BodyStructure'                   |
    'CapabilityStatement'             |
    'CarePlan'                        |
    'CareTeam'                        |
    'CatalogEntry'                    |
    'ChargeItem'                      |
    'ChargeItemDefinition'            |
    'Citation'                        |
    'Claim'                           |
    'ClaimResponse'                   |
    'ClinicalImpression'              |
    'ClinicalUseDefinition'           |
    'CodeSystem'                      |
    'Communication'                   |
    'CommunicationRequest'            |
    'CompartmentDefinition'           |
    'Composition'                     |
    'ConceptMap'                      |
    'Condition'                       |
    'Consent'                         |
    'Contract'                        |
    'Coverage'                        |
    'CoverageEligibilityRequest'      |
    'CoverageEligibilityResponse'     |
    'DetectedIssue'                   |
    'Device'                          |
    'DeviceDefinition'                |
    'DeviceMetric'                    |
    'DeviceRequest'                   |
    'DeviceUseStatement'              |
    'DiagnosticReport'                |
    'DocumentManifest'                |
    'DocumentReference'               |
    'Encounter'                       |
    'Endpoint'                        |
    'EnrollmentRequest'               |
    'EnrollmentResponse'              |
    'EpisodeOfCare'                   |
    'EventDefinition'                 |
    'Evidence'                        |
    'EvidenceReport'                  |
    'EvidenceVariable'                |
    'ExampleScenario'                 |
    'ExplanationOfBenefit'            |
    'FamilyMemberHistory'             |
    'Flag'                            |
    'Goal'                            |
    'GraphDefinition'                 |
    'Group'                           |
    'GuidanceResponse'                |
    'HealthcareService'               |
    'ImagingStudy'                    |
    'Immunization'                    |
    'ImmunizationEvaluation'          |
    'ImmunizationRecommendation'      |
    'ImplementationGuide'             |
    'Ingredient'                      |
    'InsurancePlan'                   |
    'Invoice'                         |
    'Library'                         |
    'Linkage'                         |
    'List'                            |
    'Location'                        |
    'ManufacturedItemDefinition'      |
    'Measure'                         |
    'MeasureReport'                   |
    'Media'                           |
    'Medication'                      |
    'MedicationAdministration'        |
    'MedicationDispense'              |
    'MedicationKnowledge'             |
    'MedicationRequest'               |
    'MedicationStatement'             |
    'MedicinalProductDefinition'      |
    'MessageDefinition'               |
    'MessageHeader'                   |
    'MolecularSequence'               |
    'NamingSystem'                    |
    'NutritionOrder'                  |
    'NutritionProduct'                |
    'Observation'                     |
    'ObservationDefinition'           |
    'OperationDefinition'             |
    'OperationOutcome'                |
    'Organization'                    |
    'OrganizationAffiliation'         |
    'PackagedProductDefinition'       |
    'Patient'                         |
    'PaymentNotice'                   |
    'PaymentReconciliation'           |
    'Person'                          |
    'PlanDefinition'                  |
    'Practitioner'                    |
    'PractitionerRole'                |
    'Procedure'                       |
    'Provenance'                      |
    'Questionnaire'                   |
    'QuestionnaireResponse'           |
    'RegulatedAuthorization'          |
    'RelatedPerson'                   |
    'RequestGroup'                    |
    'ResearchDefinition'              |
    'ResearchElementDefinition'       |
    'ResearchStudy'                   |
    'ResearchSubject'                 |
    'RiskAssessment'                  |
    'Schedule'                        |
    'SearchParameter'                 |
    'ServiceRequest'                  |
    'Slot'                            |
    'Specimen'                        |
    'SpecimenDefinition'              |
    'StructureDefinition'             |
    'StructureMap'                    |
    'Subscription'                    |
    'SubscriptionStatus'              |
    'SubscriptionTopic'               |
    'Substance'                       |
    'SubstanceDefinition'             |
    'SupplyDelivery'                  |
    'SupplyRequest'                   |
    'Task'                            |
    'TerminologyCapabilities'         |
    'TestReport'                      |
    'TestScript'                      |
    'ValueSet'                        |
    'VerificationResult'              |
    'VisionPrescription'              |
    'Parameters'

export {
    ResourceType
}