import { useState } from "react";

export default function useForm(initialState: any) {
  const [state, setstate] = useState(initialState || null);

  const handleChangue = (key: string, value: string) => {
    setstate((prev: any) => ({ ...prev, [key]: value }));
  };

  return {
    state,
    handleChangue,
  };
}
