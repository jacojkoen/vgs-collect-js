import axios from 'axios';
import {
  SESSION_ID,
  ANALYTICS_EVENTS,
  VGS_COLLECT_KEEPER,
} from '../constants/index';
import { IConfig } from '../interfaces/i-config-interface';
import { setConfig, getConfig } from './config';
import { validateConfig } from './validation';

const registerScriptLoading = (params: IConfig) => {
  validateConfig(params);
  setConfig(params);
  trackEvent({
    type: ANALYTICS_EVENTS.LOADED_FROM_PACKAGE,
  });
};

const trackEvent = (event: any) => {
  const { vaultId, environment, version } = getConfig();
  let payload = '';

  const data = {
    env: environment,
    tnt: vaultId,
    userAgent: window.navigator.userAgent,
    version,
    timestamp: Date.now(),
    vgsCollectSessionId: SESSION_ID,
  };

  try {
    payload = window.btoa(JSON.stringify({ ...event, ...data }));
  } catch (err) {
    return;
  }

  axios({
    method: 'POST',
    url: `${VGS_COLLECT_KEEPER}/vgs`,
    data: payload,
  })
    .then(() => {
      return true;
    })
    .catch(() => {
      return;
    });
};

export { trackEvent, registerScriptLoading };
