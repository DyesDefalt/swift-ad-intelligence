import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Open side panel when popup is opened (optional quick access)
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      if (tabs[0]?.id) browser.sidePanel.open({ tabId: tabs[0].id });
    });
  }, []);

  const openSidePanel = () => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      if (tabs[0]?.id) browser.sidePanel.open({ tabId: tabs[0].id });
    });
  };

  return (
    <div style={{ width: 280, padding: 16, fontFamily: 'Plus Jakarta Sans, system-ui', background: '#F6F7F9', minHeight: 120 }}>
      <p style={{ margin: 0, fontSize: 14, color: '#0B0D10', fontWeight: 600 }}>Gapah</p>
      <p style={{ margin: '8px 0 0', fontSize: 12, color: '#6B7280' }}>Swift Ad Intelligence. Side panel opens automatically—or click below.</p>
      <button
        type="button"
        onClick={openSidePanel}
        aria-label="Open Gapah side panel"
        style={{
          marginTop: 12,
          width: '100%',
          padding: '10px 16px',
          fontSize: 13,
          fontWeight: 600,
          color: '#fff',
          background: 'linear-gradient(135deg, #3B9DF5 0%, #2563EB 100%)',
          border: 'none',
          borderRadius: 9999,
          cursor: 'pointer',
          boxShadow: '0 10px 40px rgba(59, 157, 245, 0.25)',
        }}
      >
        Open Gapah
      </button>
    </div>
  );
}
