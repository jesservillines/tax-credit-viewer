'use client'

import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import TaxCreditTemplate from './TaxCreditTemplate';

const TaxCreditPDF: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="p-4 flex justify-end">
        <ReactToPrint
          trigger={() => (
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Generate PDF
            </button>
          )}
          content={() => componentRef.current}
          documentTitle="Tax_Credit_Documentation"
          pageStyle={`
            @page {
              size: A4;
              margin: 20mm;
            }
          `}
          onBeforeGetContent={() => {
            console.log("Preparing document...");
          }}
          onAfterPrint={() => {
            console.log("Document generated successfully!");
          }}
        />
      </div>
      <div ref={componentRef}>
        <TaxCreditTemplate />
      </div>
    </div>
  );
};

export default TaxCreditPDF;
