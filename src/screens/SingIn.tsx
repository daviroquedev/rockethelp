import { VStack, Heading, Icon, useTheme} from 'native-base'
import {Envelope, Key} from 'phosphor-react-native'
import {useState} from 'react'

import Logo from '../assets/logo_primary.svg'

import {Input} from '../components/Input'
import {Button} from '../components/Button'

export function SingIn(){

    const [name, setName] = useState('Davi');
    const [password, setPassword] = useState('');

    const { colors } = useTheme()

    function handleSingIn(){
        console.log(name, password)
    }

    return(
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
        <Logo/>
        <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
            Acesse sua conta
        </Heading>

        <Input placeholder="E-mail"
        mb={4}
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={3}/>}
        onChangeText={setName}
        />
        <Input placeholder="Senha"
        mb={8}
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={3}/>}
        secureTextEntry
        onChangeText={setPassword}
       />
       <Button title='Entrar' w="full" onPress={handleSingIn}/>
       
    </VStack>
    
    )

}