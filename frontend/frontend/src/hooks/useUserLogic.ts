import { useState } from 'react';
import type { UserType } from '../types/UserType';

export function useUserLogic() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);

  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  return {
    users,
    setUsers,
    editingUser,
    setEditingUser,
    newUsername,
    setNewUsername,
    newEmail,
    setNewEmail
  };
}