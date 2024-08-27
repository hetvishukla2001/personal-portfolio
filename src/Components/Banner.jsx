import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headder from "../asserts/img/header-img1.svg"

const Banner = () =>{
    const [loopnum,setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ["Developer","Web Developer","Software Engineer","Student"]
    const [text,setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();

        },delta)

        return () => {clearInterval(ticker)}
    },[text])
    const tick = () => {
        let i = loopnum % toRotate.length
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)
        if(isDeleting){
            setDelta(preDelta => preDelta /2)

        }
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === ""){
            setIsDeleting(false)
            setLoopNum(loopnum + 1)
            setDelta(500)
        }
    }

    return (
        <>
        <section className='banner'id="home" >
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to Portfolio</span>
                    <h1>
                        {`hi I'm `}<span className='wrap'>{text}</span>
                    </h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect <ArrowRightCircle size={25} /></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headder} alt="Headder img" />
                
                </Col>

            </Row>
        </Container>
        </section>
        </>
    )

}
export default Banner;