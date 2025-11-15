"use client";

import { Menubar } from "@workspace/ui/components/menubar";
import { NavigationBar } from "./navigation-bar";
export function Header() {
  return (
    <section>
      <Menubar className="justify-between py-7">
        <div className="">SITE</div>
        <NavigationBar />
        <p className="">buttons</p>
      </Menubar>
    </section>
  );
}
