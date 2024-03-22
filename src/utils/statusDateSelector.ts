import moment from 'moment';

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

const statusDateSelector = (status: string, date: string) => {
  const statusData = statusMap.find(s => s.label === status);
  if (!statusData) {
    return null;
  }
  return `${statusData.text} in ${moment(date).format('MMM YYYY')}`;
};

export default statusDateSelector;
