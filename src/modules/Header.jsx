import React from 'react'
import { NavLink } from 'react-router-dom'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import Menu from '../components/Drawer';
import { PATH } from '../hooks/path';

const Header = () => {
  return (
    <div className='w-full py-[25px] bg-[#0A1F44] pl-10  pr-] flex gap-[350px] items-center'>
        <a href='/' className='flex items-center gap-2'>
            <img src="src/assets/images/LogoImg.png" alt="Logo Image" width={40}/>
            <p className='text-[25px] text-[#D4AF37] font-bold'>Grand Film</p>
        </a>
        <nav className='flex items-center gap-10 text-white font-semibold'>
            <NavLink to={PATH.nowPlaying} className={"flex items-center gap-1 duration-300"}>
                <LiveTvIcon/>
                Now Playing
            </NavLink>
            <NavLink to={PATH.popular} className={"flex items-center gap-1 duration-300"}>
                <LocalFireDepartmentIcon/>
                Popular
            </NavLink>
            <NavLink to={PATH.topRated} className={"flex items-center gap-1 duration-300"}>
                <StarBorderIcon/>
                Top Rated
            </NavLink>
            <NavLink to={PATH.upcoming} className={"flex items-center gap-1 duration-300"}>
                <UpcomingIcon/>
                Upcoming
            </NavLink>
        </nav>
        <Menu/>
    </div>
  )
}

export default Header