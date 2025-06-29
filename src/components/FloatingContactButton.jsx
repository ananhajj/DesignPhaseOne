import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingContactButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-8 right-8 bg-yellow-500 text-black p-4 rounded-full shadow-2xl hover:bg-yellow-400 transition-all duration-200 z-50 hover:scale-110 transform group"
            title="Contact Us"
        >
            <MessageCircle className="h-7 w-7" />
            <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Contact Us
            </span>
        </button>
    );
};

export default FloatingContactButton;
