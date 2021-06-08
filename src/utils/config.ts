import { DEFAULT_CONFIG } from '../constants/index';
import { IConfig } from '../interfaces/i-config-interface';

let config = DEFAULT_CONFIG;

const setConfig = (params: IConfig) => {
  if (params) {
    config = { ...params };
  }
};

const getConfig = () => config;

export { setConfig, getConfig };
