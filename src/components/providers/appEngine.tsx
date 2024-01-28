import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "@/store/hooks";
import { updateMineDataRawCount } from "@/store/userReducer";

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
  const dispatch = useDispatch();
  const { mineData } = useAppSelector((state) => state.user);

  const runEngine = useCallback(() => {
    for (const mineId in mineData) {
      const { level, rawCount, capacity } = mineData[mineId];
      const idNumber = parseInt(mineId, 10);
      if (level >= 1) {
        if (rawCount < capacity) {
          const space =
            rawCount + level > capacity ? capacity - rawCount : level;

          dispatch(
            // eslint-disable-next-line prettier/prettier
            updateMineDataRawCount({ mineId: idNumber, quantity: space })
          );
        }
      }
    }
  }, [dispatch, mineData]);

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
