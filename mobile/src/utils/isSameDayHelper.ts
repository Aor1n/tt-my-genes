import {isSameDay} from 'date-fns';

type Day = string | Date;
export const isSameDayHelper = (day: Day, dayToCompare: Day) => {
  const dayAsDate = day ? new Date(day) : new Date();

  const dayToCompareAsDate = new Date(dayToCompare);

  return isSameDay(dayAsDate, dayToCompareAsDate);
};
