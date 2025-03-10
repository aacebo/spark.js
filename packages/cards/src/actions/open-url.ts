import { IAction, Action } from './base';

/**
 * When invoked, show the given url either by launching it in an external web browser or showing within an embedded web browser.
 */
export interface IOpenUrlAction extends IAction {
  type: 'Action.OpenUrl';

  /**
   * The URL to open.
   */
  url: string;
}

export type OpenUrlOptions = Omit<IOpenUrlAction, 'type' | 'url'>;

/**
 * When invoked, show the given url either by launching it in an external web browser or showing within an embedded web browser.
 */
export class OpenUrlAction extends Action implements IOpenUrlAction {
  type: 'Action.OpenUrl';

  /**
   * The URL to open.
   */
  url: string;

  constructor(url: string, options: OpenUrlOptions = {}) {
    super();
    this.type = 'Action.OpenUrl';
    this.url = url;
    Object.assign(this, options);
  }

  static from(options: Omit<IOpenUrlAction, 'type'>) {
    return new OpenUrlAction(options.url, options);
  }

  withUrl(value: string) {
    this.url = value;
    return this;
  }
}
