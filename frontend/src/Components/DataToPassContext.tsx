/*

This was used in one of my several attempts to send a div from ModuleSection -> Campaigns.
I patchworked it together, but i'm keeping it just in case it's needed again since it half-worked.




import React, { createContext, useContext } from "react";

interface DataToPass {
  uri: string;
  title: string;
  description: string;
}

interface DataToPassContextStructure {
  data: DataToPass | null;
  setData: (data: DataToPass | null) => void;
}

const DataToPassContext = createContext<DataToPassContextStructure>({
  data: null,
  setData: () => {},
});

export const useDataToPass = () => useContext(DataToPassStructure);

export const DataToPassProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<DataToPass | null>(null);
  
  return (
    <DataToPassContext.Provider value={{ data, setData }}>
      {children}
    </DataToPassContext.Provider>
  );
};


 */
