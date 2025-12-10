import React from "react";
import { render, screen } from "@testing-library/react";
import Logotype from "./index"; // або "./Logotype" — залежно від структури
import { vi } from "vitest";

// 🔹 Мокаємо компонент Logo, щоб не тягнути SVG
vi.mock("@/components/svg/Logo", () => ({
  default: ({ oneLetter }: { oneLetter?: boolean }) => (
    <div data-testid="logo" data-oneletter={oneLetter ? "true" : "false"} />
  ),
}));

describe("Logotype component", () => {
  it("renders a link with correct href", () => {
    render(<Logotype />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders Logo component", () => {
    render(<Logotype />);
    expect(screen.getByTestId("logo")).toBeInTheDocument();
  });

  it("passes oneLetter prop correctly to Logo", () => {
    render(<Logotype oneLetter={true} />);
    expect(screen.getByTestId("logo")).toHaveAttribute("data-oneletter", "true");
  });

  it("applies additional className", () => {
    render(<Logotype className="extra-class" />);
    const link = screen.getByRole("link");
    expect(link).toHaveClass("logotype");
    expect(link).toHaveClass("extra-class");
  });
});