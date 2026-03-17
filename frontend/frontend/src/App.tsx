import * as userService from "./services/userService";
import { useEffect } from "react";
import { useUserLogic } from "./hooks/useUserLogic";
import { SideBar } from "./components/SideBar";

import { Fragment } from "react";
import { Content } from "./components/Content";

function App() {
  const { setUsers, users } = useUserLogic();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await userService.fetchUsers(); 
        setUsers(data); 
      } catch (error) {
        console.error("Failed to load users on mount:", error);
      }
    };

    loadData();
  }, []); 

  return (
    <Fragment>
      <SideBar />
      <Content users={users} setUsers={setUsers} />
    </Fragment>
  );
}

export default App;
