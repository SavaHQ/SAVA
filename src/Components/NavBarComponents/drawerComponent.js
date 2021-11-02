import { ListItemText, MenuList } from "@material-ui/core";
import { Drawer, MenuItem } from "material-ui";
import React from "react";
import { NavLink } from "react-router-dom";

function DrawerComponent({ open, closeDrawer, onOpen }) {
  return (
    <Drawer open={open} onClose={closeDrawer(false)} onClick={onOpen()}>
      <div
        //   className={classes.fullList}
        role="presentation"
        onClick={closeDrawer(false)}
        onKeyDown={closeDrawer(false)}
      >
        <MenuList>
          {[1, 2, 3].map((prop, key) => {
            return (
              <NavLink to={prop.path} style={{ textDecoration: "none" }} key={key}>
                <MenuItem>
                  <ListItemText primary={prop.sidebarName} />
                </MenuItem>
              </NavLink>
            );
          })}
        </MenuList>
      </div>
    </Drawer>
  );
}

export default DrawerComponent;
