import { Box, Center, Stack, Text } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { PasswordInput } from '@tryst/shared/form-components'
import { FormControl, FormLabel, FormErrorMessage, Button } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { Credentials } from '@tryst/interfaces/users'
import { useHistory } from 'react-router-dom'
import { useAuth } from '@tryst/components/auth-context'

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(15).required()
})

const api = axios.create({
  baseURL: 'http://localhost:3333/api',

  withCredentials: true
})

const initial: Credentials = { email: '', password: '' }

interface AuthResponse {
  data: {
    accessToken: string
    user: {
      email: string
    }
  }
}

export const FormCard = () => {
  const history = useHistory()
  const { setToken, setUser } = useAuth()
  return (
    <Formik
      initialValues={initial}
      validationSchema={LoginSchema}
      onSubmit={async (values, actions) => {
        console.log({ values })
        const { data } = await api.post<Credentials, AuthResponse>('/auth/login', values)
        console.log({ data })
        setToken(data.accessToken)
        setUser(data.user)
        actions.setSubmitting(false)
        history.push('/secure')
      }}
    >
      {({ errors, touched, isSubmitting, handleSubmit, setFieldValue }) => (
        <Form>
          <Box p="12">
            <Center>
              <Stack spacing={4}>
                <FormControl isInvalid={!!errors.email && !!touched.email}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Enter email address"
                    onChange={(e) => setFieldValue('email', e.target.value)}
                  />
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.password && !!touched.password}>
                  <FormLabel>Password</FormLabel>
                  <PasswordInput onChange={(e) => setFieldValue('password', e.target.value)} />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button
                  colorScheme="purple"
                  isLoading={isSubmitting}
                  type="submit"
                  onClick={() => handleSubmit}
                >
                  Login
                </Button>
              </Stack>
            </Center>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

export default FormCard
