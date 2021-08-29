import { Box, Center, Stack, Text } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { PasswordInput } from '@tryst/shared/form-components'

export const FormCard = () => {
    return (
        <Box p="12">
            <Center>
                <Stack spacing={3}>
                    <Text mb="8px">Email</Text>
                    <Input placeholder="Enter email address" />
                    <Text mb="8px">Password</Text>
                    <PasswordInput />
                </Stack>
            </Center>
        </Box>
    )
}

export default FormCard
