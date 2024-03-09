import Immigration from './Immigration';
import Language from './Language';

interface SocioEconomicProps {
  ImmigrationData: { name: string; value: number }[];
  LanguageData: { name: string; value: number }[];
}

const SocioEconomic = ({
  ImmigrationData,
  LanguageData,
}: SocioEconomicProps) => {
  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 md:divide-x-[1px]">
        <div className="flex flex-1 flex-col gap-4 border-gray-300">
          <p className="text-md font-medium">Dominant Language</p>
          <Language data={ImmigrationData} />
        </div>
        <div className="flex flex-1 flex-col gap-4 ">
          <p className="text-md ml-4 font-medium">Immigration Status</p>
          <Immigration data={LanguageData} />
        </div>
      </div>
      <hr className="my-2" />
    </>
  );
};

export default SocioEconomic;
