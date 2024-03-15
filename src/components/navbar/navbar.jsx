import { Box, Text, Image, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { logo } from '../../assets'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('left')

    const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
    const sizes = ['xs']
  return (
    <Box boxShadow={'10px 10px 10px rgba(0, 0, 0, 0.1)'} pt={'10px'} pb={'20px'}>
        <Box className='wrapper' mt={'20px'} >
            <Box display={{base: 'none', xl: 'block'}}>
                <Box display={'flex'} justifyContent={'space-evenly'}>

                    <Box display={'flex'} gap={'40px'}  color={'#5D5D5D'}>
                    <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>تماس با ما</Text>
                        <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>درباره ما</Text>
                        <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>پنل سازمانی</Text>
                        <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>پیوستن به ناوگان اسنپ</Text>
                        <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>باشگاه رانندگان</Text>
                        <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>بلاگ</Text>
                        <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>فرصت های شغلیف</Text>
                    </Box>
                    <Box cursor={'pointer'} className='trans'>
                        <Image src={logo}  transform={'80deg'}/>
                    </Box>
                </Box>
            </Box>

            <Box display={{base: 'block', xl: 'none'}} ml={'10px'} mr={'10px'}>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={'20px'}>
                    {sizes.map((size) => (
                        <FontAwesomeIcon  icon={faBarsStaggered}  fontSize={'22px'} color={'green'} cursor={'pointer'} onClick={() => handleClick(size)}
                        key={size}
                        m={4}
                        />
                    ))}
                    <Box cursor={'pointer'} className='trans'>
                        <Image src={logo} />
                    </Box>
                </Box>

                <Drawer onClose={onClose} isOpen={isOpen} size={size}  defaultValue={placement} >
                    <DrawerOverlay />
                    <DrawerContent  bgColor={'rgb(93, 221, 93)'}>
                        <DrawerCloseButton color={'white'} />
                        <DrawerBody display={'flex'} flexDirection={'column'} gap={'20px'} color={'white'}>
                            <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>درباره ما</Text>
                            <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>پنل سازمانی</Text>
                            <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>پیوستن به ناوگان اسنپ</Text>
                            <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>باشگاه رانندگان</Text>
                            <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>بلاگ</Text>
                            <Text _hover={{color: 'green' , fontWeight: 'bold'}} cursor={'pointer'}>فرصت های شغلیف</Text>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar