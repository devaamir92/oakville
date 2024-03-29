import React from 'react';

interface PropertyDetailsProps {
  data: any;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ data }) => {
  // const getURL = (sr: string, community: string) => {
  //   switch (sr) {
  //     case 'Sold':
  //       return `/${community.replace(' ', '-').toLowerCase()}`;
  //     case 'Sale':
  //       return `/${community.replace(' ', '-').toLowerCase()}`;
  //     case 'Lease':
  //       return `/${community.replace(' ', '-').toLowerCase()}`;
  //     default:
  //       return '';
  //   }
  // };

  return (
    <div className="flex flex-col gap-4">
      <p className="text-md font-medium">Details</p>
      <div className="flex flex-col gap-0 divide-y-[1px] divide-gray-300 md:flex-row md:gap-4 md:divide-y-0 lg:gap-12">
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">Area</td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.Area}
                </td>
              </tr>
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">
                  Family Room
                </td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.Den_fr}
                </td>
              </tr>
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">Heat Type</td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.Heating}
                </td>
              </tr>
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">A/C</td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.A_c}
                </td>
              </tr>
              {data.Water_inc && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Water</td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Water_inc}
                  </td>
                </tr>
              )}
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">Garage</td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.Gar_type}
                </td>
              </tr>
              {data.Handi_equipped && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Phys Hdcap-Equip
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Handi_equipped}
                  </td>
                </tr>
              )}
              {data.Type_own1_out.includes('Condo') && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Locker</td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Locker}
                  </td>
                </tr>
              )}
              {data.Uffi && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">UFFI</td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Uffi}
                  </td>
                </tr>
              )}
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">
                  Neighbourhood
                </td>
                <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {data.Community}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex-1">
          <table className="w-full">
            <tbody className="divide-y divide-gray-300 bg-white">
              {data.Fpl_num && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Fireplace
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Fpl_num}
                  </td>
                </tr>
              )}
              {data.Heat_inc && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Heating</td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Heat_inc}
                  </td>
                </tr>
              )}
              {data.Fuel && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Heating Source
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Fuel}
                  </td>
                </tr>
              )}
              {data.Sewers && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Sewers</td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Sewers}
                  </td>
                </tr>
              )}
              {data.Gar && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Garage Spaces
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Gar}
                  </td>
                </tr>
              )}
              {data.Elevator && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Elevator
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Elevator}
                  </td>
                </tr>
              )}
              {data.Laundry && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Laundry Level
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Laundry}
                  </td>
                </tr>
              )}
              {data.Pool && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Pool</td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Pool}
                  </td>
                </tr>
              )}
              {data.Yr_built && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Approx Age
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Yr_built}
                  </td>
                </tr>
              )}
              {data.Condo_exp && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Exposure
                  </td>
                  <td className=" py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {data.Condo_exp}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
