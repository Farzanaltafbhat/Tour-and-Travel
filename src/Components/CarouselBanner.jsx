// BannerCarousel.jsx
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/banner1.webp';
import banner2 from '../assets/banner2.webp';
import banner3 from '../assets/banner3.webp';
import './CarouselBanner.css'; // Import CSS for styling

const BannerCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
    };

    return (
        <div className="banner-carousel">
            <Slider {...settings}>
                <div className="banner-slide">
                    <img src={banner1} alt="Banner 1" />
                    <div className='text-container'>
                        <div className="banner-text"><h3 className='h3'>Get Upto 50% OFF on</h3>
                            <h2 className='h2'>Joy Short And Happy Trip</h2> </div>
                    </div>
                    <div className="white-line"></div> {/* White line */}
                </div>
                <div className="banner-slide">
                    <img src={banner2} alt="Banner 2" />
                    <div className='text-container'>
                        <div className="banner-text"><h3 className='h3'>Get Upto 50% OFF on</h3>
                            <h2 className='h2'>Joy Promotional Package</h2> </div>
                    </div>
                    <div className="white-line"></div> {/* White line */}
                </div>
                <div className="banner-slide">
                    <img src={banner3} alt="Banner 3" />
                    <div className='text-container'>
                        <div className="banner-text"><h3 className='h3'>Get Upto 50% OFF on</h3>
                            <h2 className='h2'>Joy Family Travel</h2> </div>
                    </div>
                    <div className="white-line"></div> {/* White line */}       </div>
            </Slider>
        </div>
    );
};

export default BannerCarousel;
