import { adminApi } from "./adminApi";

interface ChangePasswordParams {
  currentPassword: string;
  newPassword: string;
}

export const ChangePassword = async ({
  currentPassword,
  newPassword,
}: ChangePasswordParams) => {
  return adminApi<{ message: string }>("api/auth/change-password", {
    method: "POST",
    body: JSON.stringify({ currentPassword, newPassword }),
  });
};
