import Immigration from './Immigration';
import Language from './Language';

const ImmigrationData = [
  {
    name: 'Immigrant',
    value: 49,
  },
  {
    name: 'Non-Immigrant',
    value: 51,
  },
];

const LanguageData = [
  { name: 'English', value: 35 },
  { name: 'Mandarin', value: 11 },
  { name: 'Arabic', value: 10 },
  { name: 'Urdu', value: 7 },
  { name: 'Multiple Languages', value: 6 },
];

function SocioEconomic() {
  return (
    <>
      <div className="flex divide-x-[1px]">
        <div className="flex flex-1 flex-col gap-4 border-gray-300">
          <p className="text-md font-medium">Dominant Language</p>
          <Language data={LanguageData} />
        </div>
        <div className="flex flex-1 flex-col gap-4 ">
          <p className="text-md ml-4 font-medium">Immigration Status</p>
          <Immigration data={ImmigrationData} />
        </div>
      </div>
      <hr className="my-2" />
    </>
  );
}

export default SocioEconomic;
