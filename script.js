console.log("Working", Date.now());
let MODE = "";

function setMode() {
  const { host } = window.location;
  MODE = host === "localhost" ? "DEV" : "PROD";
}

function getBaseUrl() {
  if (MODE === "DEV") {
    return "localhost:5500";
  } else {
    return "https://fusionmaster7.github.io";
  }
}
