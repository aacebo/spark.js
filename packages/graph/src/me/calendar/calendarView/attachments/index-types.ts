// DO NOT EDIT THIS FILE
import type { Operation } from './../../../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /me/calendar/calendarView/{event-id}/attachments/{attachment-id}': Operation<
    '/me/calendar/calendarView/{event-id}/attachments/{attachment-id}',
    'delete'
  >;
  /**
   * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
   */
  'GET /me/calendar/calendarView/{event-id}/attachments': Operation<
    '/me/calendar/calendarView/{event-id}/attachments',
    'get'
  >;
  /**
   * The collection of FileAttachment, ItemAttachment, and referenceAttachment attachments for the event. Navigation property. Read-only. Nullable.
   */
  'GET /me/calendar/calendarView/{event-id}/attachments/{attachment-id}': Operation<
    '/me/calendar/calendarView/{event-id}/attachments/{attachment-id}',
    'get'
  >;
  /**
   */
  'POST /me/calendar/calendarView/{event-id}/attachments': Operation<
    '/me/calendar/calendarView/{event-id}/attachments',
    'post'
  >;
}
