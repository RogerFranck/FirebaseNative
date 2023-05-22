import { createContext } from "react";

export const intitalState = {
  user: null,
  changeInfo: (key: string, value: any) => {},
};

export const GeneralContext = createContext(intitalState);
