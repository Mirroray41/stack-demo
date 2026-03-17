import { User } from "./User";
import type { UserType } from "../types/UserType";

interface Props {
  users: UserType[];
  setUsers: (users: React.SetStateAction<UserType[]>) => void;
}

export function Users({ users, setUsers }: Props) {
  return (
    <div className="users">
      <h2>Current Users</h2>
      <table>
        {/* Table Head holds the column titles */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        {/* Table Body holds the generated rows */}
        <tbody>
          {users.map((user) => (
            <User
              key={user.id}
              user={user}
              users={users}
              setUsers={setUsers}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}