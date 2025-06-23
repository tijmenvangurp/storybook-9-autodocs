import type { Preview } from '@storybook/react-vite';
import { preview as defaultPreview } from '../preview';

// console.log(defaultPreview);
const preview: Preview = {
  // FIXME: not working import, we want to have a default preview object that is share across multiple storybook configurations
  ...defaultPreview,
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // tags: ['autodocs'],
  // having tags autodocs here does work but I want to have this imported so that its a shared configuration
};

export default preview;
