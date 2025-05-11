/**
 * Represents the structure of the login response from the backend.
 */
export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
    userId: number;
  };
}
