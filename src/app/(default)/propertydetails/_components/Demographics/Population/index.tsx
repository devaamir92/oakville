import AgeDistribution from './AgeDistribution';
import FamilyStatus from './FamilyStatus';
import Gender from './Gender';

import MaritalStatus from './MaritalStatus';
import TotalPopulation from './Total';

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
      {/* <TotalPopulation /> */}
      {/* <hr /> */}
      <div className="flex divide-x-2 ">
        <div className="flex-1">
          <Gender data={PopulationData} />
        </div>
        <div className="flex-1">
          <FamilyStatus />
        </div>
        {/* <div className="flex-1"> */}
        {/* <p className="text-lg font-medium">Marital Status</p> */}
        {/* <MaritalStatus data={MaritalData} /> */}
        {/* </div> */}
      </div>
      {/* <hr />
      <div className="flex">
        <div className="flex flex-1 flex-col border-r border-gray-300 p-4"></div>
        <div className="flex flex-1 flex-col border-gray-300 p-4">
          <p className="text-lg font-medium">Age Distibution</p>
          <AgeDistribution data={AgeData} />
        </div>
        <div className="flex-1"></div>
      </div> */}
    </div>
  );
}

export default Population;
