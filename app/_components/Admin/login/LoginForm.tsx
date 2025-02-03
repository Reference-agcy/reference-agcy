"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Button } from "../../ui/button";

type LoginErrors = {
  email?: string;
  password?: string;
};

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<LoginErrors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const route = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errors?.email) {
      setErrors({ ...errors, email: "" });
    }
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errors?.password) {
      setErrors({ ...errors, password: "" });
    }
    setPassword(e.target.value);
  };

  const isValidForm = () => {
    const newErrors: LoginErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidForm()) return;

    submitData({ email, password });
  };

  const submitData = async (data: { email: string; password: string }) => {
    try {
      setLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resData = await response.json();

      if (response.ok) {
        document.cookie = `adminToken=${resData.token};`;
        toast.success("Login successful");
        route.push("/admin/blog");
      } else {
        toast.error(resData.message);
      }
    } catch (error) {
      console.error("An unexpected error happened:", error);
      toast.error("An unexpected error happened");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-8 rounded-xl border border-primary-300 p-5 xl:w-1/2"
    >
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-2 font-semibold">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Enter your email"
          className={`flex h-10 w-full rounded-xl border px-3 py-1 text-base text-gray-900 transition-colors placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring-1 ${
            errors.email
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-primary-300 focus-visible:ring-primary-500"
          }`}
          value={email}
          onChange={handleEmailChange}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password" className="mb-2 font-semibold">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className={`flex h-10 w-full rounded-xl border px-3 py-1 text-base text-gray-900 transition-colors placeholder:text-gray-300 focus-visible:outline-none focus-visible:ring-1 ${
            errors.password
              ? "border-red-500 focus-visible:ring-red-500"
              : "border-primary-300 focus-visible:ring-primary-500"
          }`}
          value={password}
          onChange={handlePasswordChange}
        />
        {errors.password && (
          <span className="text-sm text-red-500">{errors.password}</span>
        )}
      </div>

      <Button
        className="mx-auto w-1/2 rounded-xl text-base"
        type="submit"
        disabled={loading}
      >
        Login
      </Button>
    </form>
  );
}
