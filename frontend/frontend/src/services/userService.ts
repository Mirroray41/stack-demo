import type { UserType } from "../types/UserType";

const API_URL = "http://localhost:8080/api/users";

// GET - All users
export const fetchUsers = async (): Promise<UserType[]> => {
  const response = await fetch(API_URL);
  return response.json();
};

// POST - Create user
export const createUser = async (user: UserType): Promise<UserType> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

// PUT - Update user
export const updateUser = async (id: number, user: UserType): Promise<UserType> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

// DELETE - Remove user
export const deleteUser = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};