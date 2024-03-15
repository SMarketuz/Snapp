import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { orangeMan } from '../../assets'

const OrangeMan = () => {
  return (
    <Box className='wrapper' mt={'100px'} ml={'10px'} mr={'10px'}>
        <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'} gap={'50px'} flexWrap={'wrap'}>
            <Box>
                <Image src={orangeMan} fontSize={'90%'} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'end'} gap={'50px'} color={'#5D5D5D'}>
                <Text fontSize={{base: '22px', sm: '29px', xl: '40px'}} fontWeight={'bold'}>سوپر اپ اسنپ، پاسخی به تمام نیازها</Text>
                <Text>اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد <br /> شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید<br /> و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر<br /> درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و<br /> مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط<br /> (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default OrangeMan