/* eslint-disable no-async-promise-executor */
/* eslint-disable no-promise-executor-return */
import { getSession } from './getsession';

class HttpClient {
  async get(url: string, options?: RequestInit) {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await getSession();
        const res = await fetch(`${process.env.API_HOST}${url}`, {
          cache: 'no-cache',
          ...options,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.user.token}`,
            ...options?.headers,
          },
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
