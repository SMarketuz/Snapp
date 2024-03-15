import { Box, Text, Image, Button } from '@chakra-ui/react'
import React from 'react'
import { imgPeople } from '../../assets'

const Peoples = () => {
  return (
    <Box className='wrapper' mt={'100px'} ml={'10px'} mr={'10px'}>
        <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} flexWrap={'wrap'}>
            <Box>
                <Image src={imgPeople} fontSize={'90%'} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'40px'}>
                <Box color={'#5D5D5D'}> 
                    <Text fontSize={{base: '20px', sm: '25px', xl: '40px'}} fontWeight={'bold'}>تجربه   ی زندگی راحت تر، سریع تر و به <br />  صرفه تر با سوپر اپلیکیشن <span color={'#51AB59'}>اسنپ</span> </Text>
                </Box>
                <Box color={'#5D5D5D'}>
                    <Text>از درخواست خودرو گرفته تا سفارش غذا، خرید سوپر مارکتی، خرید بلیط سفر ، <br /> مشاوره پزشکی و روانشناسی، رزرو هتل و... را میتوانید با سوپر اپلیکیشن اسنپ  <br /> انجام دهید.</Text>
                </Box>
                <Box display={'flex'} gap={'20px'} flexWrap={'wrap'}>
                    <Button bgColor={'#51AB59'} color={'white'} fontWeight={'bold'} _hover={{bgColor: 'transparent', borderWidth: '1px', color: '#5D5D5D'}}>ارسال لینک دانلود</Button>
                    <Button pl={'20px'} pr={'20px'} borderColor={'#C0C0C0'} color={'#5D5D5D'} borderWidth={'1px'} bgColor={'transparent'} _hover={{bgColor: '#51AB59', color: 'white'}}>+98   0000  000 00 00</Button>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Peoples