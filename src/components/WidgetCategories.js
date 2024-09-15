import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import AddWidgetModal from "./AddWidgetModal";

function WidgetCategories({ categories, onRemoveWidget, onAddWidget }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const handleAddWidgetClick = (categoryId) => {
    setActiveCategory(categoryId);
    setModalOpen(true);
  };

  const handleAddWidget = (name, text) => {
    if (activeCategory) {
      onAddWidget(activeCategory, { name, text });
    }
  };

  return (
    <div className="mx-4 lg:mx-[4rem] px-4 lg:px-[2rem] mt-10">
      {categories.map((category) => (
        <div key={category.id} className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-800 mb-6 border-b-2 border-blue-500 inline-block pb-2">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.widgets.map((widget) => (
              <Link
                to={`/category/${category.id}/widget/${widget.id}`}
                key={widget.id}
                className="block"
              >
                <div className="p-6 bg-gradient-to-br from-white to-blue-100 rounded-xl shadow-md relative hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
                  <h3 className="text-xl font-bold text-gray-700 mb-2">{widget.name}</h3>
                  <p className="text-gray-600">{widget.text}</p>
                  <button
                    className="absolute top-0 right-0 m-2 text-red-500 hover:text-red-600"
                    onClick={(e) => {
                      e.preventDefault();
                      onRemoveWidget(category.id, widget.id);
                    }}
                  >
                    <RxCross2 size={24} />
                  </button>
                </div>
              </Link>
            ))}
            <div
              className="flex items-center justify-center p-6 bg-white border-2 border-dashed border-gray-300 rounded-xl shadow-md cursor-pointer hover:bg-gray-50 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
              onClick={() => handleAddWidgetClick(category.id)}
            >
              <span className="text-gray-500 font-semibold text-lg">+ Add Widget</span>
            </div>
          </div>
        </div>
      ))}
      <AddWidgetModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAddWidget}
      />
    </div>
  );
}

export default WidgetCategories;
