import React from "react";

function Layout(props) {
  return (
    <div className="Layout">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
export default Layout;
