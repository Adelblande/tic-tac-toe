import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Scores } from "../../../../src/components";

describe("Scores", () => {
  it("should render scores components", () => {
    const { container } = render(<Scores scores={{ x: 0, o: 0 }} />);

    expect(container).toMatchSnapshot();
  });
});
