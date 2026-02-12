export default defineContentScript({
  matches: ['<all_urls>'],
  main() {
    // Relay screenshot request from side panel to background
    browser.runtime.onMessage.addListener(
      (message: { type: string }, _sender: unknown, sendResponse: (response: unknown) => void) => {
        if (message.type === 'CAPTURE_SCREENSHOT') {
          browser.runtime
            .sendMessage({ type: 'TAKE_SCREENSHOT' })
            .then(sendResponse)
            .catch((err: Error) => sendResponse({ error: String(err) }));
          return true;
        }
        return false;
      }
    );
  },
});
