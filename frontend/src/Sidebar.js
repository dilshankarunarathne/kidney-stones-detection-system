
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left" style={{ height: 64, width: 900 }}>
      <List>
        <ListItem>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem>
          <ListItemText primary="About" />
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Sidebar;
