'use client'

import React from 'react';

// Logo Components
const FreshFoodsLogo = () => (
  <svg viewBox="0 0 200 60" className="w-48 h-14">
    <circle cx="30" cy="30" r="20" fill="#4CAF50"/>
    <path d="M20 30 Q30 20 40 30" stroke="white" strokeWidth="3" fill="none"/>
    <path d="M25 35 L35 35" stroke="white" strokeWidth="3"/>
    <text x="65" y="28" fontSize="16" fontFamily="Arial" fill="#333" fontWeight="bold">Fresh Foods</text>
    <text x="65" y="44" fontSize="14" fontFamily="Arial" fill="#666">Distributors</text>
  </svg>
);

const BankLogo = () => (
  <svg viewBox="0 0 200 60" className="w-48 h-14">
    <rect x="10" y="10" width="40" height="40" fill="#1E40AF"/>
    <text x="20" y="35" fontSize="20" fill="white" fontWeight="bold">FNB</text>
    <text x="65" y="28" fontSize="16" fontFamily="Arial" fill="#333" fontWeight="bold">First National</text>
    <text x="65" y="44" fontSize="14" fontFamily="Arial" fill="#666">Bank</text>
  </svg>
);

const NaturalChoiceLogo = () => (
  <svg viewBox="0 0 200 60" className="w-48 h-14">
    <rect x="10" y="10" width="40" height="40" fill="#8B4513"/>
    <path d="M15 35 L45 35" stroke="#4CAF50" strokeWidth="3"/>
    <path d="M30 15 L30 45" stroke="#4CAF50" strokeWidth="3"/>
    <text x="65" y="28" fontSize="16" fontFamily="Arial" fill="#333" fontWeight="bold">Natural Choice</text>
    <text x="65" y="44" fontSize="14" fontFamily="Arial" fill="#666">Foods</text>
  </svg>
);

