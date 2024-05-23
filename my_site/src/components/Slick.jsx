import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slick.css'

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Adicionando autoplay
    autoplaySpeed: 5000,  // Definindo a velocidade da reprodução automática em milissegundos
  };

  return (
    <Slider {...settings}>
        <div className='img-slick'>
            <img src="./img/bannerpizza.png" alt="Dunas de fortaleza" />
        </div>
        <div className='img-slick'>
            <img src="./img/bannerpizza.png" alt="estatua de iracema em fortaleza" />
        </div>
        <div className='img-slick'>
            <img src="./img/bannerpizza.png" alt="praia de fortaleza" />
        </div>
    </Slider>
  );
};

export default Slick;


