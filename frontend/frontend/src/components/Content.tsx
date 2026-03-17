import { CreateUser } from "./CreateUser";
import { Users } from "./Users";
import type { UserType } from "../types/UserType";

interface Props {
  users: UserType[];
  setUsers: (users: React.SetStateAction<UserType[]>) => void;
}

export function Content({ users, setUsers}:Props) {
  return (
    <div className="content">
      <h1>User Management</h1>
      <div className="divider"></div>
      <CreateUser setUsers={setUsers} />
      <Users setUsers={setUsers} users={users} />
    </div>
  );
}
