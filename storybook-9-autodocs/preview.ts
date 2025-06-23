// we have many packages with individual storybook configurations, which we want to share a global preview object

import type { Preview } from '@storybook/react-vite';

export const preview: Preview = {
  tags: ['autodocs'],
};

export default preview;
