"use client";

import React from "react";
import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface PrintPdf {
}

const PrintPdf: React.FC = () => {
const contentRef = useRef<HTMLDivElement>(null);
const generatePDF = async () => {
    if (contentRef.current) {
      const canvas = await html2canvas(contentRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 format
  
      const imgWidth = 210; // Width of A4 in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Scale height proportionally
  
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  
      // Open in new tab
      const pdfBlob = pdf.output('blob');
      const pdfURL = URL.createObjectURL(pdfBlob); // Create a URL for the Blob
  
      window.open(pdfURL, '_blank'); // Open the PDF in a new tab
    }
  };
  
  return (
    <>
    <button
        className="ui-bg-[#003D2A] ui-p-5 ui-text-white ui-border ui-border-[#003D2A]"
        onClick={generatePDF}
      >
        Print
      </button>
     <div ref={contentRef} className="p-6 bg-gray-50 min-h-screen">
     
      <h1 className="text-3xl font-bold mb-6">Sunday BBQ</h1>

      {/* Custom List Items Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Custom List Items</h2>
        <span className="text-gray-700 block mb-4">3 items</span>
        <ul className="space-y-4">
          <li className="flex items-center">
            <input type="checkbox" id="item1" className="mr-4" />
            <label htmlFor="item1" className="text-lg">Go to dry cleaners before grocery run</label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="item2" className="mr-4" />
            <label htmlFor="item2" className="text-lg">Chicken</label>
          </li>
          <li className="flex items-center">
            <input type="checkbox" id="item3" className="mr-4" />
            <label htmlFor="item3" className="text-lg">Soap</label>
          </li>
        </ul>
      </section>

      {/* Fresh Produce Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Fresh Produce</h2>
        <span className="text-gray-700 block mb-4">4 items</span>
        <ul className="space-y-6">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-start">
              <input type="checkbox" id={`produce${i}`} className="mt-1 mr-4" />
              <label htmlFor={`produce${i}`} className="text-lg">
                <strong>DOLE Fresh Banana</strong>
                <div className="text-sm text-gray-600 mt-1">
                  400g ($1.24 per 100g) | Sale price: $2.35
                </div>
              </label>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </>
  );
};
 
export default PrintPdf;