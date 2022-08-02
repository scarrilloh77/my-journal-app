import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { authState } from "../../store/auth";
import { journalState } from "../../store/journal";
import { SideBarItem } from "./SideBarItem";

interface ISideBar {
  drawerWidth: number;
}

export const SideBar = ({ drawerWidth = 240 }: ISideBar) => {
  const { displayName } = useSelector(authState);
  const { notes } = useSelector(journalState);
  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            {displayName}
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {notes.map((note) => {
            return <SideBarItem key={note.id} {...note} />;
          })}
        </List>
      </Drawer>
    </Box>
  );
};
