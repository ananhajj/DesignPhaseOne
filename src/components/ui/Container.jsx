import React from "react";

export default function Container({
    children,
    className = "",
    size = "xl",
}) {
    const sizeClasses = {
        sm: "max-w-3xl",
        md: "max-w-5xl",
        lg: "max-w-7xl",
        xl: "max-w-[90rem]",
        full: "max-w-none",
    };

    return (
        <div
            className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`}
        >
            {children}
        </div>
    );
}
