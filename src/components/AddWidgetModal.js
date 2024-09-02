import React, { useState } from "react";

function AddWidgetModal({ isOpen, onClose, onAdd }) {
  const [widgetName, setWidgetName] = useState("");
  const [widgetText, setWidgetText] = useState("");

  const handleAdd = () => {
    if (widgetName.trim() && widgetText.trim()) {
      onAdd(widgetName, widgetText);
      setWidgetName("");
      setWidgetText("");
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Add New Widget</h2>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Widget Text"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWidgetModal;
