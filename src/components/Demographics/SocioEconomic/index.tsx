import EduLevel from './EduLevel';
import Employment from './Employment';

interface SocioEconomicProps {
  EducationData: { name: string; value: number }[];
  EmploymentData: { name: string; value: number }[];
}

function SocioEconomic({ EducationData, EmploymentData }: SocioEconomicProps) {
  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <h4 className="text-lg font-medium text-black">Socio-Economic</h4>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col gap-4 md:flex-row md:gap-0">
        <div className="flex flex-1 flex-col gap-4 border-gray-300 p-4 md:border-r">
          <p className="text-md font-medium">Employment</p>
          <Employment data={EmploymentData} />
        </div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <p className="text-md font-medium">Highest Level of Education</p>
          <EduLevel data={EducationData} />
        </div>
      </div>
    </div>
  );
}

export default SocioEconomic;
