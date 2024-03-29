/* eslint-disable no-async-promise-executor */
/* eslint-disable no-promise-executor-return */
import { logout } from './auth';
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

        const response = await res.json();
        if (response.statusCode === 401) {
          await logout();
        }

        return resolve(response);
      } catch (error) {
        return reject(error);
      }
    });
  }
}

export const httpClient = new HttpClient();
