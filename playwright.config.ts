import {PlaywrightTestConfig, devices} from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  testDir: 'src',
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    headless: !!process.env.CI,
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      testMatch: /.*test-e2e.ts/,
      use: {...devices['Desktop Chrome']},
    },
  ],
  webServer: {
    command: 'yarn start',
    port: 3000,
    timeout: 10_000,
    reuseExistingServer: !process.env.CI,
  },
};

export default config;