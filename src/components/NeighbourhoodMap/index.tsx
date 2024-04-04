'use client';

import React, { Suspense, useState } from 'react';
import { BiPlusMedical } from 'react-icons/bi';
import { RiGraduationCapFill } from 'react-icons/ri';

import { FaDollarSign, FaHome, FaShoppingCart, FaTree } from 'react-icons/fa';

import MapPinLocation from '@components/MapPinLocation';
import cn from '@utils/cn';

import banksData from '@assets/banks/file.json';
import schoolsData from '@assets/schools/file.json';
import healthcare from '@assets/healthcare/file.json';
import parks from '@assets/parks/file.json';
import religious from '@assets/religious/file.json';
import stores from '@assets/stores/file.json';

interface NeighbourhoodMapProps {
  location: any;
}

const neighbourhoods = [
  { id: 1, name: 'Location' },
  { id: 2, name: 'Schools' },
  { id: 3, name: 'Banks' },
  { id: 4, name: 'Stores' },
  { id: 5, name: 'Religious Places' },
  { id: 6, name: 'Healthcare' },
  { id: 7, name: 'Parks & Rec' },
];

const NeighbourhoodMap: React.FC<NeighbourhoodMapProps> = ({ location }) => {
  const [active, setActive] = useState('Location');

  const getSchools = () => {
    const schools = [
      ...schoolsData.publicSchools.map(school => ({
        ...school,
        type: 'Public Schools',
        color: '#e0434a',
      })),
      ...schoolsData.catholicSchools.map(school => ({
        ...school,
        type: 'Catholic Schools',
        color: '#0E7AEB',
      })),
      ...schoolsData.montessoriSchools.map(school => ({
        ...school,
        type: 'Montessori Schools',
        color: '#F6AA3C',
      })),
      ...schoolsData.privateSchools.map(school => ({
        ...school,
        type: 'Private Schools',
        color: '#5EC976',
      })),
    ];

    return schools.map((school: any) => {
      return {
        name: school.name,
        address: school.address,
        lat: school.lat,
        lng: school.lng,
        type: school.type,
        color: school.color,
      };
    });
  };

  const handleActive = (name: string) => {
    setActive(name);
    // switch (name) {
    //   case 'Location':
    //     setData(location);
    //     setIcon(<FaHome size={14} />);
    //     break;
    //   case 'Schools':
    //     setData([
    //       ...publicSchools,
    //       ...catholicSchools,
    //       ...privateSchools,
    //       ...montessoriSchools,
    //     ]);
    //     setIcon(<RiGraduationCapFill size={14} />);
    //     break;
    //   case 'Banks':
    //     setData(
    //       banks.map(bank => {
    //         return {
    //           name: bank.name,
    //           address: bank.address,
    //           Lat: bank.lat,
    //           Lng: bank.lng,
    //           color: '#007BFF',
    //         };
    //       })
    //     );
    //     setIcon(<FaDollarSign size={14} />);
    //     break;
    //   case 'Stores':
    //     setData(
    //       stores.map(store => {
    //         return {
    //           name: store.name,
    //           address: store.address,
    //           Lat: store.lat,
    //           Lng: store.lng,
    //           color: '#F5A623',
    //         };
    //       })
    //     );
    //     setIcon(<FaShoppingCart size={14} />);
    //     break;
    //   case 'Religious Places':
    //     setData(
    //       religious.map(religion => {
    //         return {
    //           name: religion.name,
    //           address: religion.address,
    //           Lat: religion.lat,
    //           Lng: religion.lng,
    //           religion: religion.religion,
    //           color: '#8B0000',
    //         };
    //       })
    //     );
    //     setIcon(null);
    //     break;
    //   case 'Healthcare':
    //     setData(
    //       healthcare.map(hospital => {
    //         return {
    //           name: hospital.name,
    //           address: hospital.address,
    //           Lat: hospital.lat,
    //           Lng: hospital.lng,
    //           color: '#006080',
    //         };
    //       })
    //     );
    //     setIcon(<BiPlusMedical size={14} />);
    //     break;
    //   case 'Parks & Rec':
    //     setData(
    //       parks.map(park => {
    //         return {
    //           name: park.name,
    //           address: park.address,
    //           Lat: park.lat,
    //           Lng: park.lng,
    //           color: '#3E7D3B',
    //         };
    //       })
    //     );
    //     setIcon(<FaTree size={14} />);
    //     break;
    //   default:
    //     break;
    // }
  };

  const getIcon = (activeLink: string) => {
    switch (activeLink) {
      case 'Location':
        return <FaHome size={14} />;
      case 'Schools':
        return <RiGraduationCapFill size={14} />;
      case 'Banks':
        return <FaDollarSign size={14} />;
      case 'Stores':
        return <FaShoppingCart size={14} />;
      case 'Religious Places':
        return null;
      case 'Healthcare':
        return <BiPlusMedical size={14} />;
      case 'Parks & Rec':
        return <FaTree size={14} />;
      default:
        return <FaHome size={14} />;
    }
  };

  const getColor = (activeLink: string) => {
    switch (activeLink) {
      case 'Banks':
        return '#007BFF';
      case 'Stores':
        return '#F5A623';
      case 'Religious Places':
        return '#8B0000';
      case 'Healthcare':
        return '#006080';
      case 'Parks & Rec':
        return '#3E7D3B';
      default:
        return '#343a4a';
    }
  };

  const getData = (data: any, activeUrl: string) => {
    return data.map((item: any) => {
      return {
        name: item.name,
        address: item.address,
        Lat: item.lat,
        Lng: item.lng,
        religion: item.religion ? item.religion : null,
        color: activeUrl === 'Schools' ? item.color : getColor(activeUrl),
        type: item.type ? item.type : null,
      };
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex h-9 space-x-4 border-b border-gray-300 text-sm">
        {neighbourhoods.map(neighbourhood => {
          return (
            <button
              type="button"
              key={neighbourhood.name}
              onClick={() => {
                handleActive(neighbourhood.name);
              }}
              className={cn(
                'border-b-2 border-b-transparent transition-all duration-300 ease-in-out hover:border-b-gray-400',
                {
                  'border-b-2 border-primary-400 font-semibold text-primary-400':
                    active === neighbourhood.name,
                }
              )}
            >
              {neighbourhood.name}
            </button>
          );
        })}
      </div>

      <div className="h-56 overflow-hidden rounded">
        <Suspense key={active} fallback={<div>Loading...</div>}>
          <MapPinLocation
            data={(() => {
              if (active === 'Location') return getData(location, active);
              if (active === 'Schools') return getData(getSchools(), active);
              if (active === 'Banks') return getData(banksData.banks, active);
              if (active === 'Stores') return getData(stores, active);
              if (active === 'Religious Places')
                return getData(religious, active);
              if (active === 'Healthcare') return getData(healthcare, active);
              return getData(parks, active);
            })()}
            icon={getIcon(active)}
            zoom={10}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default NeighbourhoodMap;
