import { useState } from "react";
import { List, X } from "phosphor-react";
import { Link } from "react-router-dom";
import { useDetectClickOutside } from "react-detect-click-outside";

import "./Header.css";
import KenazLogo from "../../assets/kenaz_logo.svg";
import { SidebarData, SidebarDataType } from "./sidebarData";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showSidebar = () => setIsSidebarOpen(true);
  const hideSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const ref = useDetectClickOutside({
    onTriggered: hideSidebar,
    disableClick: true,
  });

  return (
    <>
      <nav className="header">
        <Link to="/">
          <img src={KenazLogo} alt="logomarca da livraria Kenaz. A letra k." />
        </Link>
        <List size={30} onClick={showSidebar} />
      </nav>
      <div className={isSidebarOpen ? "backdrop active" : "backdrop"} />
      <nav ref={ref} className={isSidebarOpen ? "side-bar active" : "side-bar"}>
        <div className="side-bar-button">
          <X size={32} onClick={hideSidebar} />
        </div>
        <div className="side-bar-items">
          {SidebarData.map(({ path, title }: SidebarDataType) => (
            <Link key={title} to={path} onClick={hideSidebar}>
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
