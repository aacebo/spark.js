// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /me/chats/{chat-id}': Operation<'/me/chats/{chat-id}', 'delete'>;
  /**
   */
  'GET /me/chats': Operation<'/me/chats', 'get'>;
  /**
   */
  'GET /me/chats/{chat-id}': Operation<'/me/chats/{chat-id}', 'get'>;
  /**
   */
  'PATCH /me/chats/{chat-id}': Operation<'/me/chats/{chat-id}', 'patch'>;
  /**
   */
  'POST /me/chats': Operation<'/me/chats', 'post'>;
}
