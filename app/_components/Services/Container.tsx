import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="container gap-[1.375rem] xl:gap-12">{children}</div>;
}

export default Container;
