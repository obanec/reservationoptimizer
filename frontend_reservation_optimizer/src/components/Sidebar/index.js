import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom';
import './style.css';

const Sidebar = ({ open, onClose }) => {
  const pages = {
    Calendar: '/dashboard',
    Settings: '/settings'
  };

  const subItems = {
    Settings: {
      Users: '/user',
      Parameters: '/parameter',
    },
    Calendar: {
      'My meetings': '/meetings',
      'New meeting': '/meetings/new'
    }
  };

  const renderSubItems = (subItem) => {
    return Object.entries(subItem).map(([subItemName, subItemPath]) => (
      <ListItem key={subItemName} >
        <Link className='sidebar-menu-item' to={subItemPath}>
          <ListItemText primary={subItemName} />
        </Link>
      </ListItem>
    ));
  };

  const renderMenuItems = () => {
    return Object.entries(pages).map(([pageName, path]) => (
      <div key={pageName}>
        <ListItem button className="menu-item">
          <ListItemText primary={pageName} />
          {subItems[pageName] && (
            <IconButton
              className="sub-item-toggle"
              onClick={() => handleSubItemToggle(pageName)}
            >
              {openSubItems[pageName] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          )}
        </ListItem>
        {subItems[pageName] && (
          <Collapse
            in={openSubItems[pageName]}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              {renderSubItems(subItems[pageName])}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  const [openSubItems, setOpenSubItems] = React.useState({});

  const handleSubItemToggle = (pageName) => {
    setOpenSubItems({
      ...openSubItems,
      [pageName]: !openSubItems[pageName],
    });
  };

  return (
    <Drawer
      className="sidebar"
      variant="persistent"
      ModalProps={{
        keepMounted: true
      }}
      anchor='left'
      open={open}
      onClose={onClose}
      classes={{
        paper: 'sidebar-paper',
      }}
    >
      <button onClick={onClose}>☰</button>
      <List className="sidebar-list">
        {renderMenuItems()}
      </List>
    </Drawer>
  );
};

export default Sidebar;
