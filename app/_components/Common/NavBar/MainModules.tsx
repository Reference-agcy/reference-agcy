"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "@app/_components/ui/button";

function MainModules() {
  const { t } = useTranslation("common");

  return (
    <div className="flex gap-3">
      <Link href="/">
        <Button variant="secondary">{t("business")}</Button>
      </Link>
      <Link href="/candidate">
        <Button>{t("candidate")}</Button>
      </Link>
    </div>
  );
}

export default MainModules;
