import React, { useRef, useState } from "react";

export function DraggableCarousel({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    function onMouseDown(e: React.MouseEvent) {
        setIsDragging(true);
        setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
        setScrollLeft(containerRef.current?.scrollLeft || 0);
    }

    function onMouseLeave() {
        setIsDragging(false);
    }

    function onMouseUp() {
        setIsDragging(false);
    }

    function onMouseMove(e: React.MouseEvent) {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = x - startX;
        containerRef.current.scrollLeft = scrollLeft - walk;
    }

    return (
        <div
            ref={containerRef}
            className={`flex overflow-x-scroll gap-4 px-4 hide-scrollbar cursor-grab ${isDragging ? 'cursor-grabbing select-none' : 'select-auto'}`}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            style={{ userSelect: isDragging ? "none" : "auto" }}
        >
            {children}
        </div>
    );
}