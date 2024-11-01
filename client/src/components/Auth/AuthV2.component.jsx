import { useEffect, useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, Hanko } from "@teamhanko/hanko-elements";
import { fr } from "@teamhanko/hanko-elements/i18n/fr";

const hankoApi = import.meta.env.VITE_HANKO_API_URL;

export default function HankoAuthV2() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false)
  const hanko = useMemo(() => new Hanko(hankoApi), []);

  const redirectAfterLogin = useCallback(() => {
    setLoggedIn(!loggedIn)
  }, [loggedIn]);

  useEffect(() => {
    const handleSessionCreated = () => {
      try {
        hanko.onSessionCreated(() => {
          // redirectAfterLogin();
          setLoggedIn(!loggedIn)
        });
      } catch (error) {
        console.error("Error handling session creation:", error);
      }
    };
    handleSessionCreated();
  }, [hanko, loggedIn]);

  useEffect(() => {
    register(hankoApi).then(res => console.log(res)).catch((error) => {
      console.error("Error registering Hanko:", error);
    });
  }, []);

  return (
    // @ts-ignore
    <hanko-auth />
  );
}
