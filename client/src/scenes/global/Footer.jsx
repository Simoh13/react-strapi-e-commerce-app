import {Box, Typography, IconButton, useTheme} from '@mui/material'
import { shades} from '../../theme'

const Footer = () => {
    const { palette : { neutral}} = useTheme();
  return (

    <Box
    mt="70px"
    p="40px 0"
    backgroundColor={neutral.light}
    >
        <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px,30px,40px)"
        >
            <Box width="clamp(20%,30%,40%)">
                <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>ECOMER</Typography>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed volutpat tincidunt sem in ornare. Praesent non purus
                    non lorem vestibulum maximus id at ex. Vivamus ullamcorper
                    in tellus in efficitur. Vivamus blandit augue in consectetur
                    ornare. Nunc tincidunt quis lectus non placerat</div>
            </Box>
            <Box>
                <Typography variant='h4' fontWeight="bold" mb="30px" >About us</Typography>
                <Typography mb="30px">Careers</Typography>
                <Typography mb="30px">Our Stores</Typography>
                <Typography mb="30px">Terms and Conditions</Typography>
                <Typography mb="30px">Privacy Policy</Typography>
            </Box>
            <Box>
                <Typography variant='h4' fontWeight="bold" mb="30px" >Customer Care</Typography>
                <Typography mb="30px">Help Center</Typography>
                <Typography mb="30px">Track Your Order</Typography>
                <Typography mb="30px">Corporate And Bulk Purchasing</Typography>
                <Typography mb="30px">Refund</Typography>
            </Box>
            <Box width="clamp(20%,25%,30%)">
            <Typography variant='h4' fontWeight="bold" mb="30px" >Contact Us</Typography>
                <Typography mb="30px">50 Wiam Sba</Typography>
                <Typography mb="30px">Email: email@gmail.com</Typography>
                <Typography mb="30px">(213)557843257</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer