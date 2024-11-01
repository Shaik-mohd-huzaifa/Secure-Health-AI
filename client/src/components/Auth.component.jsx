import { useEffect, useState } from "react";
import { register } from "@teamhanko/hanko-elements";
import getUser from "./getCurrentUSer";

const hankoApi = "https://b0555b0b-17c2-49cc-ad69-0cbf5f68c0bb.hanko.io";

export default function HankoAuth() {
  useEffect(() => {
    async function signIn(){
      try{
        register(hankoApi)
        await getUser()
      }catch(error){
          console.error("Hanko registration error:", error);
        };
    } 
    signIn();
  }, []);

  return (
    <div>
  <hanko-auth />
  </div>
  );
}
