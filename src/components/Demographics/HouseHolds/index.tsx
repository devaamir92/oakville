import HomeAge from './HomeAge';
import Ownership from './Ownership';
import StructureDetails from './StructureDetails';
import StructureType from './StructureType';

interface HouseHoldsProps {
  OwnershipData: { name: string; value: number }[];
  StructuralTypes: { name: string; value: number }[];
  AgeHomes: { name: string; value: number }[];
  StructuralDetails: { name: string; value: number }[];
}

function HouseHolds({
  OwnershipData,
  StructuralTypes,
  AgeHomes,
  StructuralDetails,
}: HouseHoldsProps) {
  return (
    <div className=" ">
      <hr className="my-2" />
      <div className="flex items-center justify-between px-4">
        <h4 className="text-lg font-medium text-black">Households</h4>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 ">
        <div className="flex flex-1 flex-col border-gray-300 p-4 md:border-r">
          <p className="text-md font-medium">Structural Details</p>
          <StructureDetails data={StructuralDetails} />
        </div>
        <div className="flex flex-1 flex-col gap-4 border-gray-300 p-4">
          <p className="text-md font-medium">Ownership</p>
          <Ownership data={OwnershipData} />
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col gap-4 md:flex-row md:gap-0">
        <div className="flex flex-1 flex-col gap-4 border-gray-300 p-4 md:border-r">
          <p className="text-md font-medium">Age of Home (Years)</p>
          <HomeAge data={AgeHomes} />
        </div>
        <div className="flex flex-1 flex-col gap-4 border-gray-300 p-4">
          <p className="text-md font-medium">Structural Type</p>
          <StructureType data={StructuralTypes} />
        </div>
      </div>
    </div>
  );
}

export default HouseHolds;
