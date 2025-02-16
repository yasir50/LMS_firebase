import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import {
  BoldOutlined,
  CaretDownOutlined,
  CaretUpOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { routes } from "../routes";
import { items } from "../MenuItems";

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [open, setOpen] = useState(null);
  const handleClick = (index) => {
    setOpen(open === index ? null : index);
  };
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 1,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <AppBar
            sx={{
              width: drawerWidth,
              left: 0,
            }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                LMS
              </Typography>
            </Toolbar>
          </AppBar>
          <Toolbar />
          <List>
            {items.map((item, index) => (
              <Box key={item.label} sx={{ mb: 3 }}>
                <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                  {open === index ? <CaretUpOutlined /> : <CaretDownOutlined />}
                </ListItemButton>
                <Collapse in={open === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map((child) => (
                      <ListItemButton
                        key={child.route}
                        sx={{ pl: 3, mt: 1 }}
                        onClick={() => navigate(child.route)}
                      >
                        <ListItemIcon>
                          <MinusOutlined />
                        </ListItemIcon>

                        <ListItemText primary={child.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </Box>
            ))}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
          }}
        >
          {/* <Toolbar /> */}
          <Routes>
            {routes.map((item, index) => (
              <Route key={index} path={item.path} element={item.element} />
            ))}
          </Routes>
        </Box>
      </Box>
    </>
  );
}
