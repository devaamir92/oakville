import { updateSession } from '@lib/auth';

import { getSession } from '@lib/getsession';

import { getUser } from './getUser';

export const updateUser = async () => {
  const user = await getUser();
  console.log(user);
  await updateSession(user);

  const session = await getSession();
  console.log(session);
  return session;
};
