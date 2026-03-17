import type { UserType } from "../types/UserType";
import { useUserLogic } from "../hooks/useUserLogic";
import * as userService from "../services/userService";

interface Props {
  user: UserType;
  users: UserType[];
  setUsers: (users: React.SetStateAction<UserType[]>) => void;
}

export function User({ user, users, setUsers }: Props) {
  const { editingUser, setEditingUser } = useUserLogic();

  const handleDelete = async (id: number) => {
    await userService.deleteUser(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleUpdateSubmit = async () => {
    if (!editingUser || !editingUser.id) return;

    try {
      const updatedUser = await userService.updateUser(
        editingUser.id,
        editingUser
      );
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );
      setEditingUser(null);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <tr>
      {editingUser?.id === user.id ? (
        /* --- EDIT MODE --- */
        <>
          <td>
            <input
              type="text"
              value={editingUser!.username}
              onChange={(e) =>
                setEditingUser({
                  ...editingUser!,
                  username: e.target.value,
                })
              }
              required
            />
          </td>
          <td>
            <input
              type="email"
              value={editingUser!.email}
              onChange={(e) =>
                setEditingUser({ ...editingUser!, email: e.target.value })
              }
              required
            />
          </td>
          <td>
            {/* Trigger the save function directly on click */}
            <button onClick={handleUpdateSubmit}>Save</button>
            <button className="cancel" onClick={() => setEditingUser(null)}>Cancel</button>
          </td>
        </>
      ) : (
        /* --- READ MODE --- */
        <>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <button onClick={() => setEditingUser(user)}>Edit</button>
            <button className="delete" onClick={() => handleDelete(user.id!)}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
}