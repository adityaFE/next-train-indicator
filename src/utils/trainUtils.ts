export interface Train {
  destination: string;
  arrivalIn: number;
}

const schedules = [
  { destination: "Central Station", frequency: 20 },
  { destination: "Circular", frequency: 60 },
  { destination: "North Square", frequency: 12, start: 420, end: 1320 },
  { destination: "West Market", frequency: 6, start: 330, end: 90 },
];

export const getUpcomingTrains = (virtualTime: number): Train[] => {
  return schedules
      .flatMap(({ destination, frequency, start = 0, end = 1440 }) => {
          const arrivals: Train[] = [];
          for (let t = start; t < end; t += frequency) {
              if (t >= virtualTime && t < virtualTime + 15) {
                  arrivals.push({ destination, arrivalIn: t - virtualTime});
              }
          }
          return arrivals;
      })
      .sort((a, b) => a.arrivalIn - b.arrivalIn)
      .slice(0, 2);
};
