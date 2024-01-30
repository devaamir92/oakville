import EduLevel from './EduLevel';
import Employment from './Employment';

const EducationData = [
  {
    name: 'University',
    value: 58,
  },
  {
    name: 'College',
    value: 13,
  },
  {
    name: 'High School',
    value: 18,
  },
  {
    name: 'Other',
    value: 11,
  },
];

const EmploymentData = [
  {
    name: 'Employed',
    value: 74,
  },
  {
    name: 'Unemployed',
    value: 26,
  },
];

function SocioEconomic() {
  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <h4 className="text-lg font-medium text-black">Socio-Economic</h4>
      </div>
      <hr className="my-2" />
      <div className="flex">
        <div className="flex flex-1 flex-col gap-4 border-r border-gray-300 p-4">
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
