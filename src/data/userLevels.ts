interface UserLevel {
  requiredExp: number;
}

export const userLevels: { [key: number]: UserLevel } = {
  1: { requiredExp: 100 },
  2: { requiredExp: 300 },
  3: { requiredExp: 700 },
  4: { requiredExp: 1500 },
  5: { requiredExp: 3000 },
  6: { requiredExp: 6000 },
  7: { requiredExp: 10000 },
  8: { requiredExp: 15000 },
  9: { requiredExp: 20000 },
  10: { requiredExp: 30000 },
};

// export const userLevelArray = Object.entries(userLevels).map(
//   ([level, levelData]) => ({
//     level: Number(level),
//     ...levelData,
//   })
// );
