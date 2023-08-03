import { HStack, Switch, useColorMode } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode}= useColorMode();
  return (
    
        <HStack>
            <Switch isChecked={colorMode ==='dark'} onChange={toggleColorMode}/>
        </HStack>
  )
}

export default ColorModeSwitch
