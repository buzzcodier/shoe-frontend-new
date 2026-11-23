
import React from "react";
import ReactDOM from "react-dom/client";
import { useRegisterSW } from "virtual:pwa-register/react";
import App from "./App";
import "./index.css";

function PWAUpdater() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    immediate: true,
  });

  return (
    <>
      {needRefresh && (
        <div className="fixed bottom-4 right-4 z-50 rounded-lg border bg-white p-4 shadow-lg">
          <p className="mb-3 text-sm font-medium">
            A new version is available!
          </p>

          <button
            onClick={() => updateServiceWorker(true)}
            className="rounded-md bg-black px-4 py-2 text-sm text-white"
          >
            Update now
          </button>

          <button
            onClick={() => setNeedRefresh(false)}
            className="ml-2 text-sm text-gray-600"
          >
            Later
          </button>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PWAUpdater />
    <App />
  </React.StrictMode>
);
