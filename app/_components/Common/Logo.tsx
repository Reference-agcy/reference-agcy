import Image from "next/image";
import Link from "next/link";
import LogoDarkImage from "@/public/images/logo-dark.svg";
import LogoImage from "@/public/images/logo.svg";
import { cn } from "@app/_lib/utils";

type Props = {
  className?: string;
};

export default function Logo({ className }: Props) {
  return (
    <Link href="/" className="">
      <Image
        src={LogoImage}
        alt="Logo"
        className={cn("dark:hidden", className)}
      />
      <Image
        src={LogoDarkImage}
        alt="Logo"
        className={cn("hidden dark:block", className)}
      />
    </Link>
  );
}
