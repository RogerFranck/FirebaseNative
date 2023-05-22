type Action = {
  type: "CHANGE_INFO";
  payload: {
    key: string;
    value: string;
  };
};

export default (state: any, action: Action) => {
  const {
    payload: { key, value },
    type,
  } = action;

  switch (type) {
    case "CHANGE_INFO":
      return {
        ...state,
        [key]: value,
      };
    default:
      return state;
  }
};
