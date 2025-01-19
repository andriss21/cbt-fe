import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import ComputerIcon from "@mui/icons-material/Computer";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Zap } from "lucide-react";

// Custom Styled Components
const GradientBackground = styled(Box)(({ theme }) => ({
  background: "#777777",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(4),
  color: "white",
}));

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <SchoolIcon sx={{ fontSize: 50, color: "white" }} />,
      title: "Ujian Online",
      description: "Fleksibel dan bebas lokasi",
      gridProps: { xs: 12, md: 6, lg: 4 }
    },
    {
      icon: <ComputerIcon sx={{ fontSize: 50, color: "white" }} />,
      title: "Akses Mudah",
      description: "Antarmuka modern dan intuitif",
      gridProps: { xs: 12, md: 6, lg: 4 }
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 50, color: "white" }} />,
      title: "Hasil Instan",
      description: "Dapatkan skor langsung",
      gridProps: { xs: 12, md: 12, lg: 4 }
    },
  ];

  return (
    <GradientBackground>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Header Section */}
          <Grid item xs={12} md={12} lg={12} sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                mb: 2,
                letterSpacing: -1,
              }}
            >
              Computer Based Test
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255,255,255,0.8)',
                mb: 4,
              }}
            >
              Ujian online cerdas untuk generasi masa depan
            </Typography>
          </Grid>

          {/* Features Section */}
          {features.map((feature, index) => (
            <Grid 
              item 
              key={index} 
              {...feature.gridProps}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card 
                  sx={{ 
                    background: 'rgba(255,255,255,0.1)', 
                    backdropFilter: 'blur(10px)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 3,
                  }}
                  elevation={0}
                >
                  {feature.icon}
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mt: 2, 
                      color: 'white', 
                      fontWeight: 'bold' 
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.7)',
                      mt: 1 
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}

          {/* Action Button Section */}
          <Grid 
            item 
            xs={12} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mt: 4 
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<Zap />}
                onClick={() => navigate("/login")}
                sx={{
                  borderRadius: 4,
                  px: 6,
                  py: 1.5,
                  fontWeight: 'bold',
                }}
              >
                Mulai Sekarang
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </GradientBackground>
  );
};

export default Home;