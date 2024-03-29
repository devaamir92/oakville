import type { QuerySort } from '@nestjsx/crud-request';

const sortlisting = (sortby: string): QuerySort => {
  switch (sortby) {
    case 'lts':
      return {
        field: 'Dom',
        order: 'ASC',
      };

    case 'ols':
      return {
        field: 'Dom',
        order: 'DESC',
      };

    case 'lth':
      return {
        field: 'Lp_dol',
        order: 'ASC',
      };
    case 'htl':
      return {
        field: 'Lp_dol',
        order: 'DESC',
      };
    case 'Cd':
      return {
        field: 'Cd',
        order: 'DESC',
      };

    default:
      return {
        field: 'Dom',
        order: 'ASC',
      };
  }
};

export default sortlisting;
