import React, { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@app/_components/ui/breadcrumb";

type ScreenHeaderProps = {
  title: string;
  breadcrumbs: { title: string; href?: string }[];
  endSideComponent?: React.ReactNode;
};

function ScreenHeader({
  title,
  breadcrumbs,
  endSideComponent,
}: ScreenHeaderProps) {
  return (
    <header className="mb-[2.625rem] bg-gray-0/60 bg-screen-header-gradient bg-cover bg-center bg-no-repeat backdrop-blur-sm dark:bg-screen-header-gradient-dark md:h-40 md:bg-contain">
      <div className="container py-5 sm:!flex-row sm:items-center sm:justify-between md:pb-3 md:pt-8">
        <div className="flex flex-col gap-2 md:gap-5">
          {breadcrumbs?.length > 0 && (
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                  <Fragment
                    key={`${index}-${breadcrumb.title}-${breadcrumb.href}`}
                  >
                    <BreadcrumbItem>
                      {breadcrumb.href ? (
                        <BreadcrumbLink href={breadcrumb.href}>
                          {breadcrumb.title}
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>

                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          )}
          <h1 className="text-xl font-bold text-gray-800 xs:text-3xl sm:text-4xl md:text-[2.625rem]">
            {title}
          </h1>
        </div>
        {endSideComponent ? <div>{endSideComponent}</div> : null}
      </div>
    </header>
  );
}

export default ScreenHeader;
