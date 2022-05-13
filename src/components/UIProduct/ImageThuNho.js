import * as React from 'react';
import Grid from '@mui/material/Grid';
import BoxSx from './Box';
import data from './DataType.json'
import { Button } from '@mui/material';

export default function SpacingGrid(props) {
    const [hightlight, setHightlight] = React.useState("https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw54a23ce3/original/120374/120374-604-l-launch-gts-9-womens-fast-and-supportive-running-shoe.png?sw=58&sh=58&sm=fit")
    const handleClick = (Type) => {
        props.getDataType(Type)
        setHightlight(Type)
    }
    return (
        <>
            <Grid sx={{ flexGrow: 1 }} container spacing={0}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={0}>
                        {data.map((value, key) => (
                            <Grid key={value.id} >
                                <Button sx={hightlight === value.Type ? {
                                    color: "red",
                                    background:"#4B7BE5",
                                } : {}}
                                    onClick={() => handleClick(value.Type)}
                                >
                                    <BoxSx
                                        img={value.Type}
                                        sx={{
                                            height: 50,
                                            width: 50,
                                        }}

                                    />
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}