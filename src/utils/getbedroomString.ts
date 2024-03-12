const getBedroomString = (Br: any, Br_plus: any) => {
  if (Br === null) {
    return '0';
  }
  if (Br_plus > 0) {
    return `${Br} + ${Br_plus}`;
  }
  return `${Br}`;
};

export default getBedroomString;
