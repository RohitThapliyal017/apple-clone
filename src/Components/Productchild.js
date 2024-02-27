

import { Box,Typography,styled } from "@mui/material";

const Component=styled(Box)
({
    width:'100%',
    height:580,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    paddingTop:47,
    margin:'0 5px'
})

const Heading=styled(Typography)({
    fontWeight:600,
    fontSize:36
})


const Linkstyle=styled(Typography)({
    color:'#2997ff',
    display:'flex',
    gap:30,
    fontSize:21
})
const Productchild=({data})=>
{
    return (
        <Component style={{background:`url(${data.imageURL})50% 50% no-repeat`}}>
            <Heading style={{color:data.subHeadColor}}>{data.heading}</Heading>
            <Heading style={{color:data.subHeadColor}}>{data.subHeading}</Heading>

            <Linkstyle>
                <Typography><span>Learn More &gt;</span></Typography>
                <Typography><span>Buy &gt;</span></Typography>
            </Linkstyle>
        </Component>
    )
}
export default Productchild;