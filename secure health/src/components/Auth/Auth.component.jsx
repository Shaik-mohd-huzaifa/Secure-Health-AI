import { useEffect, useState } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = "https://b0555b0b-17c2-49cc-ad69-0cbf5f68c0bb.hanko.io";

export default function HankoAuth() {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    register(hankoApi)
      .then(() => setIsRegistered(true))
      .catch((error) => {
        console.error("Hanko registration error:", error);
      });
  }, []);

  return isRegistered ? <hanko-auth /> : <p>Loading authentication...</p>;
}
