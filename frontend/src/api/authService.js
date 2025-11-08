
import api from "./api";

/**
 * Llamada al backend para hacer login.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<{ accessToken: string, expiresIn?: number, user: any }>}
 */
export const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  // Según tu DTO, la respuesta será { accessToken, expiresIn?, user }
  return res.data;
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};
