import { test, expect } from "@playwright/test";
import { render, myComponent } from "./build";

test("renderToStaticMarkup in Playwright", () => {
  // Error: Objects are not valid as a React child (found: object with keys {__pw_type, type, props, key}). If you meant to render a collection of children, use an array instead.
  const html = render(myComponent);
  expect(html).toBeTruthy();
});
