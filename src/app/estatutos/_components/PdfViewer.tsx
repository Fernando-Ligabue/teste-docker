"use client"

import React from 'react';

interface PDFViewerProps {
    pdf: string; // URL do PDF
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdf }) => {
    return (
        <div className="w-full max-w-screen-lg h-full min-h-[700px] mx-auto">
            <iframe
                src={pdf}
                width="100%"
                height="700px"
                title="PDF Viewer"
            />
        </div>
    );
};

export default PDFViewer;