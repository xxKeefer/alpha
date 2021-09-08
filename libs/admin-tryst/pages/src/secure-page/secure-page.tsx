import axios from 'axios'
import { Center, Box, Stack, Heading, Button } from '@chakra-ui/react'

export const SecurePage = () => {
  const api = axios.create({
    baseURL: 'http://localhost:3333/api',

    withCredentials: true
  })
  return (
    <Center bgGradient="linear(to-t,purple.300,blue.200)" w="full" h="100vh">
      <Box bg="gray.100" borderRadius="md" p="8">
        <Center m="8">
          <Stack spacing={3}>
            <Heading as="h1" size="2xl" textAlign="center">
              Secure Page
            </Heading>
            <Heading as="h2" size="lg" textAlign="center">
              You have to be logged in.
            </Heading>
          </Stack>
        </Center>
        <Button
          colorScheme="purple"
          type="submit"
          onClick={async () => {
            const { data } = await api.get('/private')
            console.log({ data })
          }}
        >
          Send Req to Secure route on API
        </Button>
      </Box>
    </Center>
  )
}

export default SecurePage
