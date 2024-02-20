import HomeAge from './HomeAge';
import Ownership from './Ownership';
import StructureDetails from './StructureDetails';
import StructureType from './StructureType';

const OwnershipData = [
  {
    name: 'Owned',
    value: 77,
  },
  {
    name: 'Rented',
    value: 23,
  },
];

const StructuralTypes = [
  { name: 'Apartment', value: 2 },
  { name: 'Single Detached', value: 64 },
  { name: 'Semi Detached', value: 8 },
  { name: 'Moveable', value: 3 },
  { name: 'Row House', value: 23 },
];

const AgeHomes = [
  { name: '2011 +', value: 96 },
  { name: '1991 - 2010', value: 1 },
  { name: '1961 - 1990', value: 1 },
  { name: '-1960', value: 2 },
];

function HouseHolds() {
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
          <StructureDetails />
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
