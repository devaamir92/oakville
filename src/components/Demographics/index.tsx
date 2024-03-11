import { promises as fs } from 'fs';

import Cultural from './Cultural';
import HouseHolds from './HouseHolds';
import Population from './Population';
import SocioEconomic from './SocioEconomic';

interface DemographicsProps {
  community: string;
}

const Demographics = async ({ community }: DemographicsProps) => {
  const file = await fs.readFile(
    `${process.cwd()}/src/assets/demographics/data.json`,
    'utf8'
  );
  const data = JSON.parse(file);

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
          AgeHomes={data.uptownCore.ageOfHome}
          OwnershipData={data.uptownCore.ownership}
          StructuralTypes={data.uptownCore.structuralType}
          StructuralDetails={data.uptownCore.structureDetails}
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
          AgeHomes={data.iroquisRidgeNorth.ageOfHome}
          OwnershipData={data.iroquisRidgeNorth.ownership}
          StructuralTypes={data.iroquisRidgeNorth.structuralType}
          StructuralDetails={data.iroquisRidgeNorth.structureDetails}
        />
      </div>
    );
  }
  if (community === 'Rural Oakville') {
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
          AgeHomes={data.iroquisRidgeNorth.ageOfHome}
          OwnershipData={data.iroquisRidgeNorth.ownership}
          StructuralTypes={data.iroquisRidgeNorth.structuralType}
          StructuralDetails={data.iroquisRidgeNorth.structureDetails}
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
