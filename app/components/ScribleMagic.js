import { Grid, Typography, Box } from "@mui/material";
import ScrollFunction from "./ScrollFunction";


const ScribleMagic =()=>{
    return(
        <Box p={{xs:2, sm:4, md:8}}>
<Typography 
  variant="h3" 
  color="#003A81" 
  textTransform={"uppercase"} 
  display={"flex"} 
  justifyContent={"center"} 
  mt={2}
  sx={{
    fontSize:{xs:"20px", sm:"28px", md:"1.125rem"}
  }}
>
  Scriblee Magic
</Typography>
<Typography 
  variant="subtitle1" 
  color="#09448D" 
  display={"flex"} 
  justifyContent={"center"} 
  textAlign={"center"} 
  lineHeight={"93%"} 
  textTransform={"uppercase"}
  fontWeight={400}
  mt={2}
  sx={{
    fontSize:{xs:"24px", sm:"36px", md:"3.75rem"},
    px:{xs:2, md:0}
  }}
>
  See How Their Art Turns Into Stories<br/>You'll Cherish Forever
</Typography>
<ScrollFunction/>
        </Box>
    )
}

export default ScribleMagic;