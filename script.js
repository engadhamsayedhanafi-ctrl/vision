
const APP_CONFIG = {
  version: "1.0.0",
  apkPath: "https://github.com/engadhamsayedhanafi-ctrl/vision/releases/download/v1.0.0/twinlink.apk",
  fileSize: "50.4 MB"
};

const version = document.getElementById("version");
const fileSize = document.getElementById("fileSize");
const downloadNote = document.getElementById("downloadNote");
const downloadButton = document.querySelector(".download-button");

// Set application information
version.textContent = APP_CONFIG.version;
fileSize.textContent = APP_CONFIG.fileSize;

// Set the official APK download link
downloadButton.href = APP_CONFIG.apkPath;
downloadButton.removeAttribute("download");
downloadButton.classList.remove("disabled");

// Set download note
downloadNote.textContent = "Official TWINLINK Android release";
