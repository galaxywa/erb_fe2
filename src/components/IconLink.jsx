import React from "react";

function IconLink({ link, itemClass }) {
  return (
    <li>
      <a href={link.href} className={itemClass}>
        <i className={link.icon}></i>
      </a>
    </li>
  );
}

export default IconLink;
