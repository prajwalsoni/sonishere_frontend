import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListAltIcon from '@mui/icons-material/ListAlt';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export const navigationMenu=[
    {
        title:"Home",
        icon:<HomeIcon style={{ color: 'cyan' }} />, 
        path:"/"
    },
    {
        title: "Reels",
        icon:<ExploreIcon style={{ color: 'cyan' }} />,
        path:"/reels"
    },
    {
        title:"Create Reels" ,
        icon:<ControlPointIcon style={{ color: 'cyan' }} />,
        path:"/create-reels"
        
    },
    {
        title: "Notifications",
        icon:<NotificationsIcon style={{ color: 'cyan' }} />,
        path:"/notifications"
    },
    {
        title:"Messages" ,
        icon:<MessageIcon style={{ color: 'cyan' }} />,
        path:"/messages"
    },
    {
        title:"Lists" ,
        icon:<ListAltIcon style={{ color: 'cyan' }} />,
        path:"/lists"
    },
    {
        title:"Communities" ,
        icon:<GroupIcon style={{ color: 'cyan' }} />,
        path:"/communities"
    },
    
    {
        title:"Profile" ,
        icon:<AccountCircleIcon style={{ color: 'cyan' }} />,
        path:"/profile"
        
    },
   
]
