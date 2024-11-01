import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = "https://b0555b0b-17c2-49cc-ad69-0cbf5f68c0bb.hanko.io";
const hanko = new Hanko(hankoApi);

async function getUser(){
    const {id, email} = await hanko.user.getCurrent();
    console.log(`user-id: ${id}, email: ${email}`);
}

export default getUser