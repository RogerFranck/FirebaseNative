import { GeneralContext, intitalState } from "./generalContext";
import { useReducer } from "react";
import generalReducer from "./generalReducer";

const GeneralState = ({ children }: any) => {
  const [state, dispatch] = useReducer(generalReducer, intitalState);

  const changeInfo = (key: string, value: any) => {
    dispatch({
      type: "CHANGE_INFO",
      payload: {
        key,
        value,
      },
    });
  };

  return (
    <GeneralContext.Provider value={{ ...state, changeInfo }}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
