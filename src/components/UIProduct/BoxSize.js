import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BoxSize() {
    return (
        <div>
            <h3>Chọn loại size</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={2} md={2}>
                        <Item>50</Item>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Item>51</Item>
                    </Grid>        <Grid item xs={2} md={2}>
                        <Item>52</Item>
                    </Grid>        <Grid item xs={2} md={2}>
                        <Item>53</Item>
                    </Grid>        <Grid item xs={2} md={2}>
                        <Item>54</Item>
                    </Grid>        <Grid item xs={2} md={2}>
                        <Item>55</Item>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Item>56</Item>
                    </Grid>        <Grid item xs={2} md={2}>
                        <Item>57</Item>
                    </Grid>        <Grid item xs={2} md={2}>
                        <Item>58</Item>
                    </Grid>        <Grid item xs={2} md={2}>
                        <Item>59</Item>
                    </Grid>        <Grid item xs={2} md={2}>
                        <Item>60</Item>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Item>61</Item>
                    </Grid>        <Grid item xs={2} md={2}>
                        <Item>62</Item>
                    </Grid>        <Grid item xs={2} md={2}>
                        <Item>63</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
