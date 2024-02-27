import { Box,Typography,styled} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import { appleLogo } from "../Constants/Constant";
import { navData } from "../Constants/Constant";



    const Component=styled(Box)(
    {
        backgroundColor:'#f5f5f7',
        height:50,
        
    })

    const Navbar=styled(Box)({
        display:'flex',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        margin:'0,auto',
        // This is used when we have to style the child element with respect to parent element
        '& > *':
        {
            color:'rgba(0,0,0,0.8)',
            opacity:0.8,
            fontWeight:600,
            padding:'0 21px',
            fontSize:12
        }
    })
// Here i am Also taking help From Material UI which is A prebuilt Component element
const Header=()=>
{
    return(
        <Component>
        {/* For Image Only */}
            <Navbar>
                <img src={appleLogo} alt="Logo" style={{width:16}}/>
                {/* This is for Content which We are showing the loop */}
                {
                    navData.map(nav=>
                    (
                        <Typography>{nav}</Typography>
                    )
                    )
                }
                <SearchIcon fontSize="small"/>
                <WorkIcon fontSize="small"/>

            </Navbar>
        </Component>
    )
}

export default Header;