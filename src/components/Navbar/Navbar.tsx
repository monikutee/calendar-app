import * as React from "react";

import { Menu } from "./menu";
import { ContentNavigation } from "./ContentNavigation";
import { LayoutSelector } from "./layoutSelector";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <Menu />
      <ContentNavigation />
      <LayoutSelector />
    </nav>
  );
};
