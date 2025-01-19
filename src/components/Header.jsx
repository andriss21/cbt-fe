import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

// Minimalist Theme
const minimalistTheme = {
  background: "transparent",
  textColor: "#333",
  accentColor: "#007bff",
};

// Styled Components
const CleanAppBar = styled(AppBar)({
  background: minimalistTheme.background,
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0,0,0,0.1)',
});

const MinimalistButton = styled(Button)(({ theme }) => ({
  borderRadius: "8px",
  textTransform: "none",
  fontWeight: 500,
  color: minimalistTheme.textColor,
  padding: "8px 16px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.05)",
    color: minimalistTheme.accentColor,
  },
}));

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    navigate("/login");
    setMobileOpen(false);
  };

  const MenuItems = () => (
    <Grid 
      container 
      spacing={2} 
      alignItems="center" 
      justifyContent={isMobile ? "center" : "flex-end"}
      direction={isMobile ? "column" : "row"}
    >
      {!token ? (
        <>
          <Grid item>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MinimalistButton 
                component={Link} 
                to="/"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </MinimalistButton>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MinimalistButton 
                component={Link} 
                to="/login"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </MinimalistButton>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MinimalistButton 
                variant="outlined"
                color="primary"
                component={Link} 
                to="/register"
                onClick={() => setMobileOpen(false)}
              >
                Register
              </MinimalistButton>
            </motion.div>
          </Grid>
        </>
      ) : (
        <>
          <Grid item>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MinimalistButton 
                component={Link} 
                to="/dashboard"
                onClick={() => setMobileOpen(false)}
              >
                Dashboard
              </MinimalistButton>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MinimalistButton 
                component={Link} 
                to="/profile"
                onClick={() => setMobileOpen(false)}
              >
                Profile
              </MinimalistButton>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MinimalistButton 
                color="error"
                onClick={handleLogout}
              >
                Logout
              </MinimalistButton>
            </motion.div>
          </Grid>
        </>
      )}
    </Grid>
  );

  return (
    <CleanAppBar position="static" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Grid 
            container 
            alignItems="center" 
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item xs={6} sm={4}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ cursor: 'pointer', display: 'inline-block' }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: minimalistTheme.textColor,
                  }}
                  onClick={() => navigate("/")}
                >
                  Computer Based Test
                </Typography>
              </motion.div>
            </Grid>

            {isMobile ? (
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  sx={{ color: minimalistTheme.textColor }}
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>

                <Drawer
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={() => setMobileOpen(false)}
                  sx={{
                    "& .MuiDrawer-paper": {
                      width: "250px",
                      background: "white",
                    },
                  }}
                >
                  <Box sx={{ padding: 2, height: '100%' }}>
                    <MenuItems />
                  </Box>
                </Drawer>
              </Grid>
            ) : (
              <Grid item xs={8} sm={8}>
                <MenuItems />
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </CleanAppBar>
  );
};

export default Header;