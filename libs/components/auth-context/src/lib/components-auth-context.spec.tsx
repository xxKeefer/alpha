import { render } from '@testing-library/react'

import ComponentsAuthContext from './components-auth-context'

describe('ComponentsAuthContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsAuthContext />)
    expect(baseElement).toBeTruthy()
  })
})
