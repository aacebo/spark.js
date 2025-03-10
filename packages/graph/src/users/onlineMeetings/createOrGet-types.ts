// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Create an onlineMeeting object with a custom specified external ID. If the external ID already exists, this API will return the onlineMeeting object with that external ID.
   */
  'POST /users/{user-id}/onlineMeetings/createOrGet': Operation<
    '/users/{user-id}/onlineMeetings/createOrGet',
    'post'
  >;
}
