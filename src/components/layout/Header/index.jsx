import React from "react";

const Header = ({data}) => {
  return (
    <header id="header" className="user-header sticky">
            <div className="container">
                <div className="header-wrap">
                    <div className="header-logo">
                        <img src="/logo.png" alt="logo" />
                    </div>
                    <nav> 
                        <ul>
                            <li className="">
                                <a href="#">
                                    {data.header.item1.en}
                                </a>
                            </li>
                            <li className="">
                                <a href="#">
                                    {data.header.item2.en}
                                </a>
                            </li>
                            <li className="">
                                <a href="#">
                                    {data.header.item3.en}
                                </a>
                            </li>
                            <li className="">
                                <a href="#">
                                    {data.header.item4.en}
                                </a>
                            </li>
                            <li className="">
                                <a href="#">
                                    {data.header.item5.en}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header> 
  );
};

export default Header;
