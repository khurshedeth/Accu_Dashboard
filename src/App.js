import React, { useState,  } from "react";
import { v4 as uuidv4 } from "uuid";
import Search from "./components/Search";
import WidgetCategories from "./components/WidgetCategories";
import AddWid from "./components/AddWid";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const initialData = {
    categories: [
      {
        id: "cspm-dashboard",
        name: "CSPM Executive Dashboard",
        widgets: [
          { id: uuidv4(), name: "Widget 1", text: "This is Widget 1 text" },
          { id: uuidv4(), name: "Widget 2", text: "This is Widget 2 text" },
        ],
      },
      {
        id: "network-security-dashboard",
        name: "Network Security Dashboard",
        widgets: [
          { id: uuidv4(), name: "Widget 3", text: "This is Widget 3 text" },
        ],
      },
    ],
  };

  const [data, setData] = useState(initialData);
  const [searchResults, setSearchResults] = useState(data);

  const handleAddWidget = (categoryId, widget) => {
    const updatedData = { ...data };
    const categoryIndex = updatedData.categories.findIndex(
      (cat) => cat.id === categoryId
    );
    if (categoryIndex > -1) {
      updatedData.categories[categoryIndex].widgets.push({
        id: uuidv4(),
        name: widget.name,
        text: widget.text,
      });
      setData(updatedData);
      setSearchResults(updatedData);
      toast.success("Widget added successfully");
    }
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    const updatedData = { ...data };
    const categoryIndex = updatedData.categories.findIndex(
      (cat) => cat.id === categoryId
    );
    if (categoryIndex > -1) {
      updatedData.categories[categoryIndex].widgets = updatedData.categories[
        categoryIndex
      ].widgets.filter((w) => w.id !== widgetId);
      setData(updatedData);
      setSearchResults(updatedData);
      toast.error("Widget deleted");
    }
  };

  const handleSearchWidgets = (searchText) => {
    if (searchText.trim() === "") {
      setSearchResults(data);
    } else {
      const filteredData = {
        ...data,
        categories: data.categories.map((category) => ({
          ...category,
          widgets: category.widgets.filter((widget) =>
            widget.name.toLowerCase().includes(searchText.toLowerCase())
          ),
        })),
      };
      setSearchResults(filteredData);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Search onSearch={handleSearchWidgets} />
      <AddWid
        categories={searchResults.categories}
        onAddWidget={handleAddWidget}
      />
      <WidgetCategories
        categories={searchResults.categories}
        onRemoveWidget={handleRemoveWidget}
      />
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
