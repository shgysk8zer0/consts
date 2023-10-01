import * as MIMES from '@shgysk8zer0/consts/mimes.js';
import * as EXTS from '@shgysk8zer0/consts/exts.js';
import * as STATUS from '@shgysk8zer0/consts/status.js';
import * as STATUS_TEXT from '@shgysk8zer0/consts/status-text.js';
import { SECONDS, MINUTES, HOURS, DAYS, WEEKS, YEARS, days as DAY_CONSTS } from '@shgysk8zer0/consts/date.js';
export * as NAMESPACES from '@shgysk8zer0/consts/namespaces.js';
export * as STATES from '@shgysk8zer0/consts/states.js';

export const HTTP = { STATUS, STATUS_TEXT };
export const FILE = { MIMES, EXTS };
export const DURATION = { SECONDS, MINUTES, HOURS, DAYS, WEEKS, YEARS };
export { DAY_CONSTS };
