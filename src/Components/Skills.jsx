import { Container,Col,Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import AnimatedCircularProgressbar from "./AnimatedProgressbar";
import colorSharp from "../asserts/img/color-sharp.png"
import 'react-multi-carousel/lib/styles.css';



{/* <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                <CircularProgress variant="determinate"  value={25} />
                                <Box
                                    sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    }}
                                >
                                    <Typography
                                    variant="caption"
                                    component="div"
                                    color="text.secondary"
                                    >Web Developer</Typography>
                                </Box>
                                </Box>
                                <Stack spacing={2} direction="row">
                                    <CircularProgress variant="determinate" value={25} />
                                </Stack>
                                <Stack spacing={2} sx={{ flexGrow: 1 }}>
                                   
                                    <GradientCircularProgress />
                                
                                </Stack> */}
const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const progressBars = [
        { id: 1, percentage: 75 },
        { id: 2, percentage: 50 },
        { id: 3, percentage: 90 },
        // Add more progress bars as needed
      ];
      
      
    //   const GradientCircularProgress = () => {
    //     return (
    //       <React.Fragment>
    //         <svg width={0} height={0}>
    //           <defs>
    //             <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
    //               <stop offset="0%" stopColor="#e01cd5" />
    //               <stop offset="100%" stopColor="#1CB5E0" />
    //             </linearGradient>
    //           </defs>
    //         </svg>
    //         <CircularProgress
    //             size={100}
    //             thickness={4}
    //             variant="determinate" 
    //             value={25}
    //          sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
    //       </React.Fragment>
    //     );
    //   }

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry.orem Ipsum is simply dummy text of the printing and typesetting industry. 
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> 
                                
                                {progressBars.map((bar) => (
                                    <div className="item">
                                        <AnimatedCircularProgressbar
                                                key={bar.id}
                                                percentage={bar.percentage}
                                                className="image"
                                            />
                                        <h5>Web Developer</h5>
                                    </div>
                                ))}
                              
                       

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />

        </section>
      )

}
export default Skills; 