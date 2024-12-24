// Importando o Slider do pacote 'react-slick'
import Slider from 'react-slick';

// Importando os arquivos CSS necessários para o funcionamento do slider
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Importando um arquivo CSS personalizado para estilizar o slider
import './Slick.css';

// Definindo o componente funcional Slick
const Slick = () => {
  // Definindo as configurações do slider
  const settings = {
    dots: true,            // Mostra os pontos de navegação abaixo do slider
    infinite: true,        // Faz o slider ser infinito (volta ao início ao terminar)
    speed: 500,            // Define a velocidade da transição entre slides (em milissegundos)
    slidesToShow: 1,       // Número de slides mostrados por vez
    slidesToScroll: 1,     // Número de slides que são rolados por vez
    autoplay: true,        // Habilita a reprodução automática dos slides
    autoplaySpeed: 5000,   // Define a velocidade da reprodução automática (em milissegundos)
  };

  // Retorna o JSX do componente Slider
  return (
    <Slider {...settings}>   {/* Passa as configurações definidas para o Slider */}
      {/* Definindo cada slide com uma classe específica para estilização */}
      <div className='img-slick'>
        <img src="./img/bannerpizza.png" alt="banner1 promoção de pizza" />   {/* Imagem do primeiro slide */}
      </div>
      <div className='img-slick'>
        <img src="./img/slider2.png" alt="banner12 promoção de hamburguer" />  {/* Imagem do segundo slide */}
      </div>
    </Slider>
  );
};

// Exporta o componente Slick para ser usado em outras partes do aplicativo
export default Slick;
