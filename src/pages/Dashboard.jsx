import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Avatar,
  Card,
  ThemeProvider,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Book, BarChart2, Calendar, Play } from "lucide-react";
import Swal from "sweetalert2";

// Minimalist Styling
const CleanBackground = styled(Box)({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem",
  backgroundColor: "#f4f4f4",
});

const CleanCard = styled(Card)({
  background: "white",
  borderRadius: 16,
  border: "1px solid rgba(0,0,0,0.1)",
  padding: "2rem",
  maxWidth: 900,
  width: "100%",
  boxShadow: "none",
});

const FeatureCard = styled(Card)(({ theme }) => ({
  background: "white",
  border: "1px solid #e0e0e0",
  borderRadius: 16,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  height: "100%",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
  },
}));

const Dashboard = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username") || "Peserta";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/kisi-kisi.pdf";
    link.download = "kisi-kisi.pdf";
    link.click();
  };

  const mulaiUjian = () => {
    Swal.fire({
      title: "Persiapan Ujian",
      html: `
        <div style="color: #333; font-size: 16px;">
          <p>Ujian hanya dapat dikerjakan 1 kali.</p>
          <p>Nilai pertama akan disimpan.</p>
          <strong>Fokuslah saat mengerjakannya!</strong>
        </div>
      `,
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Mulai Ujian",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/access-token");
      }
    });
  };

  const features = [
    {
      icon: <Book size={40} color="#007bff" />,
      title: "Mata Pelajaran",
      description: "Pelajari kisi-kisi ujian",
      action: "Unduh",
      onClick: handleDownload,
    },
    {
      icon: <BarChart2 size={40} color="#28a745" />,
      title: "Riwayat Nilai",
      description: "Pantau perkembangan nilai",
      action: "Lihat",
      onClick: () => navigate("/result"),
    },
  ];

  return (
    <CleanBackground>
      <Container maxWidth="lg">
     
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* User Profile Section */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor: "primary.main",
                  mx: "auto",
                  mb: 2,
                  fontSize: "2.5rem",
                }}
              >
                {username[0].toUpperCase()}
              </Avatar>
              <Typography
                variant="h4"
                sx={{
                  color: "text.primary",
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Sugeng rawuh, {username}!
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "text.secondary",
                  maxWidth: 500,
                  mx: "auto",
                }}
              >
                Wes siap ujian tenan? Pilih menu ning ngisor untuk melanjutkan.
              </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Features Grid */}
            <Grid container spacing={3} sx={{ mb: 4 }}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <FeatureCard elevation={0}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <Box sx={{ mr: 2 }}>{feature.icon}</Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "text.primary",
                            mb: 0.5,
                          }}
                        >
                          {feature.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "text.secondary",
                          }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={feature.onClick}
                        >
                          {feature.action}
                        </Button>
                      </motion.div>
                    </Box>
                  </FeatureCard>
                </Grid>
              ))}
            </Grid>

            {/* Start Exam Button */}
            <Box sx={{ textAlign: "center" }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<Play />}
                  onClick={mulaiUjian}
                  sx={{
                    borderRadius: 0.6,
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Mulai Ujian
                </Button>
              </motion.div>
            </Box>
          </motion.div>
       
      </Container>
    </CleanBackground>
  );
};

export default Dashboard;