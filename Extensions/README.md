# AdLens – Chrome Extension

Chrome extension (WXT + React) for **AdLens - AI Marketing Copilot**: vision-powered ad copy (TikTok/Meta) and Data Lens (screenshot-to-insight).

## Setup

```bash
cd Extensions
npm install
```

## Development

```bash
npm run dev
```

Load the unpacked extension from `.output/chrome-mv3-dev` in Chrome (`chrome://extensions` → Load unpacked).

## Build

```bash
npm run build
```

Output: `.output/chrome-mv3`.

## Icons

Add `icon-16.png`, `icon-48.png`, and `icon-128.png` to `public/` (e.g. export from `docs/gapah-logo.svg`). See `assets/README.md`.

## Structure

- **entrypoints/sidepanel** – Main UI (Ad Copy + Data Lens + Settings + License gate)
- **entrypoints/popup** – Minimal popup (opens side panel)
- **entrypoints/background.ts** – Service worker (open side panel, screenshot capture)
- **entrypoints/content.ts** – Content script (message relay for screenshot)
- **lib/** – platforms (TikTok/Meta specs), ai (vision, openai, anthropic, prompts), auth (license), storage
- **components/** – LicenseGate, SettingsPanel, AdCopyPanel, DataLensPanel

The extension does not import from the web app; the web app does not import from the extension.
