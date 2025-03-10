// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  'POST /chats/{chat-id}/messages/{chatMessage-id}/softDelete': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/softDelete',
    'post'
  >;
}
