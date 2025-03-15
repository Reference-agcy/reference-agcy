"use client";

import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@app/_components/ui/button";
import { ChangePassword } from "@app/_lib/apiChangePassword";

function ChangePasswordCard() {
  const currentPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const { mutate, isPending } = useMutation({
    mutationKey: ["change-password"],
    mutationFn: ChangePassword,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const currentPassword = currentPasswordRef.current?.value;
    const newPassword = newPasswordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    if (!currentPassword || !newPassword || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    mutate(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          setSuccess("Password changed successfully");
          if (currentPasswordRef.current) currentPasswordRef.current.value = "";
          if (newPasswordRef.current) newPasswordRef.current.value = "";
          if (confirmPasswordRef.current) confirmPasswordRef.current.value = "";
        },
        onError: (error: Error) => {
          setError(error.message || "Failed to change password");
        },
      },
    );
  };

  return (
    <section className="mx-4 w-full max-w-3xl rounded p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-semibold">Change Password</h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="currentPassword"
            className="mb-2 block text-sm font-medium"
          >
            Current Password
          </label>
          <input
            id="currentPassword"
            type="password"
            ref={currentPasswordRef}
            className="w-full rounded-xl border border-gray-300 p-2 focus:border-primary-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="newPassword"
            className="mb-2 block text-sm font-medium"
          >
            New Password
          </label>
          <input
            id="newPassword"
            type="password"
            ref={newPasswordRef}
            className="w-full rounded-xl border border-gray-300 p-2 focus:border-primary-500 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium"
          >
            Confirm New Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            ref={confirmPasswordRef}
            className="w-full rounded-xl border border-gray-300 p-2 focus:border-primary-500 focus:outline-none"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
        {success && <p className="text-sm text-green-500">{success}</p>}

        <Button
          variant="secondary"
          type="submit"
          disabled={isPending}
          className="mt-2 rounded-xl"
        >
          {isPending ? "Changing Password..." : "Change Password"}
        </Button>
      </form>
    </section>
  );
}

export default ChangePasswordCard;
