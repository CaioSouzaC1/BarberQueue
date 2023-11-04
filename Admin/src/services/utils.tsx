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
    workingDays.length === 0
  ) {
    return [];
  }

  const formattedWorkingDays = workingDays.map((day, index) => ({
    day,
    startTime: startTimes[index],
    endTime: endTimes[index],
  }));

  return formattedWorkingDays;
};


export const get_meta = async () => {
  const response = await fetch(`${API_URL}/meta/`);

  if (response.ok) {
    const data = await response.json();

    return data;
  }
  return null;
};
