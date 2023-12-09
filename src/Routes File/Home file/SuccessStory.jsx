import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const SuccessStory = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/successCopul')
            .then(res => res.json())
            .then(datas =>{
                setdata(datas)
                console.log(datas)
            })
    }, [])
    return (
        <div>

            <Carousel data-bs-theme="dark">
                {
                    data.map((Element, indexmum) => <Carousel.Item key={indexmum} className='h-[500px]'>
                        <Carousel.Caption>
                            <img
                                className="w-full h-[400px]"
                                src={Element.marriageimage}
                                alt="First slide"
                            />
                            <h5>{Element.marriageDate}</h5>
                            <p>{Element.successStory}</p>
                        </Carousel.Caption>
                    </Carousel.Item>)
                }

            </Carousel>

        </div>
    );
};

export default SuccessStory;