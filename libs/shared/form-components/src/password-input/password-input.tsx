import { InputGroup, Input, InputRightElement } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { useState } from 'react'

interface PasswordInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const PasswordInput = (props: PasswordInputProps) => {
  const { onChange } = props
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder="Enter password"
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
