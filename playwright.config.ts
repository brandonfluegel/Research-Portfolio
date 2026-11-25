import { defineConfig } from "@playwright/test";

const port = 31847;
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH;

export default defineConfig({
  testDir: "./tests",
  testMatch: "mobile.spec.ts",
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    browserName: "chromium",
    launchOptions: executablePath ? { executablePath } : {},
  },
  webServer: {
    command: `npm run start -- -p ${port}`,
    url: `http://127.0.0.1:${port}`,
    timeout: 30_000,
  },
});
