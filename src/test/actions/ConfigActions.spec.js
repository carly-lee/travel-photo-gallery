import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import { requestConfig, CONFIG_REQUEST, CONFIG_SUCCESS, CONFIG_FAILURE } from 'app/actions/ConfigActions';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares);
import config from '../../data/config.json';

describe('ConfigActions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates CONFIG_SUCCESS when fetching config.json has been done', () => {
    nock('http://localhost:3000')
      .get('/data/config.json')
      .reply(200, config);

    const expectedActions = [
      { type: CONFIG_REQUEST },
      { type: CONFIG_SUCCESS, payload: config }
    ];

    const store = mockStore({ config:[] });

    return store.dispatch(requestConfig())
                .then(() => { // return of async actions
                  expect(store.getActions()).toEqual(expectedActions)
                })
  })
})
