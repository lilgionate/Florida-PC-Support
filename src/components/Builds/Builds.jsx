import "./builds.scss";
import { Data } from "./BuildsData";
import ProgressBar from "./ProgressBar/ProgressBar";
// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Builds = () => {
  return (
    <section className="testimonial container section">
      <h1 className="section__title">POPULAR BUILDS</h1>
      <p className="section__subtitle">Discover top-performing builds crafted for every need, from gaming to content creation, offering unparalleled performance and style.</p>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, images, title, progress }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={images} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <div className="progress-bars">
                {progress.map((value, index) => (
                <ProgressBar key={index} done={value} />
                ))}
              </div>
              <button>View Build</button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Builds;