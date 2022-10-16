import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renderiza Hello World", () => {
    render(<App />);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });
});
