import React from 'react';
import { LuBath, LuBedDouble, LuParkingCircle, LuScan } from 'react-icons/lu';

import moment from 'moment';

import statusMapper from '@utils/statusMaper';
import statusDateSelector from '@utils/statusDateSelector';
import { PriceFormat } from '@utils/priceFormat';
import VerBtn from '@components/ListingCard/verBtn';

interface ListingOverviewProps {
  data: any;
  session?: any;
}

const ListingOverview: React.FC<ListingOverviewProps> = ({ data, session }) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-3 md:flex-row">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="relative flex items-center gap-8">
            <div className="flex flex-col items-center">
              <LuBedDouble className="text-2xl text-gray-700" />
              <div className="relative">
                {(!session || (session && !session.user.verified)) && (
                  <VerBtn
                    status={data.Status}
                    isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                    showBtn={false}
                  />
                )}
                <span className="text-sm font-medium">{data.Br} bed</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <LuBath className="text-2xl text-gray-700" />
              <div className="relative">
                {(!session || (session && !session.user.verified)) && (
                  <VerBtn
                    status={data.Status}
                    isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                    showBtn={false}
                  />
                )}
                <span className="text-sm font-medium">
                  {data.Bath_tot} bath
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <LuParkingCircle className="text-2xl text-gray-700" />
              <div className="relative">
                {(!session || (session && !session.user.verified)) && (
                  <VerBtn
                    status={data.Status}
                    isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                    showBtn={false}
                  />
                )}
                <span className="text-sm font-medium">
                  {data.Park_spcs} parking
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <LuScan className="text-2xl text-gray-700" />
                <div className="relative">
                  {(!session || (session && !session.user.verified)) && (
                    <VerBtn
                      status={data.Status}
                      isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                      showBtn={false}
                    />
                  )}
                  <span className="text-sm font-medium">
                    {data.Sqft} sqft *
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="rounded bg-slate-300 px-2 py-0.5 text-xs font-medium">
              {statusMapper(data.Lsc)}
            </span>
            {data.Status !== 'U' && (
              <span className="rounded bg-primary-200 px-2 py-0.5 text-xs font-medium text-primary-600">
                {(Number(data.Dom) === 0 && 'Just Now') ||
                  (Number(data.Dom) === 1 && '1 Day') ||
                  `${Number(data.Dom)} Days`}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between gap-2 text-2xl font-medium text-gray-800">
          <span className="text-lg">List Price:</span>
          <div className="relative">
            {(!session || (session && !session.user.verified)) && (
              <VerBtn
                status={data.Status}
                isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                showBtn={false}
              />
            )}
            {PriceFormat(Number(data.Lp_dol))}
          </div>
        </div>
        {data.Status === 'A' && (
          <p className="text-gray-600">
            Listed on {moment(data.Input_date).format('MMM YYYY')}
          </p>
        )}
        {data.Status === 'U' && data.Sp_dol > 0 && (
          <div className="flex items-center justify-between gap-2 text-2xl font-medium text-red-500">
            <span className="text-lg">{statusMapper(data.Lsc)} Price:</span>
            <div className="relative">
              {(!session || (session && !session.user.verified)) && (
                <VerBtn
                  status={data.Status}
                  isLocked={data.Lsc === 'Sld' ? true : data.Is_locked}
                  showBtn={false}
                />
              )}
              {PriceFormat(Number(data.Sp_dol))}
            </div>
          </div>
        )}
        <p className="text-gray-600">
          {statusDateSelector(
            data.Lsc,
            data.Cd ||
              data.Dt_ter ||
              data.Dt_sus ||
              data.Xd ||
              data.Xdtd ||
              data.Unavail_dt
          )}
        </p>
      </div>
    </div>
  );
};

export default ListingOverview;
