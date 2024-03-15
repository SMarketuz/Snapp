import { Box, Image, Text } from '@chakra-ui/react'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { img1, img2, img3, img4, img5, img6, img7, img8 } from '../../assets'

const ImgLinks = () => {
  return (
    <Box className='wrapper' mt={'100px'} ml={'10px'} mr={'10px'}>
        <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={'20px'} flexWrap={'wrap'}>
            <Box display={{base:  'none', xl: 'block'}} bgColor={'#F0F0F0'} height={'28px'} width={'28px'} pl={'5px'} pt={'3px'} rounded={'50%'}>
                <FontAwesomeIcon icon={faArrowLeft} fontSize={'20px'} color={'#C0C0C0'} />
            </Box>
            <Box display={'flex'} gap={'70px'} flexWrap={'wrap'} >
                <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Image src={img1} />
                    <Text color={'#404040'}>اسنپ کلاب</Text>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Image src={img2} />
                    <Text color={'#404040'}>اسنپ کلاب</Text>
                </Box>
            </Box>
            <Box display={'flex'} gap={'70px'} flexWrap={'wrap'}>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Image src={img3} />
                    <Text color={'#404040'}>اسنپ کلاب</Text>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Image src={img4} />
                    <Text color={'#404040'}>اسنپ کلاب</Text>
                </Box>
            </Box>
            <Box display={'flex'} gap={'70px'} flexWrap={'wrap'}>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Image src={img5} />
                    <Text color={'#404040'}>اسنپ کلاب</Text>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Image src={img6} />
                    <Text color={'#404040'}>اسنپ کلاب</Text>
                </Box>
            </Box>
            <Box display={'flex'} gap={'70px'} flexWrap={'wrap'}>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Image src={img7} />
                    <Text color={'#404040'}>اسنپ کلاب</Text>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
                    <Image src={img8} />
                    <Text color={'#404040'}>اسنپ کلاب</Text>
                </Box>
            </Box>
            <Box display={{base:  'none', xl: 'block'}} bgColor={'#F0F0F0'} height={'28px'} width={'28px'} pl={'5px'} pt={'3px'} rounded={'50%'}>
                <FontAwesomeIcon icon={faArrowRight} fontSize={'20px'} color={'#C0C0C0'} />
            </Box>
        </Box>
    </Box>
  )
}

export default ImgLinks