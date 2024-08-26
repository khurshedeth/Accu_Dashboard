import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

function AddWidget({ categories, onAddWidget }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [newWidget, setNewWidget] = useState({ name: "", text: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = () => {
    onAddWidget(selectedCategory, newWidget);
    setNewWidget({ name: "", text: "" });
    setIsModalOpen(false);
  };

  return (
    <div className="mt-8 mx-4 px-4 flex flex-col lg:flex-row justify-between items-center">
      <div className="text-xl lg:text-2xl font-medium mb-4 lg:mb-0">
        <h1>CNAAP Dashboard</h1>
      </div>
      <div className="flex justify-between items-center w-full lg:w-1/3 gap-4">
        <div className="border border-gray-300 p-2 rounded-lg w-full lg:w-auto">
          <button
            className="flex gap-2 items-center justify-center w-full lg:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            Add Widgets <IoAdd />
          </button>
        </div>

        <div className="hidden lg:flex border-2 p-2 rounded-lg">
          <BiRefresh size={20} />
        </div>
        <div className="hidden lg:flex border-2 p-2 rounded-lg">
          <BsThreeDotsVertical size={20} />
        </div>
        <div className="hidden lg:block w-full lg:w-auto">
          <select className="bg-blue-600 p-2 text-white rounded-lg w-full lg:w-auto">
            <option value="someOption">Last 2 Days</option>
            <option value="otherOption">Other option</option>
          </select>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
            onClick={(e) => e.stopPropagation()} 
          >
            <h3 className="text-xl font-bold mb-2">Add New Widget</h3>
            <select
              className="border rounded p-2 mb-4 w-full"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Widget Name"
              className="border rounded p-2 mb-4 w-full"
              value={newWidget.name}
              onChange={(e) =>
                setNewWidget({ ...newWidget, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Widget Text"
              className="border rounded p-2 mb-4 w-full"
              value={newWidget.text}
              onChange={(e) =>
                setNewWidget({ ...newWidget, text: e.target.value })}
            />
            <div className="flex justify-end">
              <button
                className="bg-gray-500 text-white p-2 rounded mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleAdd}
              >
                + Add Widget
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddWidget;
