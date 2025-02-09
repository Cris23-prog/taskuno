import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataMap, setDataMap] = useState(new Map());
  const [nextId, setNextId] = useState(1);

  const addRecord = (record) => {
    const currentId = nextId;

    setDataMap((prevMap) => {
      const updatedMap = new Map(prevMap);
      updatedMap.set(currentId, record);
      return updatedMap;
    });

    setNextId((prevId) => prevId + 1);

    return currentId;
  };

  const removeRecord = (id) => {
    setDataMap((prevMap) => {
      const updatedMap = new Map(prevMap);
      updatedMap.delete(id);
      return updatedMap;
    });
  };

  return (
    <DataContext.Provider value={{ dataMap, addRecord, removeRecord }}>
      {children}
    </DataContext.Provider>
  );
}
