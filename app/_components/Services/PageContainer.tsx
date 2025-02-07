import { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

function PageContainer({ children }: PageContainerProps) {
  return <main className="mb-[3.125rem] flex flex-col">{children}</main>;
}

export default PageContainer;
