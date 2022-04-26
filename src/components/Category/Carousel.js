import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: "Toddler Denim Jacket",
        imgPath: "https://www.gap.com/webcontent/0019/896/460/cn19896460.jpg",
    },
    {
        label: "100% Organic Classic V-Neck T-Shirt",
        imgPath: "https://www.gap.com/webcontent/0028/683/732/cn28683732.jpg",
    },
    {
        label: "Bali, Indonesia",
        imgPath:
            "https://www.gap.com/webcontent/0019/436/801/cn19436801.jpg",
    },
    {
        label: "Goč, Serbia",
        imgPath:
            "https://www.gap.com/webcontent/0028/165/641/cn28165641.jpg",
    },
    {
        label: "Goč, Serbia",
        imgPath:
            "https://www.gap.com/webcontent/0019/575/035/cn19575035.jpg",
    },
    {
        label: "Toddler Denim Jacket",
        imgPath: "https://www.gap.com/webcontent/0019/896/460/cn19896460.jpg",
    },
    {
        label: "Goč, Serbia",
        imgPath:
            "https://www.gap.com/webcontent/0028/165/641/cn28165641.jpg",
    },
    {
        label: "Goč, Serbia",
        imgPath:
            "https://www.gap.com/webcontent/0019/575/035/cn19575035.jpg",
    },
    {
        label: "100% Organic Classic V-Neck T-Shirt",
        imgPath: "https://www.gap.com/webcontent/0028/683/732/cn28683732.jpg",
    },
    {
        label: "Bali, Indonesia",
        imgPath:
            "https://www.gap.com/webcontent/0019/436/801/cn19436801.jpg",
    },

];
const rows = images.reduce(function (rows, key, index) {
    return (index % 5 == 0 ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows;
}, []);

function Carousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length/5;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    console.log(rows)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {rows.map((row, index) => (

                    <div style={{ textAlign: 'center' }}>
                        {row.map(col => (
                        // {
                        //     Math.abs(activeStep - index) <= 5 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 300,
                                        overflow: "hidden",
                                        width: "17%",
                                        margin: "0 10px"
                                    }}
                                    src={col.imgPath}
                                    alt={col.label}
                                />)
                        //     ) : null
                        // }
                        )}
                        {/* 
                            <>

                                <Box
                                    component="img"
                                    sx={{
                                        height: 300,
                                        overflow: "hidden",
                                        width: "17%",
                                        margin: "0 10px"
                                    }}
                                    src={step[1].imgPath}
                                    alt={step[1].label}
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        height: 300,
                                        overflow: "hidden",
                                        width: "17%",
                                        margin: "0 10px"
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        height: 300,
                                        overflow: "hidden",
                                        width: "17%",
                                        margin: "0 10px"
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        height: 300,
                                        overflow: "hidden",
                                        width: "17%",
                                        margin: "0 10px"
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            </>
                        ) : null} */}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft style={{ fontSize: '70px', marginTop: '-320px' }} />
                        ) : (
                            <KeyboardArrowRight style={{ fontSize: '70px', marginTop: '-320px' }} />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0} >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight style={{ fontSize: '70px', marginTop: '-320px' }} />
                        ) : (
                            <KeyboardArrowLeft style={{ fontSize: '70px', marginTop: '-320px' }} />
                        )}
                    </Button>
                }
            />
        </Box>
    );
}

export default Carousel;
