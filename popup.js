document.getElementById("getTitleButton").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "getTabTitle" }, (response) => {
      if (response && response.title) {
        document.getElementById("tabTitle").textContent = response.title;
      } else {
        document.getElementById("tabTitle").textContent = "Error: No title received";
      }
    });
  });
  