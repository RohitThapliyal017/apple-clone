
import { Box, Typography,styled } from "@mui/material";


const Component=styled(Box)({
    backgroundColor:'fff',
    display:'flex',
    justifyContent:'center',
    '& > p':
    {
        fontSize:14,
        padding:'24px 0',
        color:'#1d1d1f'
    }
})

const Info=()=>
{
    return (
        <Component>
            <Typography>
            Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.* 
            Plus No Cost EMI from most leading banks. <span style={{color:'#2997ff'}}>Shop now &gt;</span>
            </Typography>
        </Component>
    )
}
export default Info;