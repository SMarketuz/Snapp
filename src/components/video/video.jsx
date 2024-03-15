import { Box, Button, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { greenMan, videoImg } from '../../assets'

const Video = () => {
  return (
    <Box className='wrapper' mt={'80px'} ml={'10px'} mr={'10px'}>
        <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={{base: '50px', xl: '0px'}} flexWrap={'wrap-reverse'}>
          <Box display={'flex'} flexDirection={'column'} gap={'40px'} alignItems={'center'}>
            <Box display={'flex'} flexDirection={'column'} gap={'40px'}>
              <Text color={'#404040'} fontSize={{base: '22px', sm: '29px', xl: '40px'}} fontWeight={'bold'}>در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به<br /> ناوگان اسنپ بپیوندید.</Text>
              <Text color={'#404040'}>بدون نیاز به مراجعه‌ی حضوری، از طریق این صفحه، تمام مراحل ثبت‌نام<br /> را اینترنتی انجام دهید.</Text>
            </Box>
            <Box>
              <Button bgColor={'#51AB59'} color={'white'} fontWeight={'bold'} _hover={{bgColor: 'orange', borderWidth: '1px', }} >ثبت نام رانندگان</Button>
            </Box>
          </Box>
          <Box>
              <Image src={videoImg} fontSize={'80%'} />
          </Box>

        </Box>
    </Box>
  )
}

export default Video