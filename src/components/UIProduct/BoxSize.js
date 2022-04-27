import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BoxSize(props) {
    return (
        <div>
            <h3>Chọn loại size</h3>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(50)}>
                            <Item>50</Item>
                        </Button>
                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(51)}>
                            <Item>51</Item>
                        </Button>                    </Grid>        <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(52)}>
                            <Item>52</Item>
                        </Button>                    </Grid>        <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(53)}>
                            <Item>53</Item>
                        </Button>                    </Grid>        <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(54)}>
                            <Item>54</Item>
                        </Button>                    </Grid>        <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(55)}>
                            <Item>55</Item>
                        </Button>                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(56)}>
                            <Item>56</Item>
                        </Button>                    </Grid>        <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(57)}>
                            <Item>57</Item>
                        </Button>                    </Grid>        <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(58)}>
                            <Item>58</Item>
                        </Button>                    </Grid>        <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(59)}>
                            <Item>59</Item>
                        </Button>                    </Grid>        <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(60)}>
                            <Item>60</Item>
                        </Button>                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(61)}>
                            <Item>61</Item>
                        </Button>                    </Grid>        <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(62)}>
                            <Item>62</Item>
                        </Button>                    </Grid>        <Grid item xs={2} md={2}>
                        <Button onClick={(size) => props.getDataSize(63)}>
                            <Item>63</Item>
                        </Button>                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
