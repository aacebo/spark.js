import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './protectionUnit-types.ts';

interface Param {
  readonly in: string;
  readonly name: string;
}

function getInjectedUrl(url: string, params: Array<Param>, data: Record<string, any>) {
  const query: Record<string, any> = {};

  for (const param of params) {
    if (param.in === 'query') {
      query[param.name] = data[param.name];
    }

    if (param.in !== 'path') {
      continue;
    }

    url = url.replace(`{${param.name}}`, data[param.name]);
  }

  return `${url}${qs.stringify(query, { addQueryPrefix: true })}`;
}

/**
 * /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit
 * Provides operations to manage the protectionUnit property of the microsoft.graph.restorePoint entity.
 */
export class ProtectionUnitClient {
  protected baseUrl = '/solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit';
  protected http: http.Client;

  constructor(
    protected readonly restorePointId: string,
    options?: http.Client | http.ClientOptions
  ) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `spark[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit`
   *
   * The site, drive, or mailbox units that are protected under a protection policy.
   */
  async get(
    params?: Endpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'restorePoint-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'restorePoint-id': this.restorePointId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /solutions/backupRestore/restorePoints/{restorePoint-id}/protectionUnit']['response']
      );
  }
}
