// @filename: ScheduleRepository.ts

import { Schedule } from "../core/workflow/availability/Schedule.js";

export interface ScheduleRepository {
    saveSchedule(schedule: Schedule): void
    updateSchedule(id: { [key: string]: string }, data: { [key: string]: any}): any
    deactiveSchedule(id: { [key: string]: string}): any
}