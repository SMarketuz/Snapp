import { Box, Text } from '@chakra-ui/react'
import { faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
  return (
    <Box className='wrapper' mt={'100px'} mb={'60px'} ml={'10px'} mr={'10px'}>
        <Box display={'flex'} flexDirection={'column'} gap={'50px'}>
            <Box bgColor={'#C0C0C0'} width={'100%'} height={'1px'}>
            </Box>
            <Box display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'} gap={'20px'} alignItems={'center'}>
                <Box display={'flex'} gap={'15px'} color={'#404040'}fontSize={'25px'} >
                    <FontAwesomeIcon icon={faTelegram} className='icons' cursor={'pointer'} />
                    <FontAwesomeIcon icon={faInstagram} className='icons' cursor={'pointer'} />
                    <FontAwesomeIcon icon={faLinkedin} className='icons' cursor={'pointer'} />
                    <FontAwesomeIcon icon={faTwitter} className='icons' cursor={'pointer'} />
                </Box>
                <Box display={'flex'} gap={'40px'} flexWrap={'wrap'}>
                    <Text cursor={'pointer'}>تماس با ما</Text>
                    <Text cursor={'pointer'}>پیوستن به ناوگان اسنپ</Text>
                    <Text cursor={'pointer'}>فرصت های شغلی</Text>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer