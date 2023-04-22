// @filename: index.ts

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

import { InvalidCanonicalUrl } from './errors/InvalidCanonicalUrl.js';
import { InvalidCode } from './errors/InvalidCode.js';
import { InvalidDecimal } from './errors/InvalidDecimal.js';
import { InvalidIdLength } from './errors/InvalidIdLength.js';
import { InvalidInteger } from './errors/InvalidInteger.js';
import { InvalidInterger64 } from './errors/InvalidInterger64.js';
import { InvalidOid } from './errors/InvalidOid.js';
import { InvalidUuid } from './errors/InvalidUuid.js';
import { PositiveIntLessThanOne } from './errors/PositiveIntLessThanOne.js';
import { UnsignedIntLessThanZero } from './errors/UnsignedIntLessThanZero.js';

const Error = {
  InvalidCanonicalUrl,
  InvalidCode,
  InvalidDecimal,
  InvalidIdLength,
  InvalidInteger,
  InvalidInterger64,
  InvalidOid,
  InvalidUuid,
  PositiveIntLessThanOne,
  UnsignedIntLessThanZero
};

import { Account } from './admin/Account.js';
import { CareTeam } from './admin/CareTeam.js';
import { Communication } from './admin/Communication.js';
import { Device } from './admin/Device.js';
import { Group } from './admin/Group.js';
import { HealthcareService } from './admin/HealthcareService.js';
import { Location } from './admin/Location.js';
import { Organization } from './admin/Organization.js';
import { Patient } from './admin/Patient.js';
import { Practitioner } from './admin/Practitioner.js';
import { PractitionerRole } from './admin/PractitionerRole.js';
import { RelatedPerson } from './admin/RelatedPerson.js';

const Admin = {
  Account,
  CareTeam,
  Communication,
  Device,
  Group,
  HealthcareService,
  Location,
  Organization,
  Patient,
  Practitioner,
  PractitionerRole,
  RelatedPerson
};

import { CarePlan } from './clinical/careProvision/CarePlan.js';
import { ServiceRequest } from './clinical/careProvision/ServiceRequest.js';
import { DeviceRequest } from './clinical/request&response/DeviceRequest.js';
import { Condition } from './clinical/summary/Condition.js';
import { Procedure } from './clinical/summary/Procedure.js';

const Clinical = {
  CarePlan,
  ServiceRequest,
  DeviceRequest,
  Condition,
  Procedure
};

import { DocumentReference } from './diagnostics/DocumentReference.js';
import { Observation } from './diagnostics/Observation.js';

const Diagnostics = {
  DocumentReference,
  Observation
};

import { ImmunizationRecommendation } from './medications/ImmunizationRecommendation.js';
import { MedicationRequest } from './medications/MedicationRequest.js';

const Medications = {
  ImmunizationRecommendation,
  MedicationRequest
};

export { 
  Error,
  Admin,
  Clinical,
  Diagnostics,
  Medications
}

export { Binary } from './foundation/Binary.js';

export { BackboneElement } from './core/BackboneElement.js';
export { BackboneType } from './core/BackboneType.js';
export { Base } from './core/Base.js';
export { CanonicalResource } from './core/CanonicalResource.js';
export { DataType } from './core/DataType.js';
export { DomainResource } from './core/DomainResource.js';
export { FhirElement } from './core/Element.js';
export { Extension } from './core/Extension.js';
export { MetadataResource } from './core/MetadataResource.js';
export { PrimitiveType } from './core/PrimitiveType.js';
export { Resource } from './core/Resource.js';

export { Annotation } from './core/general/Annotation.js';
export { CodeableConcept, CodeableConceptSchema} from './core/general/CodeableConcept.js';
export { Coding, CodingSchema } from './core/general/Coding.js';
export { Identifier, IdentifierTypeCodes } from './core/general/Identifier.js';
export { Period } from './core/general/Period.js';

export { VirtualServiceDetail } from './core/metadata/VirtualServiceDetail.js'

export { Base64Binary } from './core/primitives/Base64Binary.js';
export { Canonical } from './core/primitives/Canonical.js';
export { Code } from './core/primitives/Code.js';
export { DateTime } from './core/primitives/DateTime.js';
export { Decimal } from './core/primitives/Decimal.js';
export { Id } from './core/primitives/Id.js';
export { Instant } from './core/primitives/Instant.js';
export { Integer } from './core/primitives/Integer.js';
export { Integer64 } from './core/primitives/Integer64.js';
export { Markdown } from './core/primitives/Markdown.js';
export { Oid } from './core/primitives/Oid.js';
export { PositiveInt } from './core/primitives/PositiveInt.js';
export { Time } from './core/primitives/Time.js';
export { UnsignedInt } from './core/primitives/UnsignedInt.js';
export { Uri } from './core/primitives/Uri.js';
export { Uuid } from './core/primitives/Uuid.js';

