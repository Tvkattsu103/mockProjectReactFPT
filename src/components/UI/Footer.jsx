import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import EmailIcon from '@mui/icons-material/Email';
import HelpIcon from '@mui/icons-material/Help';
export default function Footer() {
  return (
  <footer>
    <Box
      px={{ xs: 3, sm: 10 }}
      py={{ xs: 5, sm: 10 }}
      bgcolor="primary.main"
      color="white"
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4} >
            <Box borderBottom={1}>
              <HelpIcon/>&nbsp;
                Help
            </Box>
            <Box className='FooterItem'>
              <Link className="Link" to="/Help" color="white">
                Help Contact
              </Link>
            </Box>
            <Box className='FooterItem'>
              <Link className="Link" to="" color="white">
                Support
              </Link>
            </Box>
            <Box className='FooterItem'>
              <Link className="Link" to="" color="white">
                Privacy
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
              <EmailIcon/>&nbsp;
              Messages
            </Box>
            <Box className='FooterItem'>
              <Link className="Link" to="" color="white">
                Backup
              </Link>
            </Box>
            <Box className='FooterItem'>
              <Link className="Link" to="" color="white">
                History
              </Link>
            </Box>
            <Box className='FooterItem'>
              <Link className="Link" to="" color="white">
                Roll
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box borderBottom={1}>
              <GroupsIcon/>&nbsp;
              Team 1
            </Box>
            <Box className='FooterItem'>
              <Link className="Link" to="" color="white">
                <SchoolIcon/>&nbsp;
                Đại học Khoa học Huế - Khoa CNTT
              </Link>
            </Box>
            <Box className='FooterItem'>
              <Link className="Link" to="" color="white">
                <p>Hoàng Thế Huy - Võ Anh Tuấn <br/>
                Huỳnh Văn Phương - Đỗ Minh Tuấn</p>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
          Material UI Workshop &reg; {new Date().getFullYear()}
        </Box>
      </Container>
    </Box>
  </footer>
  );
}
