import React from 'react'
import ImageSlider from '../components/ImageSlider'
import ImageSlider1 from '../components/ImageSlider1'
import ImageSlider2 from '../components/ImageSlider2'
import {Box,Image,Flex,Grid,GridItem} from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import ImageSlider3 from '../components/ImageSlider3'
import ImageSlider4 from '../components/ImageSlider4'
import ImageSlider5 from '../components/ImageSlider5'
import ImageSlider6 from '../components/ImageSlider6'
import ImageSlider7 from '../components/ImageSlider7'
import ImageSlider8 from '../components/ImageSlider8'
import Footer from '../components/Footer'

const HomePage = () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  return (
    <div>
        <Box>
        <ImageSlider/>
        </Box>
      
      <Box marginTop="20px">
      <ImageSlider1 />
      </Box>
      <Box marginTop="20px">
      <ImageSlider2 />
      </Box>
    
    <Box>
        <Box marginTop="30px">
        <Image src="https://i.postimg.cc/02P7ypsd/UHP-D-Fashionation-Coupon-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(3, 1fr)'>
            <GridItem>
            <Image src="https://i.postimg.cc/2SBjpKKH/D-Extra30-480x6001.jpg" width="450px"></Image>
            </GridItem>
        <GridItem><Image src="https://i.postimg.cc/pXWnHRfs/D-1950-480x6001.jpg" width="450px"></Image></GridItem>
        <GridItem><Image src="https://i.postimg.cc/dtgv99VG/D-Footwear-Fiesta-480x6001.jpg" width="450px"></Image></GridItem>
         </Grid>
    </Box>
    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-TopBanner-SectionHeaderStrip.gif" width="100%"></Image>
        <Box>
            <ImageSlider3 />
        </Box>
    </Box>
    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-DailyBanner-SectionHeaderStrip.gif" width="100%"></Image>
        <Box>
            <ImageSlider4 />
        </Box>
    </Box>
    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-gamesonze-header.jpg" width="100%"></Image>
        <Box>
           <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-gamesonze-scratchcard-GIF.gif" width="100%"></Image>
        </Box>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(3, 1fr)'>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-shopearn5cashback.jpg" width="450px"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-relianceone.jpg" width="450px"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-rewards-referearn1500.jpg" width="450px"></Image>
            </GridItem>
        </Grid>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem><Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-puma.jpg" width="330px" margin="auto"></Image></GridItem>
            <GridItem> <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-levis.jpg" width="330px" margin="auto"></Image></GridItem>
            <GridItem><Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-adidas.jpg" width="330px" margin="auto"></Image></GridItem> 
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-campus.jpg" width="330px" margin="auto"></Image>
            </GridItem>
        </Grid>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-netplay.jpg" width="330px" margin="auto"></Image>
            </GridItem>
          <GridItem><Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-produktbyJJ.jpg" width="330px" margin="auto"></Image></GridItem>
          <GridItem>
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-avaasa.jpg" width="330px" margin="auto"></Image>
          </GridItem>
          <GridItem>
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-GAS.jpg" width="330px" margin="auto"></Image>
          </GridItem>
         </Grid>
    </Box>
    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-JITstatics-header.jpg" width="100%"></Image>
        <Box>
           <ImageSlider5 />
        </Box>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-topstees.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-dresses.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
                <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-jeans.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-formals.jpg" width="330px" margin="auto"></Image>
            </GridItem>
        </Grid>
    </Box>
    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-dailymen-header.jpg" width="100%"></Image>
        <Box>
           <ImageSlider6 />
        </Box>
    </Box>
    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-dailywomen-header.jpg" width="100%"></Image>
        <Box>
           <ImageSlider7 />
        </Box>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-ethnicwear.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-sarees.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-handbags.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-jewellery.jpg" width="330px" margin="auto"></Image>
            </GridItem>
         </Grid>
    </Box>
    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-trendscarousel-header.jpg" width="100%"></Image>
        <Box>
           <ImageSlider8 />
        </Box>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sportsshoes.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-watches.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sandals.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-home.jpg" width="330px" margin="auto"></Image>
        </Grid>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-hiddengems-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-hiddengems-trendyol.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-hiddengems-koton.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-hiddengems-nakd.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-hiddengems-wknd.jpg" width="330px" margin="auto"></Image>
            </GridItem>
        </Grid>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-kidswear-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-kidswear-crocs-puma.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-kidswear-m&s-adidaskids.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-kidswear-uspa-pepejeans.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-kidswear-hellcat-cutecumber.jpg" width="330px" margin="auto"></Image>
        </Grid>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-topshelf-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-topshelf-ucb.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-topshelf-superdry.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-topshelf-aldo.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-.jpg" width="330px" margin="auto"></Image>
        </Grid>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-classicbrands-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-classicbrands-gulmoharjaipur.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-classicbrands-LP.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-classicbrands-aks.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/D-UHP-classicbrands-dennislingo.jpg" width="330px" margin="auto"></Image>
        </Grid>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-portico.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-quilts.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-decor.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-home.jpg" width="330px" margin="auto"></Image>
        </Grid>
    </Box>
    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-header.jpg" width="100%"></Image>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-AJIOGold.jpg" width="100%"></Image>
        <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem><Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-indie.jpg" width="330px" margin="auto"></Image></GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-home.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-trends.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-sneakerhood.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            </Grid>
        <Grid marginTop={"10px"} templateColumns='repeat(4, 1fr)'>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-wedding.jpg" width="330px" margin="auto"></Image>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-sarees.jpg" width="330px" margin="auto"></Image>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-watches.jpg" width="330px" margin="auto"></Image>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-westernwear.jpg" width="330px" margin="auto"></Image>
        </Grid>
        <Grid marginTop={"10px"} templateColumns='repeat(4, 1fr)'>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-accessories.jpg" width="330px" margin="auto"></Image>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-beauty.jpg" width="330px" margin="auto"></Image>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-IB.jpg" width="330px" margin="auto"></Image>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-discoveronlinestores-homegrownbrands.jpg" width="330px" margin="auto"></Image>
        </Grid>
    </Box>
    <Box>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/Discover%20Online%20Stores%20(D)111.jpg" width="100%"></Image>
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip%20new%20d.jpg" width="100%"></Image>
    </Box>
      <Box>
        
      </Box>
    </div>
  )
}

export default HomePage
