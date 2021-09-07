import { render } from '@testing-library/react'

import ComponentsJwtGate from './components-jwt-gate'

describe('ComponentsJwtGate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsJwtGate />)
    expect(baseElement).toBeTruthy()
  })
})
