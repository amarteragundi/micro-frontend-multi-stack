import React from "react";
import  ReactDOM  from "react-dom";

const mount = (el) => {
  ReactDOM.render(<h1>Hi There</h1>, el);
};

if (process.env.NODE_ENV === "development") {
  const root = document.querySelector("#_marketing-dev-root");

  if (root) {
    mount(root);
  }
}

export { mount };
