import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom", //or which ever runtime enviroment you're using
      testIdAttribute: "data-testid",
    },
  })
);
