import ReactDom from "react-dom";
import React from "react";
import Menu from "./Menu";
import { useState } from "react";
import MenuCard from "./menuCard";
import "./Style.css";

const Resturant = () => {
  const [menu, setMenu] = useState(Menu);
  console.log(Menu);
  return (
    <>
      <MenuCard menuData={menu} />
    </>
  );
};
export default Resturant;
