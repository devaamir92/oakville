import React from 'react';

interface ListingHighlightsProps {
  data: any;
}

const ListingHighlights: React.FC<ListingHighlightsProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-medium">Highlights</p>
      <div className="flex flex-col gap-0 divide-y-[1px] divide-gray-300 md:flex-row md:gap-4 md:divide-y-0 lg:gap-12">
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">
                  Property Type
                </td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.Type_own1_out}
                </td>
              </tr>
              {data.Type_own1_out.includes('Condo') && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Maintenance Fees
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
                      currencyDisplay: 'symbol',
                    }).format(data.Maint)}
                  </td>
                </tr>
              )}
              {data.Drive && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Drive</td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Drive}
                  </td>
                </tr>
              )}
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">
                  Total Parking Spaces
                </td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.Tot_park_spcs}
                </td>
              </tr>
              {data.Stories && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Storeys</td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Stories}
                  </td>
                </tr>
              )}
              {data.Front_ft && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Lot Size
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Front_ft && data.Front_ft} x{' '}
                    {data.Depth && data.Depth}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">Exterior</td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.Constr1_out && data.Constr1_out}
                  {data.Constr2_out && data.Constr2_out}
                </td>
              </tr>
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">
                  Property Tax
                </td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                    currencyDisplay: 'symbol',
                  }).format(data.Taxes)}
                </td>
              </tr>

              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">Basement</td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.Bsmt1_out}
                  {data.Bsmt2_out && data.Bsmt2_out}
                </td>
              </tr>
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">
                  Dir/Cross St
                </td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.Cross_st}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListingHighlights;
