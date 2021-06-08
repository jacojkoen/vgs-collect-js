import { IStateCallback } from './i-state-callback-interface';

export interface IVGSCollectGlobal {
  create: (id: string, env: string, callback: IStateCallback) => any;
  init: (callback: () => void) => any;
  load: (modulesList: []) => void;
  modules: [];
}
