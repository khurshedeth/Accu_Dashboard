import React, { useState } from "react";

function AddWidgetModal({ isOpen, onClose, onAdd }) {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");
  const [widgetNameError, setWidgetNameError] = useState("");
  const [widgetTextError, setWidgetTextError] = useState("");

  const handleAdd = () => {
    let hasError = false;

    if (!widgetName.trim()) {
      setWidgetNameError("Please input the widget name.");
      hasError = true;
    } else {
      setWidgetNameError(""); 
    }

    if (!widgetText.trim()) {
      setWidgetTextError("Please input the widget text.");
      hasError = true;
    } else {
      setWidgetTextError("");
    }

    if (hasError) {
      return;
    }

    onAdd(widgetName, widgetText);
    setWidgetName("");
    setWidgetText("");
    handleClose(); // Close the modal
  };

  const handleClose = () => {
    // Reset error messages when closing the modal
    setWidgetNameError("");
    setWidgetTextError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full transform hover:scale-105 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add New Widget</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          />
          {widgetNameError && (
            <p className="text-red-500 text-sm mt-1">{widgetNameError}</p>
          )}
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Widget Text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          />
          {widgetTextError && (
            <p className="text-red-500 text-sm mt-1">{widgetTextError}</p>
          )}
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWidgetModal;
