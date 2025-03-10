// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Delete the channel.
   */
  'DELETE /teams/{team-id}/channels/{channel-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}',
    'delete'
  >;
  /**
   * Retrieve the list of channels in this team.
   */
  'GET /teams/{team-id}/channels': Operation<'/teams/{team-id}/channels', 'get'>;
  /**
   * Retrieve the properties and relationships of a channel. This method supports federation. Only a user who is a member of the shared channel can retrieve channel information.
   */
  'GET /teams/{team-id}/channels/{channel-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}',
    'get'
  >;
  /**
   * Update the properties of the specified channel.
   */
  'PATCH /teams/{team-id}/channels/{channel-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}',
    'patch'
  >;
  /**
   * Create a new channel in a team, as specified in the request body. When you create a channel, the maximum length of the channel&#x27;s displayName is 50 characters. This is the name that appears to the user in Microsoft Teams. If you&#x27;re creating a private channel, you can add a maximum of 200 members.
   */
  'POST /teams/{team-id}/channels': Operation<'/teams/{team-id}/channels', 'post'>;
}
