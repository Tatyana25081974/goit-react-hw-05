import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './CastSlider.css';

export const CastSlider = ({ cast }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={6}             
      slidesPerGroup={1}           
      loop={true}
      autoplay={{
        delay: 0,                  
        disableOnInteraction: false,
      }}
      speed={2000}                 
      grabCursor={true}
    >
      {cast.map(actor => (
        <SwiperSlide key={actor.id}>
          <div className="castItem">
            <img
              className="castImg"
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : 'https://via.placeholder.com/100x150?text=No+Image'
              }
              alt={actor.name}
            />
            <p className="actorName">{actor.name}</p>
            <p className="character">🎭 {actor.character}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
