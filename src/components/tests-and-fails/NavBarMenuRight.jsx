import React, { useContext } from "react";
import GlobalContexts from "../context/global-contexts";

import { Box, ListItemIcon, Menu, MenuItem } from "@mui/material";
import ButtonSignup from "../Custom/ButtonSignup";
import ButtonSignin from "../Custom/ButtonSignin";
import ButtonLogout from "../Custom/ButtonLogout";
import LoginTokenContexts from "../context/login-token-context";

const NavBarMenuRight = () => {
  const { navMenuRightOpen, setNavMenuRightOpen } = useContext(GlobalContexts);
  const { userIsLoggedIn } = useContext(LoginTokenContexts);
  // Profile state

  return (
    <Menu
      id="account-menu"
      open={navMenuRightOpen}
      onClose={(e) => setNavMenuRightOpen(false)}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          bgcolor: "var(--color-primary-main)",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      {userIsLoggedIn ? (
        <MenuItem>
          <ListItemIcon>
            <ButtonLogout />
          </ListItemIcon>
          Logout
        </MenuItem>
      ) : (
        <Box>
          <ButtonSignup />
          <ButtonSignin />
        </Box>
      )}
    </Menu>
  );
};

export default NavBarMenuRight;
