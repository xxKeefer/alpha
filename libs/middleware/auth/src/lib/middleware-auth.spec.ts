import { middlewareAuth } from './middleware-auth'

describe('middlewareAuth', () => {
  it('should work', () => {
    expect(middlewareAuth()).toEqual('middleware-auth')
  })
})
