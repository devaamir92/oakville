import React from 'react';

import VerBtn from '@components/ListingCard/verBtn';

interface PropertyDetailsProps {
  data: any;
  session: any;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ data, session }) => {
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
                <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {(!session || (session && !session.user.verified)) && (
                    <VerBtn
                      status={data.Status}
                      isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                      showBtn={false}
                    />
                  )}
                  {data.Area}
                </td>
              </tr>
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">
                  Family Room
                </td>
                <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {(!session || (session && !session.user.verified)) && (
                    <VerBtn
                      status={data.Status}
                      isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                      showBtn={false}
                    />
                  )}
                  {data.Den_fr}
                </td>
              </tr>
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">Heat Type</td>
                <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {(!session || (session && !session.user.verified)) && (
                    <VerBtn
                      status={data.Status}
                      isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                      showBtn={false}
                    />
                  )}
                  {data.Heating}
                </td>
              </tr>
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">A/C</td>
                <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {(!session || (session && !session.user.verified)) && (
                    <VerBtn
                      status={data.Status}
                      isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                      showBtn={false}
                    />
                  )}
                  {data.A_c}
                </td>
              </tr>
              {data.Water_inc && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Water</td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}

                    {data.Water_inc}
                  </td>
                </tr>
              )}
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">Garage</td>
                <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {(!session || (session && !session.user.verified)) && (
                    <VerBtn
                      status={data.Status}
                      isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                      showBtn={false}
                    />
                  )}
                  {data.Gar_type}
                </td>
              </tr>
              {data.Handi_equipped && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Phys Hdcap-Equip
                  </td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}

                    {data.Handi_equipped}
                  </td>
                </tr>
              )}
              {data.Type_own1_out.includes('Condo') && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Locker</td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
                    {data.Locker}
                  </td>
                </tr>
              )}
              {data.Uffi && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">UFFI</td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    <VerBtn
                      status={data.Status}
                      isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                      showBtn={false}
                    />
                    {data.Uffi}
                  </td>
                </tr>
              )}
              <tr className="text-sm">
                <td className=" py-1.5 font-medium text-gray-500">
                  Neighbourhood
                </td>
                <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                  {(!session || (session && !session.user.verified)) && (
                    <VerBtn
                      status={data.Status}
                      isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                      showBtn={false}
                    />
                  )}
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
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
                    {data.Fpl_num}
                  </td>
                </tr>
              )}
              {data.Heat_inc && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Heating</td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
                    {data.Heat_inc}
                  </td>
                </tr>
              )}
              {data.Fuel && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Heating Source
                  </td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
                    {data.Fuel}
                  </td>
                </tr>
              )}
              {data.Sewers && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Sewers</td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
                    {data.Sewers}
                  </td>
                </tr>
              )}
              {data.Gar && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Garage Spaces
                  </td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
                    {data.Gar}
                  </td>
                </tr>
              )}
              {data.Elevator && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Elevator
                  </td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
                    {data.Elevator}
                  </td>
                </tr>
              )}
              {data.Laundry && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Laundry Level
                  </td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
                    {data.Laundry}
                  </td>
                </tr>
              )}
              {data.Pool && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">Pool</td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
                    {data.Pool}
                  </td>
                </tr>
              )}
              {data.Yr_built && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Approx Age
                  </td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
                    {data.Yr_built}
                  </td>
                </tr>
              )}
              {data.Condo_exp && (
                <tr className="text-sm">
                  <td className=" py-1.5 font-medium text-gray-500">
                    Exposure
                  </td>
                  <td className="relative py-1.5 text-right font-medium text-gray-700 md:text-left">
                    {(!session || (session && !session.user.verified)) && (
                      <VerBtn
                        status={data.Status}
                        isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                        showBtn={false}
                      />
                    )}
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
