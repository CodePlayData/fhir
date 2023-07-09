//@filename: Address.ts

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

import { PostalCodeIsRequired } from "../../errors/PostalCodeIsRequired.js";
import { AddressType } from "../../values/AddressType.js";
import { AddressUse } from "../../values/AddressUse.js";
import { ValueSet } from "../../values/ValueSet.js";
import { DataType } from "../DataType.js";
import { Code } from "../primitives/Code.js";
import { Period } from "./Period.js";

class Address<
    AddressUseVS extends ValueSet = AddressUse, 
    AddressTypeVS extends ValueSet = AddressType
> extends DataType {
    
    readonly use?: Code<string>;
    readonly type?: Code<string>;
    readonly period?: Period;

    constructor(
        use?: AddressUseVS['compose']['include']['0']['concept']['code'],
        type?: AddressTypeVS['compose']['include']['0']['concept']['code'],
        readonly text?: string,
        readonly line?: string[],
        readonly city?: string,
        readonly district?: string,
        readonly state?: string,
        readonly postalCode?: string,
        readonly country?: string,
        period?: {
            start: Date,
            end: Date
        }
    ) {
        super();
        this.use = use ? new Code(use) : undefined;
        this.type = type ? new Code(type) : undefined;
        this.period = period ? new Period(period.start, period.end) : undefined;

        if(this.type === 'postal' && !this.postalCode) {
            throw new PostalCodeIsRequired();
        }
    }
}

export {
    Address
}