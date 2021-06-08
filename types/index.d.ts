/// <reference path='collect.d.ts' />

import { IConfig } from '../src/interfaces/i-config-interface';

declare module 'collect-js' {
  const loadVGSCollect: (config: IConfig) => Promise<null>;
}
