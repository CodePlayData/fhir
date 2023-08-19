// @filename:  ActPriority.ts

import { Override } from "../shared/Override";
import { ValueSet } from "./ValueSet";

type ActPriorityType = {
    version: '2.0.0',
    compose: {
        include: [
            {
                system: 'http://terminology.hl7.org/ValueSet/v3-ActPriority',
                concept: 
                    { code: 'A',  display: 'ASAP', definition?: 'As soon as possible, next highest priority after stat.'} |
                    { code: 'CR', display: 'callback results', definition?: "Filler should contact the placer as soon as results are available, even for preliminary results. (Was 'C' in HL7 version 2.3's reporting priority.)"} |
                    { code: 'EL', display: 'elective', definition?: 'Beneficial to the patient but not essential for survival.' } |
                    { code: 'EM', display: 'emergency', defitinion: 'An unforeseen combination of circumstances or the resulting state that calls for immediate action.'} |
                    { code: 'P', display: 'preop', definition?: 'Used to indicate that a service is to be performed prior to a scheduled surgery. When ordering a service and using the pre-op priority, a check is done to see the amount of time that must be allowed for performance of the service. When the order is placed, a message can be generated indicating the time needed for the service so that it is not ordered in conflict with a scheduled operation.' } |
                    { code: 'PRN', display: 'as needed', definition?: 'An "as needed" order should be accompanied by a description of what constitutes a need. This description is represented by an observation service predicate as a precondition.'} |
                    { code: 'R', display: 'routine', definition?: 'Routine service, do at usual work hours.' } |
                    { code: 'RR', display: 'rush reporting', definition?: 'A report should be prepared and sent as quickly as possible.' } |
                    { code: 'S', display: 'stat', definition?: 'With highest priority (e.g., emergency).' } |
                    { code: 'T', display: 'timing critical', definition?: 'It is critical to come as close as possible to the requested time (e.g., for a through antimicrobial level).' } |
                    { code: 'UD', display: 'use as directed', definition?: 'Drug is to be used as directed by the prescriber.' } |
                    { code: 'UR', display: 'urgent', definition?: 'Calls for prompt action.' } |
                    { code: 'CS', display: 'callback for scheduling', definition?: "Filler should contact the placer (or target) to schedule the service. (Was 'C' in HL7 version 2.3's TQ-priority component.)" } |
                    { code: 'CSP', display: 'callback placer for scheduling', definition?: "Filler should contact the placer to schedule the service. (Was 'C' in HL7 version 2.3's TQ-priority component.)" } |
                    { code: 'CSR', display: 'contact recipient for scheduling', definition?: "Filler should contact the service recipient (target) to schedule the service. (Was 'C' in HL7 version 2.3's TQ-priority component.)"}
            }
        ]
    }
}

/**
 * 
 *  A code or set of codes (e.g., for routine, emergency,) specifying the urgency under which the Act happened, can happen, 
 *  is happening, is intended to happen, or is requested/demanded to happen.
 * 
 *  Source: http://terminology.hl7.org/ValueSet/v3-ActPriority.
 */
type ActPriority = Override<ValueSet, ActPriorityType>;

export {
    ActPriority
}