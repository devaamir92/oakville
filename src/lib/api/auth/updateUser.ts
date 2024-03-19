import { updateSession } from '@lib/auth';

import { getSession } from '@lib/getsession';

import { getUser } from './getUser';

export const updateUser = async () => {
  const user = await getUser();
  await updateSession(user);

  const session = await getSession();
  return session;
};
