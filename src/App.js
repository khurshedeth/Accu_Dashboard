import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import WidgetCategories from "./components/WidgetCategories";
import AddWid from "./components/AddWid";
import WidgetDetail from "./components/WidgetDetail"; 
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
          { id: uuidv4(), name: "Widget 3", text: "This is Widget 3 text" },
          { id: uuidv4(), name: "Widget 4", text: "This is Widget 4 text" },
        ],
      },
      {
        id: "network-security-dashboard",
        name: "Network Security Dashboard",
        widgets: [
          { id: uuidv4(), name: "Widget 5", text: "This is Widget 5 text" },
          { id: uuidv4(), name: "Widget 6", text: "This is Widget 6 text" },
          { id: uuidv4(), name: "Widget 7", text: "This is Widget 7 text" },
          { id: uuidv4(), name: "Widget 8", text: "This is Widget 8 text" },
        ],
      },
    ],
  };

  const storedData = localStorage.getItem("dashboardData");
  const [data, setData] = useState(storedData ? JSON.parse(storedData) : initialData);
  const [searchResults, setSearchResults] = useState(data);

  useEffect(() => {
    localStorage.setItem("dashboardData", JSON.stringify(data));
  }, [data]);

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
    <Router>
      <div className="container mx-auto p-4">
        <Search onSearch={handleSearchWidgets} />
        <Routes>
          
          <Route
            path="/"
            element={
              <>
                <AddWid
                  categories={searchResults.categories}
                  onAddWidget={handleAddWidget}
                />
                <WidgetCategories
                  categories={searchResults.categories}
                  onRemoveWidget={handleRemoveWidget}
                  onAddWidget={handleAddWidget}
                />
              </>
            }
          />
          
          <Route
            path="/category/:categoryId/widget/:widgetId"
            element={<WidgetDetail data={data} />}
          />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default Dashboard;
