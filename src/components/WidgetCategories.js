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
        <div key={category.id} className="mb-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-4">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.widgets.map((widget) => (
              <Link
                to={`/category/${category.id}/widget/${widget.id}`}
                key={widget.id}
                className="block" // make the entire block clickable
              >
                <div
                  className="p-4 bg-gray-100 rounded shadow relative hover:scale-105 transition-transform"
                >
                  <h3 className="text-lg font-semibold">{widget.name}</h3>
                  <p>{widget.text}</p>
                  <button
                    className="absolute top-0 right-0 m-2 text-red-500"
                    onClick={(e) => {
                      e.preventDefault(); // prevent link navigation when the button is clicked
                      onRemoveWidget(category.id, widget.id);
                    }}
                  >
                    <RxCross2 size={20} />
                  </button>
                </div>
              </Link>
            ))}
            <div
              className="flex items-center justify-center p-4 bg-white border-2 border-dashed border-gray-400 rounded shadow-md cursor-pointer hover:scale-105 transition-transform"
              onClick={() => handleAddWidgetClick(category.id)}
            >
              <span className="text-gray-600 font-semibold">Add Widget</span>
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
