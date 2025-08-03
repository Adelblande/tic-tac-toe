import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ResetButton } from "../../../../src/components";

describe("ResetButton", () => {
  it("should render ResetButton component", () => {
    const { container } = render(<ResetButton />);

    expect(container).toMatchSnapshot();
  });
});
