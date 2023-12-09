import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


const Slider = () => {
    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-[484px]"
                        src="https://media.istockphoto.com/id/1190043570/photo/happy-wedding-photography-of-bride-and-groom-at-wedding-ceremony-wedding-tradition-sprinkled.jpg?b=1&s=612x612&w=0&k=20&c=U5QcOqf91hMuvNLs-nO8VCxt0ThlaWw5sdzjSIBofls="
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-[484px]"
                        src="https://media.istockphoto.com/id/1399000012/photo/guests-throwing-confetti-over-bride-and-groom-as-they-walk-past-after-their-wedding-ceremony.jpg?b=1&s=612x612&w=0&k=20&c=nB79WGyMDUr-E0hwM1fdFIobPZC0bt_C5w6t2lieLck="
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-[484px]"
                        src="https://media.istockphoto.com/id/1064911922/photo/beautiful-wedding-couple-in-park.jpg?b=1&s=612x612&w=0&k=20&c=5OV4P222-rymxpo-mf6oo8fEpWcAcdfsM2387XJnxhQ="
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-[484px]"
                        src="https://media.istockphoto.com/id/960620772/photo/romantic-couple-newlyweds-bride-and-groom-holding-bouquet-of-pink-and-purple-flowers-and.jpg?b=1&s=612x612&w=0&k=20&c=RmfHVd0b_lkFGB5F5MXJ1fxF2-u5aKEst886XkEvuLg="
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-[484px]"
                        src="https://media.istockphoto.com/id/950698218/photo/honeymoon-couple-is-having-a-private-romantic-dinner.jpg?b=1&s=612x612&w=0&k=20&c=77dEgt-Ggt7iHJhBp8op6ntdLCLtwvCvlcVTQcmLdlw="
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Slider;