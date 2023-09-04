"use client"

export const HorizontalScroll = ({ children }) => {
    return (
        <div className="max-w-screen-xl w-full">
            <ul className="flex flew-row gap-5 py-4 overflow-y-auto scrollbar scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-h-[2px]">
                {children}
            </ul>
        </div>
    );
};
