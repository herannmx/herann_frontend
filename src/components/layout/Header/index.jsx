import React from "react";

const Header = ({data}) => {
  return (
    <div className="container">
      <header className="user-header">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>
        <nav>
          <ul>
            <li className="">
              <a href="#">{data.header.item1.en}</a>
            </li>
            <li className="">
              <a href="#">About us</a>
            </li>
            <li className="">
              <a href="#">Services</a>
            </li>
            <li className="">
              <a href="#">Careers</a>
            </li>
            <li className="">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
