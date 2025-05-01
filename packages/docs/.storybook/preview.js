import { globalStyles } from "@ignite-ui/react";
import React from "react";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [
    Story => {
      globalStyles();
      return React.createElement(Story);
    },
  ],
};

export default preview;
