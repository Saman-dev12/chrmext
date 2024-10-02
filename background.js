chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getTabTitle") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (chrome.runtime.lastError || !tabs || tabs.length === 0) {
          sendResponse({ title: "Error: Could not retrieve tab" });
        } else {
          let tabTitle = tabs[0].title || "Untitled Tab";
          sendResponse({ title: tabTitle });
        }
      });
      return true; 
    }
  });
  