import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { LiveTvOutlined, LocalFireDepartment, StarBorder, Upcoming, UpcomingOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { PATH } from '../hooks/path';

export default function Menu() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Drawer
    anchor={anchor}
    open={state[anchor]}
    onClose={toggleDrawer(anchor, false)}
    sx={{
      '& .MuiDrawer-paper': {
        backgroundColor: '#2c3e50', // Change this to the color you want for the drawer background
      },
    }}
  >
    <Box
      className={"h-100vh"}
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            id:1,
            text:"Now playing",
            icon:<LiveTvOutlined/>,
            path:PATH.nowPlaying
          },
          {
            id:2,
            text:"Popular",
            icon:<LocalFireDepartment/>,
            path:PATH.popular
          },
          {
            id:3,
            text:"Top Rated",
            icon:<StarBorder/>,
            path:PATH.topRated
          },
          {
            id:4,
            text:"Upcoming",
            icon:<UpcomingOutlined/>,
            path:PATH.upcoming
          },
        ].map((item) => (
          <NavLink to={item.path} key={item.id}>
            <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon className='!text-[white]'>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} className='!text-white' />
            </ListItemButton>
          </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider className='!bg-white'/>
      <List>
        {['All mail', 'Trash'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon className='!text-[white]'>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} className='!text-white'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  </Drawer>
  

  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className='!text-[#D4AF37]'>
            <MenuIcon/>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
