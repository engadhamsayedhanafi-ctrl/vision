
const APP_CONFIG = {
  version: "1.0.0",
  apkPath: "downloads/twinlink.apk"
};

document.getElementById("version").textContent = APP_CONFIG.version;

const downloadButton = document.querySelector(".download-button");
const fileSize = document.getElementById("fileSize");
const downloadNote = document.getElementById("downloadNote");

downloadButton.href = APP_CONFIG.apkPath;

fetch(APP_CONFIG.apkPath, { method: "HEAD" })
  .then(response => {
    if (!response.ok) {
      throw new Error("APK not available");
    }

    const bytes = Number(response.headers.get("content-length"));

    if (bytes > 0) {
      fileSize.textContent = `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    } else {
      fileSize.textContent = "APK file";
    }

    downloadButton.classList.remove("disabled");
  })
  .catch(() => {
    fileSize.textContent = "Release pending";
    downloadNote.textContent = "The next official release will be available soon.";
  });
