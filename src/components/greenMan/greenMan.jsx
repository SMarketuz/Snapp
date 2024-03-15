import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { apple, bag, google, greenMan, smile } from '../../assets'

const GreenMan = () => {
  return (
    <Box bgColor={'#F9F9F9'} mt={'80px'} pt={'80px'} pb={'100px'}>
        <Box className='wrapper'  ml={'10px'} mr={'10px'}>
            <Box display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} gap={'50px'}>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                    <Box>
                        <Text fontSize={{base: '22px', sm: '35px', xl: '40px'}} fontWeight={'bold'} color={'#5D5D5D'}>نصب سوپر اپلیکیشن اسنپ!</Text>
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
                        <Box display={'flex'} flexWrap={'wrap'}>
                            <Box>
                                <Image src={bag} />
                            </Box>
                            <Box>
                                <Image src={google} />
                            </Box>
                        </Box>
                        <Box display={'flex'} flexWrap={'wrap'}>
                            <Box>
                                <Image src={smile} />
                            </Box>
                            <Box>
                                <Image src={apple} />
                            </Box>
                        </Box>
                        <Box>
                            <Button bgColor={'#51AB59'} color={'white'} fontWeight={'bold'} _hover={{bgColor: 'orange', borderWidth: '1px'}} p={{base:'10px', sm: '25px'}}>نشیکیلپا بو هخسن تفایرد</Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Image src={greenMan} fontSize={'90%'} />
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default GreenMan