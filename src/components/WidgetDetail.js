import React from "react";
import { useParams } from "react-router-dom";

function WidgetDetail({ data }) {
  const { categoryId, widgetId } = useParams();

  const category = data.categories.find((cat) => cat.id === categoryId);
  const widget = category?.widgets.find((w) => w.id === widgetId);

  if (!widget) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <div className="text-red-500 text-xl font-semibold">
          Widget not found!
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="bg-white p-6 w-80 lg:w-96 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{widget.name}</h2>
        <p className="text-gray-600 text-lg">{widget.text}</p>
      </div>
    </div>
  );
}

export default WidgetDetail;