const TaxCreditTemplate = () => {
  return (
    <div className="font-sans">
      {/* Cover Sheet - Page 1 */}
      <div className="h-[1123px] w-[794px] p-8 mx-auto">
        <div className="border rounded-lg p-6 h-full">
          <div className="text-right text-sm">Form No: ________</div>
          <div className="text-right text-sm mb-8">Date: ____/____/____</div>
          
          <h1 className="text-xl font-bold text-center border-b-2 pb-2 mb-8">
            DELIVERY FEE TAX CREDIT - COVER SHEET
          </h1>
          
          <div className="space-y-4 mb-8">
            <div className="grid grid-cols-2 gap-4">
              <div>Business Name: Tom's Grocery Store</div>
              <div>Consortium Member Number: 12345</div>
            </div>
            <div>Date Range: 01/01/2024 - 01/31/2024</div>
          </div>

          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="border-b-2">
                <th className="p-2 text-left">Invoice # and Supplier</th>
                <th className="p-2 text-right">Total Value</th>
                <th className="p-2 text-right">Eligible Products</th>
                <th className="p-2 text-right">% Eligible</th>
                <th className="p-2 text-right">Delivery Fees</th>
                <th className="p-2 text-right">Eligible Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">INV-2024-001<br/>Fresh Foods Distributors</td>
                <td className="p-2 text-right">$12,100.00</td>
                <td className="p-2 text-right">$12,000.00</td>
                <td className="p-2 text-right">99.2%</td>
                <td className="p-2 text-right">$500.00</td>
                <td className="p-2 text-right">$495.83</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">NC-245813<br/>Natural Choice Foods</td>
                <td className="p-2 text-right">$8,200.00</td>
                <td className="p-2 text-right">$8,000.00</td>
                <td className="p-2 text-right">97.6%</td>
                <td className="p-2 text-right">$400.00</td>
                <td className="p-2 text-right">$390.24</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={6} className="p-2 text-right border-t">
                  Total Eligible Delivery Fees Requested: $886.07
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* First Invoice - Page 2 */}
      <div className="h-[1123px] w-[794px] p-8 mx-auto">
        <div className="border rounded-lg p-6 h-full">
          <div className="flex justify-between items-start mb-8">
            <FreshFoodsLogo />
            <div>
              <div className="text-right text-sm">Invoice No: INV-2024-001</div>
              <div className="text-right text-sm">Date: 01/15/2024</div>
            </div>
          </div>

          <div className="text-sm mb-6">
            123 Distribution Lane<br/>
            Anytown, ST 12345
          </div>

          <div className="mb-8">
            <strong>Bill To:</strong><br/>
            Tom's Grocery Store<br/>
            456 Main Street<br/>
            Anytown, ST 12345
          </div>

          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="border-b-2">
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Fresh Apples (40 lbs)</td>
                <td className="p-2 text-right">$2,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Whole Grain Bread (200 loaves)</td>
                <td className="p-2 text-right">$3,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Fresh Eggs (100 dozen)</td>
                <td className="p-2 text-right">$5,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">1% Milk (200 gallons)</td>
                <td className="p-2 text-right">$2,000.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Tobacco Products</td>
                <td className="p-2 text-right">$100.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t-2">
                <td className="p-2">Subtotal</td>
                <td className="p-2 text-right">$12,100.00</td>
              </tr>
              <tr>
                <td className="p-2">Delivery Fee</td>
                <td className="p-2 text-right">$500.00</td>
              </tr>
              <tr className="font-bold">
                <td className="p-2">Total</td>
                <td className="p-2 text-right">$12,600.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* First Bank Statement - Page 3 */}
      <div className="h-[1123px] w-[794px] p-8 mx-auto">
        <div className="border rounded-lg p-6 h-full">
          <div className="flex justify-between items-start mb-8">
            <div>
              <BankLogo />
              <div className="text-sm mt-2">Monthly Statement</div>
            </div>
            <div className="text-right">
              <div>Statement Date: 01/31/2024</div>
              <div>Account: Tom's Grocery Store</div>
              <div className="text-sm">Account #: ****1234</div>
            </div>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="p-2">01/02/2024</td>
                <td className="p-2 bg-gray-800"></td>
                <td className="p-2 text-right bg-gray-800"></td>
              </tr>
              <tr>
                <td className="p-2">01/15/2024</td>
                <td className="p-2">Fresh Foods Distributors</td>
                <td className="p-2 text-right">$12,600.00</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2">01/20/2024</td>
                <td className="p-2 bg-gray-800"></td>
                <td className="p-2 text-right bg-gray-800"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Second Invoice - Page 4 */}
      <div className="h-[1123px] w-[794px] p-8 mx-auto">
        <div className="border rounded-lg p-6 h-full">
          <div className="flex justify-between items-start mb-8">
            <NaturalChoiceLogo />
            <div>
              <div className="text-right text-sm">Invoice No: NC-245813</div>
              <div className="text-right text-sm">Date: 01/22/2024</div>
            </div>
          </div>

          <div className="text-sm mb-6">
            789 Organic Way<br/>
            Anytown, ST 12345
          </div>

          <div className="mb-8">
            <strong>Bill To:</strong><br/>
            Tom's Grocery Store<br/>
            456 Main Street<br/>
            Anytown, ST 12345
          </div>

          <table className="w-full border-collapse mb-8">
            <thead>
              <tr className="border-b-2">
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Organic Bananas (30 cases)</td>
                <td className="p-2 text-right">$1,500.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Fresh Vegetables Assortment</td>
                <td className="p-2 text-right">$3,500.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Organic Yogurt (150 units)</td>
                <td className="p-2 text-right">$1,800.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Whole Grain Cereal (100 boxes)</td>
                <td className="p-2 text-right">$1,200.00</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">Energy Drinks (10 cases)</td>
                <td className="p-2 text-right">$200.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t-2">
                <td className="p-2">Subtotal</td>
                <td className="p-2 text-right">$8,200.00</td>
              </tr>
              <tr>
                <td className="p-2">Delivery Fee</td>
                <td className="p-2 text-right">$400.00</td>
              </tr>
              <tr className="font-bold">
                <td className="p-2">Total</td>
                <td className="p-2 text-right">$8,600.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
	{/* Second Bank Statement - Page 5 */}
      <div className="h-[1123px] w-[794px] p-8 mx-auto">
        <div className="border rounded-lg p-6 h-full">
          <div className="flex justify-between items-start mb-8">
            <div>
              <BankLogo />
              <div className="text-sm mt-2">Monthly Statement</div>
            </div>
            <div className="text-right">
              <div>Statement Date: 01/31/2024</div>
              <div>Account: Tom's Grocery Store</div>
              <div className="text-sm">Account #: ****1234</div>
            </div>
          </div>

          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2">
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="p-2">01/21/2024</td>
                <td className="p-2 bg-gray-800"></td>
                <td className="p-2 text-right bg-gray-800"></td>
              </tr>
              <tr>
                <td className="p-2">01/22/2024</td>
                <td className="p-2">Natural Choice Foods</td>
                <td className="p-2 text-right">$8,600.00</td>
              </tr>
<tr className="bg-gray-100">
                <td className="p-2">01/23/2024</td>
                <td className="p-2 bg-gray-800"></td>
                <td className="p-2 text-right bg-gray-800"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaxCreditTemplate;