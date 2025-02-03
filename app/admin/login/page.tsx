import Image from "next/image";
import LoginForm from "@app/_components/Admin/login/LoginForm";

export default function Login() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-8 px-8">
      <Image
        src="/images/logo.svg"
        alt="logo"
        className="w-[250px]"
        width={250}
        height={46}
      />

      <LoginForm />
    </main>
  );
}
