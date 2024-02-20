import AgeDistribution from './AgeDistribution';
import FamilyStatus from './FamilyStatus';
import Gender from './Gender';

import MaritalStatus from './MaritalStatus';

const PopulationData = [
  {
    name: 'Female',
    value: 50,
  },
  {
    name: 'Male',
    value: 50,
  },
];

const MaritalData = [
  { name: 'Single', value: 27 },
  { name: 'Married', value: 67 },
  { name: 'Divorced/Separated', value: 5 },
  { name: 'Other', value: 1 },
];

const AgeData = [
  { name: '0-9', value: 18 },
  { name: '10-14', value: 8 },
  { name: '15-19', value: 8 },
  { name: '20-29', value: 12 },
  { name: '30-44', value: 31 },
  { name: '45-54', value: 13 },
  { name: '55-64', value: 6 },
  { name: '65-74', value: 2 },
  { name: '75+', value: 2 },
];

function Population() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-medium text-black">Population</h4>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:divide-x-[1px]">
        <div className="flex-1">
          <Gender data={PopulationData} />
        </div>
        <div className="flex-1">
          <FamilyStatus />
        </div>
      </div>
      <hr className="my-2" />

      <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:divide-x-[1px]">
        <div className="flex flex-1 flex-col gap-4 border-gray-300">
          <p className="text-md  font-medium">Marital Status</p>
          <MaritalStatus data={MaritalData} />
        </div>
        <div className="flex flex-1 flex-col gap-4 ">
          <p className="text-md ml-4 font-medium">Age Distibution</p>
          <AgeDistribution data={AgeData} />
        </div>
      </div>
      <hr className="my-2" />
    </div>
  );
}

export default Population;
