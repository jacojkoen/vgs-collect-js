import { IStateCallback } from '../interfaces/i-state-callback-interface';

const initCollect = (vaultId: string, environment: string): void => {
  window.VGSCollect.init = (callback: IStateCallback = () => {}) => {
    return window.VGSCollect.create(vaultId, environment, callback);
  };
};

export { initCollect };
