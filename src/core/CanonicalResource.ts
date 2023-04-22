// @filename: CanonicalResource.ts

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

import { Uri } from "./primitive/Uri.js"

interface CanonicalResource {
    readonly url?: Uri
    readonly identifier?: any[]
    readonly version?: string
    readonly versionAlgorithm?: any
    readonly name?: string
    readonly title?: string
    readonly status: any
    readonly experimental?: boolean 
    readonly date?: any
    readonly publisher?: string
    readonly contact?: any[]
    readonly description?: string
    readonly useContext?: any[]
    readonly jurisdiction?: any
    readonly purpose?: any
    readonly copyright?: any
    readonly copyrightLabel?: string
}

export {
    CanonicalResource
}