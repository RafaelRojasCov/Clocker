import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("button", () => {
  it("should render button", () => {
    render(<Button />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render button with text", () => {
    render(<Button>Button</Button>);
    const button = screen.getByText("Button");

    expect(button).toBeInTheDocument();
  });

  it("should trigger onclick function", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick} />);
    const button = screen.getByRole("button");

    button.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should render without variant class when no variant is provided", () => {
    render(<Button />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("button");
    expect(button).not.toHaveClass("button__basic");
  });

  it("should render primary variant when prop is passed", () => {
    render(<Button variant="primary" />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("button");
    expect(button).toHaveClass("button__primary");
  });

  it("should not render variant class with active when no variant is provided", () => {
    render(<Button active />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("button");
    expect(button).not.toHaveClass("button__basic--active");
  });

  it("should render primary variant with active prop when prop is passed", () => {
    render(<Button variant="primary" active />);
    const button = screen.getByRole("button");

    expect(button).toHaveClass("button");
    expect(button).toHaveClass("button__primary--active");
  });
});
