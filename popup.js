let scrollInterval;

document.getElementById('startBtn').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      if (window.sagarScrollTimer) clearInterval(window.sagarScrollTimer);
      window.sagarScrollTimer = setInterval(() => {
        window.scrollBy({ top: 2, behavior: 'smooth' });
      }, 30);
    }
  });
});

document.getElementById('stopBtn').addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      if (window.sagarScrollTimer) {
        clearInterval(window.sagarScrollTimer);
        window.sagarScrollTimer = null;
      }
    }
  });
});
