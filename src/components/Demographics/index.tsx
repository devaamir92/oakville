import data from '@assets/demographics/data.json';

import Cultural from './Cultural';
import HouseHolds from './HouseHolds';
import Population from './Population';
import SocioEconomic from './SocioEconomic';

interface DemographicsProps {
  community: string;
}

const Demographics = async ({ community }: DemographicsProps) => {
  if (community === 'Uptown Core') {
    return (
      <div className="flex flex-auto flex-col">
        <Population
          AgeData={data.uptownCore.age}
          MaritalData={data.uptownCore.maritalStatus}
          PopulationData={data.uptownCore.gender}
          familyStatus={data.uptownCore.familyStatus}
        />
        <Cultural
          LanguageData={data.uptownCore.immigrationStatus}
          ImmigrationData={data.uptownCore.dominantLanguage}
        />
        <SocioEconomic
          EducationData={data.uptownCore.highestLevelOfEducation}
          EmploymentData={data.uptownCore.Employment}
        />
        <HouseHolds
          AgeHomes={data.uptownCore.ageOfHome.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
          OwnershipData={data.uptownCore.ownership.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
          StructuralTypes={data.uptownCore.structuralType.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
          StructuralDetails={data.uptownCore.structureDetails.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
        />
      </div>
    );
  }
  if (community === 'Iroquois Ridge North') {
    return (
      <div className="flex flex-auto flex-col">
        <Population
          AgeData={data.iroquisRidgeNorth.age}
          MaritalData={data.iroquisRidgeNorth.maritalStatus}
          PopulationData={data.iroquisRidgeNorth.gender}
          familyStatus={data.iroquisRidgeNorth.familyStatus}
        />
        <Cultural
          LanguageData={data.iroquisRidgeNorth.immigrationStatus}
          ImmigrationData={data.iroquisRidgeNorth.dominantLanguage}
        />
        <SocioEconomic
          EducationData={data.iroquisRidgeNorth.highestLevelOfEducation}
          EmploymentData={data.iroquisRidgeNorth.Employment}
        />
        <HouseHolds
          AgeHomes={data.iroquisRidgeNorth.ageOfHome.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
          OwnershipData={data.iroquisRidgeNorth.ownership.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
          StructuralTypes={data.iroquisRidgeNorth.structuralType.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
          StructuralDetails={data.iroquisRidgeNorth.structureDetails.map(
            item => ({
              ...item,
              value: Number(item.value),
            })
          )}
        />
      </div>
    );
  }
  if (community === 'Rural Oakville') {
    return (
      <div className="flex flex-auto flex-col">
        <Population
          AgeData={data.ruralOakville.age}
          MaritalData={data.ruralOakville.maritalStatus}
          PopulationData={data.ruralOakville.gender}
          familyStatus={data.ruralOakville.familyStatus}
        />
        <Cultural
          LanguageData={data.ruralOakville.immigrationStatus}
          ImmigrationData={data.ruralOakville.dominantLanguage}
        />
        <SocioEconomic
          EducationData={data.ruralOakville.highestLevelOfEducation}
          EmploymentData={data.ruralOakville.Employment}
        />
        <HouseHolds
          AgeHomes={data.ruralOakville.ageOfHome.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
          OwnershipData={data.ruralOakville.ownership.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
          StructuralTypes={data.ruralOakville.structuralType.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
          StructuralDetails={data.ruralOakville.structureDetails.map(item => ({
            ...item,
            value: Number(item.value),
          }))}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>Demographics not found</h1>
    </div>
  );
};

export default Demographics;
