import { API_URL } from "../../env";

export interface Idates {
  workingDays: string[] | boolean[];
  startTimes: string[];
  endTimes: string[];
}

export const formatWorkingDates = (data: Idates) => {
  const { workingDays, startTimes, endTimes } = data;

  if (
    workingDays.length !== startTimes.length ||
    workingDays.length !== endTimes.length ||
    workingDays.length == 0
  ) {
    return "undefined";
  }

  const formattedWorkingDays = workingDays.map((day, index) => {
    const startTime = startTimes[index];
    const endTime = endTimes[index];

    return `{day: ${day}, startTime: ${startTime}, endTime: ${endTime}}`;
  });

  return formattedWorkingDays.join(", ");
};

export const get_meta = async () => {
  const response = await fetch(`${API_URL}/meta/`);

  if (response.ok) {
    const data = await response.json();

    return data;
  }
  return null;
};
