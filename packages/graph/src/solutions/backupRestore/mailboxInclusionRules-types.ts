// DO NOT EDIT THIS FILE
import type { Operation } from './../../common.ts';

export interface Endpoints {
  /**
   */
  'DELETE /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'delete'
  >;
  /**
   * The list of mailbox inclusion rules applied to the tenant.
   */
  'GET /solutions/backupRestore/mailboxInclusionRules': Operation<
    '/solutions/backupRestore/mailboxInclusionRules',
    'get'
  >;
  /**
   * The list of mailbox inclusion rules applied to the tenant.
   */
  'GET /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'get'
  >;
  /**
   */
  'PATCH /solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}': Operation<
    '/solutions/backupRestore/mailboxInclusionRules/{mailboxProtectionRule-id}',
    'patch'
  >;
  /**
   */
  'POST /solutions/backupRestore/mailboxInclusionRules': Operation<
    '/solutions/backupRestore/mailboxInclusionRules',
    'post'
  >;
}
