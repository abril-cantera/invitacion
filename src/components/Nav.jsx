import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <div className="header-div">
        <nav className="header-div__nav">
          <section className="nav-sectionMenu">
            {routes.map((route) => {
              if (route.private) return null
              return (
                <NavLink key={route.to}
                  style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}
                  to={route.to}
                >
                  {route.text}
                </NavLink>
              )
            })}
          </section>
        </nav>
      </div>
    </header>
  );
}
export default Nav;

const routes = [];
routes.push({
  to: "/",
  text: "HOME",
  private: false
});
routes.push({
  to: "/confirmation",
  text: "CONFIRMACION",
  private: false
});
