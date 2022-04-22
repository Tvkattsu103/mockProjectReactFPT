// import React from "react";
// import Header from "../UI/Header";
// import SpacingGrid from './../Home/SpacingGrid';
// import { Grid, Box, ButtonGroup, Popover, Typography } from '@mui/material';
// import MonthBest from './../Home/MonthBest';

// const Search = () => {
//   return (
//     <>
//       <Header></Header>
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Box sx={{ backgroundColor: "#81d4fa" }}>
//             <ButtonGroup
//               variant="text"
//               aria-label="text button group"
//               size="large"
//             >
//               {categories.map((ca) => {
//                 return (
//                   <Box
//                     key={ca.id}
//                     aria-owns={open ? "mouse-over-popover" : undefined}
//                     aria-haspopup="true"
//                     onMouseEnter={handlePopoverOpen}
//                     onMouseLeave={handlePopoverClose}
//                   >
//                     <Button>{ca.name}</Button>
//                   </Box>
//                 );
//               })}
//               <Popover
//                 id="mouse-over-popover"
//                 sx={{
//                   pointerEvents: "none",
//                 }}
//                 open={open}
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 onClose={handlePopoverClose}
//                 onMouseLeave={handlePopoverClose}
//                 disableRestoreFocus
//               >
//                 <Typography sx={{ p: 2 }}>{itemHover} use Popover.</Typography>
//               </Popover>
//             </ButtonGroup>
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Box sx={{ backgroundColor: "#81d4fa" }}>
//             <Carousel></Carousel>
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Box sx={{ backgroundColor: "#81d4fa" }}>
//             <SpacingGrid></SpacingGrid>
//           </Box>
//         </Grid>
//         <Grid item xs={12}>
//           <Box sx={{ backgroundColor: "#81d4fa" }}>
//             <MonthBest></MonthBest>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// };
// export default Search;
