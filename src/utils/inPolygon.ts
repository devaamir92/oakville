import * as turf from '@turf/turf';

import geojson from '@assets/map/map.json';

const inPolygon = (res: Array<any>) => {
  const returnProp: any = [];

  const polygon = turf.polygon(geojson.features[0].geometry.coordinates[0]);
  res.forEach(function check(prop: any) {
    const inRural = turf.booleanPointInPolygon([prop.Lng, prop.Lat], polygon);

    if (inRural) {
      returnProp.push(prop);
    } else {
      const polygonUptown = turf.polygon(
        geojson.features[1].geometry.coordinates[0]
      );

      const inUptown = turf.booleanPointInPolygon(
        [prop.Lng, prop.Lat],
        polygonUptown
      );
      if (inUptown) {
        returnProp.push(prop);
      }
    }
  });
  return returnProp;
};

export default inPolygon;
