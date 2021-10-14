import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';


import lib from '../../pages/lib';
import { useAuth } from '../../core/hooks/useAuth';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);

  const [ profile, setProfile ] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      let reqData = await lib.fetchUserProfile(user?.refresh_token);
      setProfile(reqData);
    })();
   },[user, profile])

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} profile={profile}/>
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} profile={profile} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
