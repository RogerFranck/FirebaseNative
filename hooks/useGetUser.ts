import { useContext } from "react";
import { GeneralContext } from "../context/generalContext";

export default function useGetUser() {
  const { user } = useContext(GeneralContext);
  return { user };
}
