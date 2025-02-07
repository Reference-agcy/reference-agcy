import React from "react";
import { i18n } from "i18next";
import ScreenHeader from "../Common/ScreenHeader";

type HeaderProps = {
  title: string;
  t: i18n["t"];
};

function Header({ title, t }: HeaderProps) {
  return (
    <ScreenHeader
      title={title}
      breadcrumbs={[
        { title: t("common:home-page"), href: "/" },
        { title: t("common:business") },
        { title: title },
      ]}
    />
  );
}

export default Header;
