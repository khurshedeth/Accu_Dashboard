import React from 'react';
import { RxCross2 } from "react-icons/rx";


function WidgetCategories({ categories, onRemoveWidget }) {
    return (
        <div className='mx-4 lg:mx-[4rem] px-4 lg:px-[2rem] mt-10'>
            {categories.map(category => (
                <div key={category.id} className="mb-8">
                    <h2 className="text-xl lg:text-2xl font-bold mb-4">{category.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {category.widgets.map(widget => (
                            <div key={widget.id} className="p-4 bg-gray-100 rounded shadow relative hover:scale-105 transition-transform">
                                <h3 className="text-lg font-semibold">{widget.name}</h3>
                                <p>{widget.text}</p>
                                <button
                                    className="absolute top-0 right-0 m-2 text-red-500"
                                    onClick={() => onRemoveWidget(category.id, widget.id)}
                                >
                                <RxCross2 size={20}/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WidgetCategories;
