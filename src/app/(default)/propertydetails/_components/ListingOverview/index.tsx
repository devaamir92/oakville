import React from 'react';
import { LuBath, LuBedDouble, LuParkingCircle, LuScan } from 'react-icons/lu';

interface ListingOverviewProps {
  bedrooms: number;
  bathrooms: number;
  parkingSpaces: number;
  squareFeet: number;
  price: number;
  status: string;
  daysOnMarket: number;
}

const ListingOverview: React.FC<ListingOverviewProps> = ({
  bedrooms,
  bathrooms,
  parkingSpaces,
  squareFeet,
  price,
  status,
  daysOnMarket,
}) => {
  return (
    <div className="flex flex-1 flex-col items-center justify-between gap-3 md:flex-row">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <LuBedDouble className="text-2xl text-gray-700" />
              <span className="text-sm font-medium">{bedrooms} bed</span>
            </div>
            <div className="flex flex-col items-center">
              <LuBath className="text-2xl text-gray-700" />
              <span className="text-sm font-medium">{bathrooms} bath</span>
            </div>
            <div className="flex flex-col items-center">
              <LuParkingCircle className="text-2xl text-gray-700" />
              <span className="text-sm font-medium">
                {parkingSpaces} parking
              </span>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <LuScan className="text-2xl text-gray-700" />
                <span className="text-sm font-medium">{squareFeet} sqft *</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="rounded bg-slate-300 px-2 py-0.5 text-xs font-medium">
              {status}
            </span>
            <span className="rounded bg-primary-200 px-2 py-0.5 text-xs font-medium text-primary-600">
              {daysOnMarket} days on market
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <p className=" text-3xl font-medium text-gray-800">
          ${price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ListingOverview;
