import React, { useCallback, useEffect, useState } from "react";

import useAppStore from "@/store";

export const AppEngineContext = React.createContext({
  timer: 0,
  setTimer: (timer: number) => {},
  clearTimer: () => {},
});

export const AppEngineProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [timer, setTimer] = useState(0);
  const mineData = useAppStore((state) => state.mineData);
  const updateRawCount = useAppStore((state) => state.updateMineDataRawCount);

  const runEngine = useCallback(() => {
    for (const mineId in mineData) {
      const { level, rawCount, capacity } = mineData[mineId];
      const idNumber = parseInt(mineId, 10);
      if (level >= 1) {
        if (rawCount < capacity) {
          const space =
            rawCount + level > capacity ? capacity - rawCount : level;

          updateRawCount(idNumber, space);
        }
      }
    }
  }, [mineData]);

  useEffect(() => {
    const interval = setInterval(() => {
      runEngine();
    }, 1000);
    return () => clearInterval(interval);
  }, [runEngine]);

  return (
    <AppEngineContext.Provider
      value={{ timer, setTimer, clearTimer: () => clearInterval(timer) }}
    >
      {children}
    </AppEngineContext.Provider>
  );
};
