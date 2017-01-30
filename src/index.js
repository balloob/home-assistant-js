import { localStoragePreferences } from './modules/preferences';
import createReactor from './util/create-reactor';
import exposeModules from './util/expose-modules';
import util from './util/ui-util';
import { callApi } from './modules/api';

import * as auth from './modules/auth';
import * as config from './modules/config';
import * as entity from './modules/entity';
import * as entityHistory from './modules/entity-history';
import * as errorLog from './modules/error-log';
import * as event from './modules/event';
import * as logbook from './modules/logbook';
import * as moreInfo from './modules/more-info';
import * as navigation from './modules/navigation';
import * as notification from './modules/notification';
import * as pushNotification from './modules/push-notification';
import * as restApi from './modules/rest-api';
import * as service from './modules/service';
import * as stream from './modules/stream';
import * as sync from './modules/sync';
import * as template from './modules/template';
import * as view from './modules/view';
import * as voice from './modules/voice';
import * as customUi from './modules/custom-ui';

export default class HomeAssistant {
  constructor() {
    const reactor = createReactor();

    Object.defineProperties(this, {
      // attributes
      demo: {
        value: __DEMO__,
        enumerable: true,
      },

      dev: {
        value: __DEV__,
        enumerable: true,
      },

      localStoragePreferences: {
        value: localStoragePreferences,
        enumerable: true,
      },

      reactor: {
        value: reactor,
        enumerable: true,
      },

      util: {
        value: util,
        enumerable: true,
      },

      // methods
      callApi: {
        value: callApi.bind(null, reactor),
      },

      startLocalStoragePreferencesSync: {
        value: localStoragePreferences.startSync.bind(localStoragePreferences, reactor),
      },

      startUrlSync: {
        value: navigation.urlSync.startSync.bind(null, reactor),
      },

      stopUrlSync: {
        value: navigation.urlSync.stopSync.bind(null, reactor),
      },
    });

    exposeModules(this, reactor, {
      auth,
      config,
      customUi,
      entity,
      entityHistory,
      errorLog,
      event,
      logbook,
      moreInfo,
      navigation,
      notification,
      pushNotification,
      restApi,
      service,
      stream,
      sync,
      template,
      view,
      voice,
    });
  }
}
