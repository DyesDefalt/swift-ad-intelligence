import { defineConfig } from 'wxt';

export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'Gapah - Swift Ad Intelligence',
    description: 'Generate platform-perfect ad copy from images and analyze campaign data. Built for Indonesian marketers.',
    permissions: ['sidePanel', 'activeTab', 'storage', 'clipboardRead'],
    side_panel: {
      default_path: 'sidepanel/index.html',
    },
    action: {
      default_title: 'Open Gapah',
    },
  },
});
