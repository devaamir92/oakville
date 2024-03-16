const statusMap = [
  { label: 'Dft', text: 'Deal Fell Through', date: 'Unavail_dt' },
  { label: 'Exp', text: 'Expired', date: 'Xd' },
  { label: 'Ext', text: 'Extension', date: 'Xdtd' },
  { label: 'Sc', text: 'Sold Conditionally', date: 'Unavail_dt' },
  { label: 'Sld', text: 'Sold', date: 'Cd' },
  { label: 'Sus', text: 'Suspended', date: 'Dt_sus' },
  { label: 'Ter', text: 'Terminated', date: 'Dt_ter' },
  { label: 'Pc', text: 'Partially Conditional', date: 'Unavail_dt' },
  { label: 'Lsd', text: 'Leased', date: 'Td' },
];

const statusMapper = (status: string) => {
  const statusObj = statusMap.find(s => s.label === status);
  return statusObj ? statusObj.text : status;
};

export default statusMapper;
