import { FormCard } from '@tryst/shared/ui'
import { Center, Box, Stack, Heading } from '@chakra-ui/react'

export const LoginPage = () => {
  return (
    <Center bgGradient="linear(to-t,purple.300,blue.200)" w="full" h="100vh">
      <Box bg="gray.100" borderRadius="md" p="8">
        <Center m="8">
          <Stack spacing={3}>
            <Heading as="h1" size="2xl" textAlign="center">
              Tryst
            </Heading>
            <Heading as="h2" size="lg" textAlign="center">
              Admin Panel
            </Heading>
          </Stack>
        </Center>
        <FormCard></FormCard>
      </Box>
    </Center>
  )
}

export default LoginPage
