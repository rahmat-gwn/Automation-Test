import { setHeadlessWhen } from '@codeceptjs/configure';
require('dotenv').config();

setHeadlessWhen(process.env.HEADLESS);

export const config: CodeceptJS.MainConfig = {
  helpers: {
    Playwright: {
      url: 'https://', 
      show: true,
      browser: 'chromium',
    },
  },
  gherkin: {
    features: "./tests/features/*.feature",
    steps: "./steps/steps.ts",
  },
  include: {},
  I: './steps_file',
};
