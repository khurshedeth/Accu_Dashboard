
import React from "react";
import { useParams } from "react-router-dom";

function WidgetDetail({ data }) {
  const { categoryId, widgetId } = useParams();

  
  const category = data.categories.find((cat) => cat.id === categoryId);
  const widget = category?.widgets.find((w) => w.id === widgetId);

  if (!widget) {
    return <div>Widget not found!</div>;
  }

  return (
    <div className="widget-detail">
      <h2>{widget.name}</h2>
      <p>{widget.text}</p>
    </div>
  );
}

export default WidgetDetail;
