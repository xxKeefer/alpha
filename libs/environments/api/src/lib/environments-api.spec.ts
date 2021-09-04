import { environmentsApi } from './environments-api'

describe('environmentsApi', () => {
  it('should work', () => {
    expect(environmentsApi()).toEqual('environments-api')
  })
})
