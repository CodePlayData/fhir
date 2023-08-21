// @filename: Schedule.ts

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

import { Schedule as ScheduleBase } from "../../core/index.js";
import { ScheduleEndsBeforeStarts } from "../../error/ScheduleEndsBeforeStarts.js";
import { ScheduleNewEndIsBeforePriorEnd } from "../../error/ScheduleNewEndIsBeforePriorEnd.js";
import { Bookable } from "./Bookable.js";
import { ScheduleUpdateOutput } from "./ScheduleUpdateOutput.js";
import { ScheduleOptions } from "./ScheduleOptions.js";

class Schedule extends ScheduleBase {

    private _actors!: Bookable[];
    private readonly _start!: Date;
    private _end!: Date;

    constructor(
        readonly actors: Bookable[], 
        readonly period: {
            start: Date,
            end: Date
        },
        readonly options?: ScheduleOptions
    ) {

        super({
            actor: actors,
            active: Schedule.isActive(period),
            planningHorizon: period,
            name: options?.name,
            comment: options?.comment,
            serviceCategory: options?.serviceCategory ?  {
                display: options?.serviceCategory 
            } : undefined,
            serviceType: options?.serviceType ? options.serviceType.map((i) => {
                return {
                    concept: {
                        display: i
                    }
                }
            }) : undefined,
            specialty: options?.specialty ? options.specialty.map((i) => {
                return {
                    display: i
                }
            }) : undefined
        });
        this._actors = actors;
        this._start = period.start;
        this._end = period.end;
    }

    /**
     *  The method that is called by JSON.stringify. It must be public to works with JSON class 
     *  however you must avoid use directly.
     *  @returns
     */
    toJSON() {
        return {
            resourceType: this.resourceType,
            identifier: this.identifier,
            active: this.active,
            serviceCategory: this.serviceCategory,
            serviceType: this.serviceType,
            specialty: this.specialty,
            actor: this.actor,
            planningHorizon: this.planningHorizon,
            comment: this.comment,
            name: this.name
        }
    }

    /**
     *  It returns whose this schedule is for.
     */
    get whose() : Bookable[] {
        return this._actors
    }

    /**
     *  It returns when this schedule initiates.
     */
    get start() {
        return this._start.toString()
    }

    /**
     *  It returns when this schedule ends.
     */
    get end() {
        return this._end.toString()
    }

    /**
     *  Receives a Schedule to be extended and returns one schedule with the end date
     *  setted to now (-lagFromToday) and a new one with the end date setted to the new date.
     *  @param schedule @type { Schedule } - The schedule that should be extended.
     *  @param newEnd @type { string } - The new DateString to be set as end.
     *  @param offset @type { number } - The time that should be subtracted from today to be setted
     *         as end from the prior Data structure.
     *  @returns 
     */
    static extend(schedule: Schedule, newEnd: string, offset: number = 200): ScheduleUpdateOutput {
        const newPeriod = { start: schedule._start, end: new Date(newEnd) };
        
        if(schedule._end.getTime() < schedule._start.getTime()) {
            throw new ScheduleEndsBeforeStarts();
        }

        if(new Date(newEnd).getTime() < schedule._end.getTime()) {
            throw new ScheduleNewEndIsBeforePriorEnd();
        }

        return {
            prior: new Schedule(schedule.actors, { start: schedule._start, end: new Date(Date.now() - offset) }, schedule.options),
            current: new Schedule(schedule.actors, newPeriod, schedule.options)
        }
    }

    /**
     *  Check if some schedule is still active.
     *  @param period @type {{ start: Date, end: Date}} - The period to be validate.
     *  @param offset @type { number } - The time to be considered as still valid from today.
     *  @returns 
     */
    static isActive(period: { start: Date, end: Date }, offset: number = 750): boolean {
        const today = new Date(Date.now() + offset);
        const isStartBeforeThanToday = period.start.getTime() < today.getTime();
        const isEndPosteriorThanToday = period.end.getTime() > today.getTime();

        return isStartBeforeThanToday && isEndPosteriorThanToday ? true : false
    }

    /**
     *  Adds a actor in some schedule.
     *  @param schedule @type { Schedule } - The schedule to be added the new actor.
     *  @param actor @type { Bookable } - The actor to be inserted.
     *  @param offset @type { number } - The offset from now to be setted the end date in the prior data
     *      structure.
     *  @returns 
     */
    static addActor(schedule: Schedule, actor: Bookable, offset: number = 200): ScheduleUpdateOutput {
        let allActors = schedule.actors;
        allActors.push(actor);

        return {
            prior: new Schedule(allActors, { start: schedule._start, end: new Date(Date.now() - offset) }, schedule.options),
            current: new Schedule(schedule.actors, schedule.period, schedule.options)
        }
    }

    /**
     *  Changes another propertie that is not the active, actor or planningHorizon.
     *  @param schedule @type { Schedule } - The schedule to change some option propertie.
     *  @param newOptions @type { ScheduleOptions } - The new options, be aware that is not incremental,
     *      this will substitute the old options.
     *  @param offset @type { number } - The offset from now to be setted the end date in the prior data
     *      structure.
     *  @returns 
     */
    static changeOptions(schedule: Schedule, newOptions:  { name?: string, comment?: string }, offset: number = 750) {
        return {
            prior: new Schedule(schedule.actors, { start: schedule._start, end: new Date(Date.now() - offset) }, schedule.options),
            current: new Schedule(schedule.actors, schedule.period, newOptions)
        }
    }
}

export {
    Schedule
}