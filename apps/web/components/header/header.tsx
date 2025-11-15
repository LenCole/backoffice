"use client";

import { Menubar } from "@workspace/ui/components/menubar";
import Logo from "@/components/utils/logo";
import ThemeToggle from "../utils/theme-toggle";
import { NavigationBar } from "./navigation-bar";

export function Header() {
  return (
    <section>
      <Menubar className="justify-between py-7">
        <div className="flex flex-col items-end space-y-4 p-4">
          <Logo />
        </div>
        <NavigationBar />
        <ThemeToggle />
      </Menubar>
    </section>
  );
}
