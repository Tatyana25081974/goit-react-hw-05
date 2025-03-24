// CastSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './CastSlider.css'; // Підключення стилів

export const CastSlider = ({ cast }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 0, // постійна прокрутка
        disableOnInteraction: false,
      }}
      speed={2000} // плавність руху
      grabCursor={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      }}
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
