import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

export default function SignOutControl({ navigation }: any) {
  const { onSignOut } = useAuth(navigation);

  useEffect(() => {
    onSignOut();
  }, []);

  return <></>;
}
