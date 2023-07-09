// @filename: AppointmentCancellationReason.ts

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

import { Override } from "../shared/Override.js";
import { ValueSet } from "./ValueSet.js"

type AppointmentCancellationReasonType = {
    version: '0.1.0',
    compose: {
        include: [
            {
                system: 'http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason',
                concept: 
                    { code: 'pat',  display: 'Patient'                                                   } |
                    { code: 'pat-crs',  display: 'Patient: Canceled via automated reminder system'       } |
                    { code: 'pat-cpp', display: 'Patient: Canceled via Patient Portal'                   } |
                    { code: 'pat-dec', display: 'Patient: Deceased'                                      } |
                    { code: 'pat-fb', display: 'Patient: Feeling Better'                                 } |
                    { code: 'pat-lt', display: 'Patient: Lack of Transportation'                         } |
                    { code: 'pat-mt', display: 'Patient: Member Terminated'                              } |
                    { code: 'pat-mv', display: 'Patient: Moved'                                          } |
                    { code: 'pat-preg', display: 'Patient: Pregnant'                                     } |
                    { code: 'pat-swl', display: 'Patient: Scheduled from Wait List'                      } |
                    { code: 'pat-ucp', display: 'Patient: Unhappy/Changed Provider'                      } |
                    { code: 'prov', display: 'Provider'                                                  } |
                    { code: 'prov-pers', display: 'Provider: Personal'                                   } |
                    { code: 'prov-dch', display: 'Provider: Discharged'                                  } |
                    { code: 'prov-edu', display: 'Provider: Edu/Meeting'                                 } |
                    { code: 'prov-hosp', display: 'Provider: Hospitalized'                               } |
                    { code: 'prov-labs', display: 'Provider: Labs Out of Acceptable Range'               } |
                    { code: 'prov-mri', display: 'Provider: MRI Screening Form Marked Do Not Proceed'    } |
                    { code: 'prov-onc', display: 'Provider: Oncology Treatment Plan Changes'             } |
                    { code: 'maint', display: 'Equipment Maintenance/Repair'                             } |
                    { code: 'meds-inc', display: 'Prep/Med Incomplete'                                   } |
                    { code: 'other', display: 'Other'                                                    } |
                    { code: 'oth-cms', display: 'Other: CMS Therapy Cap Service Not Authorized'          } |
                    { code: 'oth-err', display: 'Other: Error'                                           } |
                    { code: 'oth-fin', display: 'Other: Financial'                                       } |
                    { code: 'oth-iv', display: 'Other: Improper IV Access/Infiltrate IV'                 } |
                    { code: 'oth-int', display: 'Other: No Interpreter Available'                        } |
                    { code: 'oth-mu', display: 'Other: Prep/Med/Results Unavailable'                     } |
                    { code: 'oth-room', display: 'Other: Room/Resource Maintenance'                      } |
                    { code: 'oth-oerr', display: 'Other: Schedule Order Error'                           } |
                    { code: 'oth-swie', display: 'Other: Silent Walk In Error'                           } |
                    { code: 'oth-weath', display: 'Other: Weather'                                       }

            }
        ]
    }
};

/**
 *  This example value set defines a set of reasons for the cancellation of an appointment.
 * 
 *  Source: http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason.
 */
type AppointmentCancellationReason = Override<ValueSet, AppointmentCancellationReasonType>;

export {
    AppointmentCancellationReason
}
