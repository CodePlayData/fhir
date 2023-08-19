// @filename: Annotation.ts

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

import { Organization } from "../../admin/Organization.js";
import { Patient } from "../../admin/Patient.js";
import { Practitioner } from "../../admin/Practitioner.js";
import { PractitionerRole } from "../../admin/PractitionerRole";
import { RelatedPerson } from "../../admin/RelatedPerson";
import { DateTime } from "../primitives/DateTime.js";
import { Markdown } from "../primitives/Markdown.js";
import { Reference } from "../special/Reference.js";

class Annotation {
    constructor(
        readonly text: Markdown,
        readonly author?: Reference<Practitioner | PractitionerRole | Patient | RelatedPerson | Organization>,
        readonly time?: DateTime
    ) {

    }
}

export {
    Annotation
}