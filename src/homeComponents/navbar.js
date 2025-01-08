import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./sidebar";
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      url: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      url: "/recipes",
      icon: faList,
    },
    {
      name: "Settings",
      url: "/settings",
      icon: faCog,
    },
  ];

  function colseSidebar() {
    setSidebar(false);
  }
  return (
    <>
      <div className="navbar  container">
        <a href="#!" className="logo">
          C<span>oo</span>kingHub
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              to={link.url}
              className={
                location.pathname === link.url
                  ? "sidebar-links active"
                  : "sidebar-links"
              }
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setSidebar(true)}
          className={sidebar ? "sidebar-btn active" : "sidebar-btn"}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {sidebar && <Sidebar close={colseSidebar} links={links} />}
    </>
  );
}
