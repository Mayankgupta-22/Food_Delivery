import { createContext } from "react";

const UserConetxt = createContext({
    loggedInUser: "Default user",
});

export default UserConetxt;