import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

export const myComponent = () => <div>Hello, World!</div>;

export function render(component: React.FC) {
  const element = React.createElement(component);
  if (!element || !React.isValidElement(element))
    throw new Error("Invalid React element");

  const html = renderToStaticMarkup(element);
  console.log(html);

  return html;
}

render(myComponent);
