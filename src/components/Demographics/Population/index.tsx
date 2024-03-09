import AgeDistribution from './AgeDistribution';
import FamilyStatus from './FamilyStatus';
import Gender from './Gender';

import MaritalStatus from './MaritalStatus';

interface PopulationProps {
  PopulationData: { name: string; value: number }[];
  MaritalData: { name: string; value: number }[];
  AgeData: { name: string; value: number }[];
  familyStatus: { name: string; value: number }[];
}

function Population({
  PopulationData,
  MaritalData,
  AgeData,
  familyStatus,
}: PopulationProps) {
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
          <FamilyStatus data={familyStatus} />
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
