import React from 'react';

import Rooms from '../Rooms';

function Details() {
  return (
    <div
      id="details"
      className="flex flex-col gap-2 rounded border border-gray-300 bg-white p-4"
    >
      <h4 className="text-lg font-medium">Property Details</h4>
      <hr />
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col gap-2 md:w-1/5">
            <h4 className="text-base font-medium">Property Type</h4>
            <p className="text-sm">Att/Row/Twnhouse</p>
          </div>
          <div className="flex flex-col gap-2 md:w-1/5">
            <h4 className="text-base font-medium">Neighbourhood</h4>
            <p className="text-sm">Palermo West</p>
          </div>
          <div className="flex flex-col gap-2 md:w-1/5">
            <h4 className="text-base font-medium">Garage Spaces</h4>
            <p className="text-sm">5</p>
          </div>
          <div className="flex flex-col gap-2 md:w-1/5">
            <h4 className="text-base font-medium">Property Taxes</h4>
            <p className="text-sm">$ 9,000</p>
          </div>
          <div className="flex flex-col gap-2 md:w-1/5">
            <h4 className="text-base font-medium">Area</h4>
            <p className="text-sm">Halton</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-base font-medium">Drive</h4>
            <p className="text-sm">Pvt Double</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex w-full flex-wrap justify-between gap-5 md:w-1/3">
          <div className="flex flex-col gap-2" />
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-medium">Building</h4>
            <hr />
            <div className="flex flex-wrap gap-5">
              <div className="flex flex-col gap-2 md:w-1/5">
                <h4 className="text-base font-medium">Bedrooms</h4>
                <p className="text-sm">3 + 1</p>
              </div>
              <div className="flex flex-col gap-2 md:w-1/5">
                <h4 className="text-base font-medium">Bathrooms</h4>
                <p className="text-sm">4</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col flex-wrap gap-2">
            <h4 className="text-lg font-medium">Utilities</h4>
            <hr />
            <div className="flex flex-wrap gap-5">
              <div className="flex flex-col gap-2 md:w-1/5">
                <h4 className="text-base font-medium">Water</h4>
                <p className="text-sm">Municipal</p>
              </div>
              <div className="flex flex-col gap-2 md:w-1/5">
                <h4 className="text-base font-medium">Sewer</h4>
                <p className="text-sm">Sewers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="text-lg font-medium">Features</h4>
          <hr />
          <div className="flex flex-wrap gap-5">
            <div className="flex flex-col gap-2 md:w-1/5">
              <h4 className="text-base font-medium">Kitchen</h4>
              <p className="text-sm">1</p>
            </div>
            <div className="flex flex-col gap-2 md:w-1/5">
              <h4 className="text-base font-medium">Family Room</h4>
              <p className="text-sm">Y</p>
            </div>
            <div className="flex flex-col gap-2 md:w-1/5">
              <h4 className="text-base font-medium">Basement</h4>
              <p className="text-sm">Finished</p>
            </div>
            <div className="flex flex-col gap-2 md:w-1/5">
              <h4 className="text-base font-medium">Fireplace</h4>
              <p className="text-sm">Y</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col flex-wrap gap-2">
            <h4 className="text-lg font-medium">External Features</h4>
            <hr />
            <div className="flex gap-5">
              <div className="flex flex-col gap-2 ">
                <h4 className="text-base font-medium">External Finish</h4>
                <p className="text-sm">Brick</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col flex-wrap gap-2">
            <h4 className="text-lg font-medium">Property Features</h4>
            <hr />
            <div className="flex gap-5">
              <div className="flex gap-2">
                <span>Grnbelt/Conserv</span>
                <span>Hospital</span>
                <span>Park</span>
                <span>Ravine</span>
                <span>School</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-medium">Cooling And Heating</h4>
            <hr />
            <div className="flex w-full flex-wrap gap-2 md:gap-0 ">
              <div className="flex w-full flex-col gap-2 md:w-1/5">
                <h4 className="text-base font-medium">Cooling Type</h4>
                <p className="text-sm">Central Air</p>
              </div>
              <div className="flex w-full flex-col gap-2 md:w-1/5">
                <h4 className="text-base font-medium">Heating Type</h4>
                <p className="text-sm">Forced Air</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-medium">Property Information</h4>
            <hr />
            <div className="flex flex-wrap gap-5">
              <div className="flex flex-col gap-2">
                <h4 className="text-base font-medium">Days On Market</h4>
                <p className="text-sm">0{/* */} Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        <Rooms />
      </div>
    </div>
  );
}

export default Details;
