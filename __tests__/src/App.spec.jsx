import { describe, it, expect } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import App from "../../src/App";
import "@testing-library/jest-dom/vitest";

const user = userEvent.setup({ delay: null });

const executeXWinner = async () => {
  const cellX0 = screen.getAllByTestId("span-cell-0");
  await user.click(cellX0[0]);

  const cellO3 = screen.getAllByTestId("span-cell-3");
  await user.click(cellO3[0]);

  const cellX1 = screen.getAllByTestId("span-cell-1");
  await user.click(cellX1[0]);

  const cellO4 = screen.getAllByTestId("span-cell-4");
  await user.click(cellO4[0]);

  const cellX2 = screen.getAllByTestId("span-cell-2");
  await user.click(cellX2[0]);
};

const executeOWinner = async () => {
  const cellX2 = screen.getAllByTestId("span-cell-2");
  await user.click(cellX2[0]);

  const cellO1 = screen.getAllByTestId("span-cell-1");
  await user.click(cellO1[0]);

  const cellX3 = screen.getAllByTestId("span-cell-3");
  await user.click(cellX3[0]);

  const cellO4 = screen.getAllByTestId("span-cell-4");
  await user.click(cellO4[0]);

  const cellX5 = screen.getAllByTestId("span-cell-5");
  await user.click(cellX5[0]);

  const cellO7 = screen.getAllByTestId("span-cell-7");
  await user.click(cellO7[0]);
};

const executeCotOld = async () => {
  const cellX2 = screen.getAllByTestId("span-cell-2");
  await user.click(cellX2[0]);

  const cellO1 = screen.getAllByTestId("span-cell-1");
  await user.click(cellO1[0]);

  const cellX3 = screen.getAllByTestId("span-cell-3");
  await user.click(cellX3[0]);

  const cellO0 = screen.getAllByTestId("span-cell-0");
  await user.click(cellO0[0]);

  const cellX4 = screen.getAllByTestId("span-cell-4");
  await user.click(cellX4[0]);

  const cellO5 = screen.getAllByTestId("span-cell-5");
  await user.click(cellO5[0]);

  const cellX7 = screen.getAllByTestId("span-cell-7");
  await user.click(cellX7[0]);

  const cellO6 = screen.getAllByTestId("span-cell-6");
  await user.click(cellO6[0]);

  const cellX8 = screen.getAllByTestId("span-cell-8");
  await user.click(cellX8[0]);
};

describe("App", () => {
  it("should render screen of game", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("should return player x as winner", async () => {
    render(<App />);
    await executeXWinner();

    const message = screen.getByText("Player x won!");
    await waitFor(() => {
      expect(message).toBeInTheDocument();
    });
  });

  it("should return player o as winner", async () => {
    render(<App />);
    await executeOWinner();

    const message = screen.getByText("Player o won!");
    await waitFor(() => {
      expect(message).toBeInTheDocument();
    });
  });

  it("should remove timer of screen when has winner", async () => {
    render(<App />);
    await executeXWinner();

    const timer = screen.queryByTestId("timer");
    await waitFor(() => {
      expect(timer).not.toBeInTheDocument();
    });
  });

  it("should show scores acumulated", async () => {
    render(<App />);
    const reset = screen.getByRole("button", { name: "Reset Game" });
    await executeXWinner();
    await user.click(reset);
    await executeXWinner();
    await user.click(reset);
    await executeXWinner();

    await waitFor(() => {
      const scoreX = screen.getByText("Player X: 3");
      expect(scoreX).toBeInTheDocument();
    });
  });

  it("should show message Got old", async () => {
    render(<App />);
    await executeCotOld();

    const message = screen.getByText("Got old");
    await waitFor(() => {
      expect(message).toBeInTheDocument();
    });
  });

  it("should show a float menu to change colors of game", async () => {
    render(<App />);
    const button = screen.getByTestId("settings-button");
    await user.click(button);

    await waitFor(() => {
      const buttonsColors = screen.getAllByTestId(/settings-button-color-/);
      expect(buttonsColors.length).toEqual(3);
    });
  });
});
