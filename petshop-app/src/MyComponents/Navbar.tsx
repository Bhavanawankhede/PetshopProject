import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import PetsIcon from '@mui/icons-material/Pets';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import { orange } from '@mui/material/colors';
import { Link, Navigate, NavLink, Outlet, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';      
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useShoppingCart } from "../context/ShoppingCartContext"
import { Nav } from 'react-bootstrap';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ShoppingCart } from './ShoppingCart';
import Logout from './Logout';
import { useEffect, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import { isVisible } from '@testing-library/user-event/dist/utils';



const drawerWidth = 240;


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}


const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [showlogout,setShowLogout] = useState(false);
  let navigate = useNavigate();
  
  
  const { openCart, cartQuantity } = useShoppingCart()
  // const { openWish, wishQuantity } = useShoppingCart()
  // const {hideStoreItem,} = useShoppingCart()

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    navigate('/login')
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const showOpenCart = () =>{
    if(isLoggedIn){
    openCart();
    navigate('/shoppingCart');
    }
    else{
      openCart();
      navigate('/login')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('userEmail');

    if (token) {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }

})

const showLogoutBtn =() =>{
  let user = localStorage.getItem("userEmail")
  console.log("USER: "+ user)
  if(user!= null){
    <Button variant='text' href="/logout" sx={{color: 'white', visibility: "visible"}}  {...showLogoutBtn}><LogoutIcon/></Button>
    // setShowLogout(true);
  }
  else{
    setShowLogout(false);
  }
};

const logoutBtn = ()=>{
  navigate('/logout')
}

  



  // const handleSubmit = () => {
  //   {openCart}
  // }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
       { !isLoggedIn && <MenuItem onClick={handleMenuClose}><LoginIcon/>Login</MenuItem>}
       { !isLoggedIn && <MenuItem onClick={handleMenuClose}><LoginIcon/>Register</MenuItem>}
       { isLoggedIn && <MenuItem onClick={logoutBtn}><LoginIcon/>Logout</MenuItem>}
       {/* { isLoggedIn && <Button variant='text' href="/logout" sx={{color: 'white'}}  {...showLogoutBtn}><LogoutIcon/></Button>} */}

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {/* <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton> */}
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  



  return (
    <Box >
        <Outlet/>
        <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          
          <PetsIcon></PetsIcon>
          <Button variant="text" href="/home" sx={{color: 'white'}}>
            <Typography variant="h6"  component="div" textAlign={'center'}>
              Pet Store
            </Typography>
          </Button>
          <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {['Dog', 'Cat', 'Aquarium pets', 'Small Pets' , 'Birds' , 'Login'].map((text, index) => ( */}
            <ListItem  disablePadding>
              <ListItemButton component="a" href="/dog">
              {/* <ListItemButton>
              <Nav.Link to="dog" as={NavLink}>
            Dog
          </Nav.Link> */}
                <ListItemText primary={"Dog"} />
              </ListItemButton>
            </ListItem>
          {/* ))} */}
          <ListItem  disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary={"Cat"} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary={"Birds"} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary={"Aquerium  Pets"} />
              </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
              <ListItemButton component="a" href="#">
                <ListItemText primary={"About Us"} />
              </ListItemButton>
            </ListItem>
            <ListItem  >
              <ListItemText primary={"Login"} />
            </ListItem>
            <ListItem>
            <ListItemButton>
                <ListItemIcon><FacebookIcon color="primary"/></ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon><InstagramIcon sx={{ color: orange[300] }}/></ListItemIcon>
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon><GoogleIcon color="action"/></ListItemIcon>
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } ,'padding-right':'20'}}>
            <IconButton
            size="large"
            color="inherit">
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          
          {/* ///////////////////////////////////updated code */}
        {cartQuantity > 0 && (
           <Button
          // onClick={() => { openCart; hideStoreItem;}}
          onClick= {showOpenCart}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            className="rounded-circle"
          >
            
            <AddShoppingCartSharpIcon sx={{ color: 'white' }} fontSize="large"></AddShoppingCartSharpIcon> 
            
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                // transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
        {/* <div>
        <FavoriteIcon sx={{ color: 'white' }} fontSize="medium"></FavoriteIcon>
         </div> */}


          {/* updated code///////////////////////////////////////////////////// */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <Box>
           {/* { isLoggedIn && <Button variant='text' href="/logout" sx={{color: 'white'}}  {...showLogoutBtn}><LogoutIcon/></Button>} */}
            {/* <Link to="/logout">Logout</Link> */}
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
   
      {/* {showLogoutIcon} */}
    </Box>
   );
}



