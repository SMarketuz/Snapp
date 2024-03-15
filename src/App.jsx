import { Box } from '@chakra-ui/react'
import React from 'react'
import Footer from './components/footer/footer'
import GreenMan from './components/greenMan/greenMan'
import ImgLinks from './components/imgLinks/imgLinks'
import Navbar from './components/navbar/navbar'
import OrangeMan from './components/orangeMan/orangeMan'
import Peoples from './components/peoples/peoples'
import Video from './components/video/video'


const App = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box>
          <Peoples />
        </Box>
        <Box>
          <GreenMan />
        </Box>
        <Box>
          <ImgLinks />
        </Box>
        <Box>
          <OrangeMan />
        </Box>
        <Box>
          <Video />
        </Box>
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default App