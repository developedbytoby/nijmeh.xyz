// copied from the source code of alistair.sh <3 thanks ali
const bday = new Date("1 June 2008");
const ageMilliseconds = Date.now() - bday.getTime();

export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

export const age = ageMilliseconds / YEAR;
