import { useUserLogic } from "../hooks/useUserLogic";
import * as userService from "../services/userService";
import type { UserType } from "../types/UserType";

interface Props {
  setUsers: (users: React.SetStateAction<UserType[]>) => void;
}

export function CreateUser({ setUsers }:Props) {
  const { newUsername, setNewUsername, newEmail, setNewEmail } =
    useUserLogic();

  const handleAddSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newUsername.trim() || !newEmail.trim()) return;

    try {
      const newUser = { username: newUsername, email: newEmail };

      const savedUser = await userService.createUser(newUser);

      setUsers((prevUsers) => [...prevUsers, savedUser]);

      setNewUsername("");
      setNewEmail("");
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };
  return (
    <section>
      <h2>Add New User</h2>
      <form onSubmit={handleAddSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          required
        />
        <button type="submit">Add User</button>
      </form>
    </section>
  );
}
