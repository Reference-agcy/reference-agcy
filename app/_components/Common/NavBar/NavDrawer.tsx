"use client";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Logo from "@app/_components/Common/Logo";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@app/_components/ui/drawer";
import MainModules from "./MainModules";
import Others from "./Others";

function NavDrawer() {
  return (
    <Drawer direction="left">
      <DrawerTrigger title="Open navigation menu" className="rtl:-scale-x-100">
        <HiMenuAlt3 className="size-6" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerClose className="absolute right-6 top-10">
          <IoClose className="size-6" />
        </DrawerClose>
        <DrawerHeader className="mb-2">
          <Logo />
        </DrawerHeader>
        <MainModules />
        <div className="mt-8">
          <Others />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default NavDrawer;
