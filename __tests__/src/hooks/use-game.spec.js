import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useGame } from "../../../src/hooks/use-game";
import { INITIAL_GAME } from "../../mocks/use-game";
import { MockProviders } from "../../mocks/providers";

describe("useGame", () => {
  it("should defined", () => {
    const { result } = renderHook(useGame, {
      wrapper: MockProviders,
    });

    expect(result.current.game).toBeDefined();
    expect(result.current.player).toBeDefined();
    expect(result.current.message).toBeDefined();
    expect(result.current.scores).toBeDefined();
    expect(result.current.winner).toBeDefined();
    expect(result.current.handleClick).toBeDefined();
    expect(result.current.resetGame).toBeDefined();
    expect(result.current.setPlayer).toBeDefined();
  });

  it("should return initial values", () => {
    const { result } = renderHook(useGame, {
      wrapper: MockProviders,
    });

    expect(result.current.game).toEqual(INITIAL_GAME);
    expect(result.current.player).toEqual("x");
    expect(result.current.message).toBeNull();
    expect(result.current.winner).toBeNull();
    expect(result.current.scores).toEqual({ x: 0, o: 0 });
  });
});
