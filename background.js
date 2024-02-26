chrome.runtime.onInstalled.addListener(() => {
    // Request eyedropper permission
    chrome.permissions.request({
        permissions: ['eyedropper'],
    });

    // Set initial color in storage
    let color = 'red';
    chrome.storage.sync.set({ color });
});
