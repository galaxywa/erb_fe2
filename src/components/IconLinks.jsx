import React from "react";
import { iconLinks } from "../data";
import IconLink from "./IconLink";
function IconLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {iconLinks.map((link) => {
        return <IconLink key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
}

export default IconLinks;
