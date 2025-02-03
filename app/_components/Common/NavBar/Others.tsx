import ChangeLAngBtn from "../ChangeLanguage";
import ModeSwitcher from "./ModeSwitcher";
import OtherPageLinkItem from "./OtherPageLinkItem";
import { en } from "@/public/locales/en";

type Props = {
  containerClassName?: string;
};

function Others({}: Props) {
  return (
    <ul className="flex items-center gap-4 max-md:flex-col md:gap-6">
      {OTHER_PAGES.map((page) => (
        <li key={page.href}>
          <OtherPageLinkItem href={page.href} text={page.text} />
        </li>
      ))}

      <li className="flex items-center justify-center gap-6 max-md:mt-3">
        <ChangeLAngBtn />
        <ModeSwitcher />
      </li>
    </ul>
  );
}

const OTHER_PAGES: {
  href: string;
  text: keyof (typeof en)["common"];
}[] = [
  {
    href: "/",
    text: "home-page",
  },
  {
    href: "/blog-home",
    text: "blog",
  },
  {
    href: "/about-us",
    text: "about-us",
  },
  {
    href: "/faqs",
    text: "resources",
  },
];

export default Others;
