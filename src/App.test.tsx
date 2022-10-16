import { render, screen } from "@testing-library/react";
import WrappedApp from "./App";

describe("App", () => {
  it("renderiza Hello World", () => {
    render(<WrappedApp />);
    expect(screen.getByText(/Not Home/i)).toBeInTheDocument();
  });
});