export { CodeableReference, CodeableReferenceSchema } from './core/special/CodeableReference.js';
export { Reference } from './core/special/Reference.js';

export { HealthcareService } from './shared/HealthcareService.js';
export { Hl7VSAppointmentReasonCodes } from './shared/Hl7VSAppointmentReasonCodes.js';
export { PracticeSettingCodeValueSet as PracticeSettingCodeValueSetType } from './shared/PracticeSettingCodeValueSet.js';
export { ServiceCategory as ServiceCategoryType } from './shared/ServiceCategory.js';
export { ServiceType } from './shared/ServiceType.js';

export { ActPriority as ActPriorityValue } from './values/ActPriority.js';
export { AppointmentCancellationReason } from './values/AppointmentCancellationReason.js';
export { AppointmentReasonCodes } from './values/AppointmentReasonCodes.js';
export { AppointmentRecurrenceType } from './values/AppointmentRecurrenceType.js';
export { AppointmentResponseStatus } from './values/AppointmentResponseStatus.js';
export { AppointmentStatus } from './values/AppointmentStatus.js';
export { DaysOfWeek } from './values/DaysOfWeek.js';
export { IANATimezones } from './values/IANATimezones.js';
export { IdentifierType } from './values/IdentifierType.js';
export { IdentifierUse } from './values/IdentifierUse.js';
export { ParticipantType } from './values/ParticipantType.js';
export { ParticipationStatus } from './values/ParticipationStatus.js';
export { PracticeSettingCodeValueSet } from "./values/PracticeSettingCodeValueSet.js";
export { ResourceTypeValueSet } from "./values/ResourceTypeValueSet.js";
export { ServiceCategory } from "./values/ServiceCategory.js";
export { ServiceType as ServiceTypeValue } from "./values/ServiceType.js";
export { SlotStatus } from "./values/SlotStatus.js";
export { ValueSet } from "./values/ValueSet.js";
export { VirtualServiceType } from "./values/VirtualServiceType.js";
export { WeekOfMonth } from "./values/WeekOfMonth.js";

export { Appointment, AppointmentSchemaBase, AppointmentSchemaR4B, AppointmentSchemaR5 } from './workflow/scheduling/appointments/Appointment.js';
export { AppointmentResponse, AppointmentReponseSchemaR4B, AppointmentResponseSchemaBase, AppointmentReponseSchemaR5 } from './workflow/scheduling/appointments/AppointmentResponse.js';
export { MonthlyTemplate } from './workflow/scheduling/appointments/structs/MonthlyTemplate.js';
export { Participant } from './workflow/scheduling/appointments/structs/Participant.js';
export { RecurrenceTemplate } from './workflow/scheduling/appointments/structs/RecurrenceTemplate.js';
export { WeeklyTemplate } from './workflow/scheduling/appointments/structs/WeeklyTemplate.js';
export { YearlyTemplate } from './workflow/scheduling/appointments/structs/YearlyTemplate.js';
export { ActPriority } from './workflow/scheduling/appointments/types/ActPriority.js';
export { AppointmentCancellationReason as AppointmentCancellationReasonType } from './workflow/scheduling/appointments/types/AppointmentCancellationReason.js';
export { AppointmentRecurrenceType as AppointmentRecurrenceTypes} from './workflow/scheduling/appointments/types/AppointmentRecurrenceType.js';
export { DaysOfWeek as DaysOfWeekType } from './workflow/scheduling/appointments/types/DaysOfWeek.js';
export { EncounterReasonCodesv4, EncounterReasonCodesv5 } from './workflow/scheduling/appointments/types/EncounterReasonCodes.js';
export { ParticipantType as ParticipantTypes } from './workflow/scheduling/appointments/types/ParticipantType.js';
export { WeekOfMonth as WeekOfMonthType } from './workflow/scheduling/appointments/types/WeekOfMonth.js';
export { Schedule, ScheduleSchemaR4B, ScheduleSchemaR5 } from './workflow/scheduling/availability/Schedule.js';
export { Slot, SlotBase, SlotSchemaR4B, SlotSchemaR5 } from './workflow/scheduling/availability/Slot.js';
