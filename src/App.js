// src/App.js
import React, { useState } from "react";
import ModalDialog from "./ModalDialog";
import "./ModalDialog.css"; // Import CSS for modal styling

const App = () => {
  const [openDialog, setOpenDialog] = useState(null);

  const openDialogHandler = (type) => {
    setOpenDialog(type);
  };

  const closeDialogHandler = () => {
    setOpenDialog(null);
  };

  return (
    <div
      className="App"
      style={{ padding: "20px", backgroundColor: "#121212", color: "#e0e0e0" }}
    >
      <h1>Alert Dialog Demo</h1>
      <button
        onClick={() => openDialogHandler("success")}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#e0e0e0",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Show Success Dialog
      </button>
      <button
        onClick={() => openDialogHandler("error")}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#dc3545",
          color: "#e0e0e0",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Show Error Dialog
      </button>
      <button
        onClick={() => openDialogHandler("warning")}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#ffc107",
          color: "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Show Warning Dialog
      </button>
      <button
        onClick={() => openDialogHandler("info")}
        style={{
          margin: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#17a2b8",
          color: "#e0e0e0",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Show Info Dialog
      </button>

      {openDialog && (
        <ModalDialog
          type={openDialog}
          title={`${
            openDialog.charAt(0).toUpperCase() + openDialog.slice(1)
          } Dialog`}
          message={`This is a ${openDialog} modal dialog.`}
          isOpen={!!openDialog}
          onClose={closeDialogHandler}
        />
      )}
    </div>
  );
};

export default App;
