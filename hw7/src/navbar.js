import React, { useState } from "react";
import "./navbar.css";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <a href="#" className="nav__brand">
        首頁
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            求職
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            求才
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            就業小助手
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            就業安全區
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            註冊
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            登入
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            會員專區
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;