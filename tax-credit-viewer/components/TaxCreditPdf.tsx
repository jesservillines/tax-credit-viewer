'use client'

import React from 'react';
import TaxCreditTemplate from './TaxCreditTemplate';

const TaxCreditPDF: React.FC = () => {
  const componentRef = React.useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    const printContent = componentRef.current;
    if (!printContent) return;

    // Store current styles
    const originalStyle = document.body.style.cssText;

    // Apply print styles
    document.body.style.cssText = `
      @page {
        size: A4;
        margin: 20mm;
      }
    `;

    window.print();

    // Restore original styles
    document.body.style.cssText = originalStyle;
  };

  return (
    <div>
      <div className="p-4 flex justify-end print:hidden">
        <button 
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Generate PDF
        </button>
      </div>
      <div ref={componentRef}>
        <TaxCreditTemplate />
      </div>
    </div>
  );
};

export default TaxCreditPDF;