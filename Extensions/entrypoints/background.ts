export default defineBackground(() => {
  // Open side panel on extension icon click
  browser.action.onClicked.addListener((tab) => {
    if (tab?.id) {
      browser.sidePanel.open({ tabId: tab.id });
    }
  });

  // Handle TAKE_SCREENSHOT from side panel (via content script or direct)
  browser.runtime.onMessage.addListener(
    (message: { type: string }, _sender: unknown, sendResponse: (response: unknown) => void) => {
      if (message.type === 'TAKE_SCREENSHOT') {
        browser.tabs
          .query({ active: true, currentWindow: true })
          .then((tabs) => {
            const tab = tabs[0];
            if (!tab?.id) {
              sendResponse({ error: 'No active tab' });
              return;
            }
            return browser.tabs.captureVisibleTab(tab.windowId ?? undefined, {
              format: 'jpeg',
              quality: 85,
            });
          })
          .then((dataUrl) => {
            if (dataUrl) sendResponse({ screenshot: dataUrl });
            else sendResponse({ error: 'Capture failed' });
          })
          .catch((err) => sendResponse({ error: String(err) }));
        return true; // keep channel open for async sendResponse
      }
      return false;
    }
  );
});
