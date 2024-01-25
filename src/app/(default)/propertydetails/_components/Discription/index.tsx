import React from 'react';

import {
  MdBathtub,
  MdBed,
  MdBrightness1,
  MdGarage,
  MdHome,
} from 'react-icons/md';
function Discription() {
  return (
    <div className="flex flex-col gap-2 rounded border border-gray-300 bg-white p-4">
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium text-gray-800">3353 Liptay Ave</h4>
        <h4 className="text-xl font-medium text-gray-800">$1,200,000</h4>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">
          Oakville, Ontario, L6M 0M6
        </p>
        <p className="text-sm font-medium text-gray-500">
          Lot Front: 24.93 Feet / Lot Depth: 160.01 Feet
        </p>
      </div>
      <hr className="my-2" />
      <div className="flex">
        <div className="flex w-1/4 flex-col justify-between">
          <div className="flex items-center gap-2 font-medium">
            <MdBrightness1 className="text-black" size={20} />
            <span className="mt-0.5 text-sm">For Sale</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <MdBed className="text-black" size={20} />
            <span className="mt-0.5 text-sm">7 Beds</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <MdBathtub className="text-black" size={20} />
            <span className="mt-0.5 text-sm">5 Baths</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <MdHome className="text-black" size={20} />
            <span className="mt-0.5 text-sm">Townhouse</span>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <MdGarage className="text-black" size={20} />
            <span className="mt-0.5 text-sm">5 Parking</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-justify text-sm leading-6">
            Prestigious 700 Block of Sierra Drive. Tennis court estate on over
            25,300sqft lot. Classic brick traditional, just under 10,000sqft
            with incredible scale and floor plan. Public rooms are gracious with
            high ceilings and French doors opening to the gardens both front and
            back. Sited on a prime corner, offering views and sensational
            natural light. Two story entry hall with sweeping staircase, library
            with fireplace, music room, living room converts to screening,
            incredible formal dining room for over 14 guests. Gourmet kitchen is
            a chef&apos;s dream with walk-in refrigerator. Totaling 7 bedrooms /
            11 baths, with elegant primary suite offering dual marble baths and
            vast closets. Additional features include: elevator, tennis
            pavilion, outdoor kitchen, oversized 3 car garage. Gated with
            circular driveway for ample off-street parking, this is most special
            property in A+ Beverly Hills location.
          </p>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex">
        <p className="w-1/4 text-lg font-medium text-gray-800">Extras</p>
        <p className="flex-1 text-justify text-sm leading-6 text-gray-800">
          All Existing Appliances, All Existing Window Coverings, All Existing
          Electrical Light Fixtures, Garage Door Opener & Remote(S), Central
          Vacuum & Equipment, Central Air Conditioning, Gas Burner & Equipment,
          Hot Water Tank (Rental).
        </p>
        {/* <div className="flex flex-1 justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-base font-medium">Road Fee</span>
            <span className="text-sm">$174.61/month</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-base font-medium">Neighbourhood</span>
            <span className="text-sm">Palermo West</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-base font-medium">Property Taxes</span>
            <span className="text-sm">$ 9,000</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-base font-medium">Area</span>
            <span className="text-sm">Halton</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Discription;
