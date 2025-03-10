import qs from 'qs';
import * as http from '@microsoft/spark.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { UndoDeleteClient } from './undoDelete';

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
 * /teamwork/deletedChats
 * Provides operations to manage the deletedChats property of the microsoft.graph.teamwork entity.
 */
export class DeletedChatsClient {
  protected baseUrl = '/teamwork/deletedChats';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
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
   * `/teamwork/deletedChats/{deletedChat-id}/undoDelete`
   *
   * Provides operations to call the undoDelete method.
   */
  undoDelete(deletedChatId: string) {
    return new UndoDeleteClient(deletedChatId, this.http);
  }

  /**
   * `DELETE /teamwork/deletedChats/{deletedChat-id}`
   *
   */
  async delete(
    params?: Endpoints['DELETE /teamwork/deletedChats/{deletedChat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedChats/{deletedChat-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'deletedChat-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then(
        (res) => res.data as Endpoints['DELETE /teamwork/deletedChats/{deletedChat-id}']['response']
      );
  }

  /**
   * `GET /teamwork/deletedChats`
   *
   * Read the properties and relationships of a deletedChat object.
   */
  async list(
    params?: Endpoints['GET /teamwork/deletedChats']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedChats',
      [
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /teamwork/deletedChats']['response']);
  }

  /**
   * `GET /teamwork/deletedChats/{deletedChat-id}`
   *
   * Read the properties and relationships of a deletedChat object.
   */
  async get(
    params?: Endpoints['GET /teamwork/deletedChats/{deletedChat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedChats/{deletedChat-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'deletedChat-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) => res.data as Endpoints['GET /teamwork/deletedChats/{deletedChat-id}']['response']
      );
  }

  /**
   * `PATCH /teamwork/deletedChats/{deletedChat-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /teamwork/deletedChats/{deletedChat-id}']['body'],
    params?: Endpoints['PATCH /teamwork/deletedChats/{deletedChat-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/teamwork/deletedChats/{deletedChat-id}',
      [{ name: 'deletedChat-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then(
        (res) => res.data as Endpoints['PATCH /teamwork/deletedChats/{deletedChat-id}']['response']
      );
  }

  /**
   * `POST /teamwork/deletedChats`
   *
   */
  async create(
    body: Endpoints['POST /teamwork/deletedChats']['body'],
    params?: Endpoints['POST /teamwork/deletedChats']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/teamwork/deletedChats', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /teamwork/deletedChats']['response']);
  }
}
