import logo from "@assets/logo_mob.svg";
import {
  AddBox,
  AddLocationAlt,
  AddShoppingCart,
  ChevronRight,
  Home as HomeIcon,
  Inventory,
  Logout as LogoutIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";

// Styled components for the drawer
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
}));

export const SidePanel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle the sidebar
  const toggleDrawer = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogOut = () => {
    localStorage.removeItem("userData");
    window.location.href = "/login";
  };

  // Sidebar links
  const sidePanelLinks = [
    { name: "Главная", icon: <HomeIcon />, href: "/" },
    { name: "Профиль", icon: <PersonIcon />, href: "/profile" },
    { name: "Новая посылка", icon: <AddBox />, href: "/calculate" },
    { name: "Мои адреса", icon: <AddLocationAlt />, href: "/address" },
    { name: "Мои посылки", icon: <Inventory />, href: "/packages" },
    {
      name: "Заказать",
      icon: <AddShoppingCart />,
      href: "http://t.me/meetmbox",
    },
  ];

  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{
        width: isCollapsed ? 80 : 270,
        flexShrink: 0,
        overflowX: "hidden",
        "& .MuiDrawer-paper": {
          width: isCollapsed ? 80 : 270,
          boxSizing: "border-box",
          transition: "width 0.3s",
        },
      }}
    >
      {/* Drawer Header */}
      <DrawerHeader
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => (window.location.href = "/")}
        >
          <img
            src={logo.src}
            alt="logo"
            style={{ width: isCollapsed ? "40px" : "100px" }}
          />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {sidePanelLinks.map((item, index) => (
          <Tooltip
            key={index}
            title={isCollapsed ? item.name : ""}
            placement="right"
            arrow
          >
            <ListItem
              component="a"
              href={item.href}
              key={index}
              sx={{
                display: "flex",
                justifyContent: isCollapsed ? "center" : "flex-start",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: isCollapsed ? "auto" : 56, // Remove extra spacing in collapsed state
                  textAlign: "center",
                  "&:hover": {
                    color: "#220CF3", // Change to your desired blue color on hover
                  },
                }}
              >
                {item.icon}
              </ListItemIcon>
              {!isCollapsed && <ListItemText primary={item.name} />}
            </ListItem>
          </Tooltip>
        ))}
      </List>

      <Box>
        <Divider />
        {/* Toggle Drawer Button */}
        <IconButton
          onClick={toggleDrawer}
          sx={{
            borderRadius: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isCollapsed ? (
            <ChevronRight />
          ) : (
            <div className="w-full flex items-center justify-center gap-2 text-base text-black">
              Закрыть меню
              <ChevronRight />
            </div>
          )}
        </IconButton>

        <Divider />

        {/* Log Out Button with Tooltip */}
        <Tooltip title="Выйти" placement="right" arrow>
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleLogOut}
          >
            <ListItemIcon
              sx={{
                width: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LogoutIcon sx={{ color: "red" }} />
            </ListItemIcon>
            {!isCollapsed && <ListItemText primary="Выйти" />}
          </ListItem>
        </Tooltip>
      </Box>
    </Drawer>
  );
};
