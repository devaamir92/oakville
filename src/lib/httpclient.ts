/* eslint-disable no-async-promise-executor */
/* eslint-disable no-promise-executor-return */
import { getSession } from './getsession';

class HttpClient {
  async get(url: string, options?: RequestInit) {
    return new Promise(async (resolve, reject) => {
      try {
        const session = await getSession();
        const auth = session ? `Bearer ${session.user.token}` : '';
        const headers = {
          'Content-Type': 'application/json',
          Authorization: auth,
          ...options?.headers,
        };
        const res = await fetch(`${process.env.API_HOST}${url}`, {
          cache: 'no-cache',
          ...options,
          headers,
          method: 'GET',
        });
        return resolve(await res.json());
      } catch (error) {
        return reject(error);
      }
    });
  }
}

export const httpClient = new HttpClient();
