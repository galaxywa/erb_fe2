import React from "react";
import { pageLinks } from "../data";
import PageLink from "./PageLink";
function PageLinks({ parentClass, itemClass, id }) {
  return (
    <ul className={parentClass} id={id}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
}

export default PageLinks;
