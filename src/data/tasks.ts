interface UserTask {
  id: number;
  name: string;
  description: string;
  exp: number;
  reward: {
    materials: {
      [key: number]: number;
    };
    money?: number;
  };
}

export const userTasks: { [key: number]: UserTask } = {
  1: {
    id: 1,
    name: "Madenciliği ilk adım.",
    description: "Kolemanit madenini satın al.",
    exp: 20,
    reward: {
      materials: {
        1: 100,
      },
      money: 100,
    },
  },
  2: {
    id: 2,
    name: "İlk ticaret.",
    description: "Kolemanit madeninden 1000 adet kolemanit sat.",
    exp: 20,
    reward: {
      materials: {
        1: 200,
      },
      money: 200,
    },
  },
};
