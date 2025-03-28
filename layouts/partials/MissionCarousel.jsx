import AnimatedText from "@components/AnimatedText";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const MissionCarousel = ({ missionCarousel }) => {
  const { enable, title, subtitle, list } = missionCarousel.frontmatter;

  return enable ? (
    <section className="section bg-secondary-600 py-24 scroll-mt-5" id={missionCarousel.slug}>
      <div className="container">
        <div className="mb-14">
          <div data-aos="fade-up-sm">
            <AnimatedText
              tag="h2"
              className="mb-4 text-black font-semibold text-center lg:col-8 mx-auto"
              content={title}
            />
          </div>
          <div data-aos="fade-up-sm" data-aos-delay="100">
            {markdownify(subtitle, "p", "lg:col-8 mx-auto text-center text-dark-primary text-h6 font-normal")}
          </div>
        </div>
        <div data-aos="fade-up-sm" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            loop={true}
            speed={600}
            autoplay={{
              delay: 5000,
            }}
            navigation={{
              nextEl: ".lbc-swiper-next",
              prevEl: ".lbc-swiper-prev",
            }}
          >
            {list
              .filter((item) => item.enable)
              .map((listItem, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col lg:flex-row">
                      {/* Left side */}
                      <div className="lg:w-[45%]">
                        <Image
                          src={listItem.image}
                          alt={listItem.author}
                          width={446}
                          height={400}
                          className="max-h-[400px] w-full object-cover rounded-2xl"
                        />
                      </div>
                      {/* Right side */}
                      <div className="lg:w-[55%] lg:pl-6 py-10 lg:py-4">
                        <div className="flex flex-col justify-center text-dark-primary">
                          <p className="text-lg font-semibold mb-4 border-l-dark-primary border-l-[4px] pl-4">
                            {listItem.quote}
                          </p>
                          <p className="text-h6 font-normal">~ {listItem.author}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>

          {/* SWIPER BUTTONS */}
          <div className="flex justify-end gap-4 mt-4">
            <button className="lbc-swiper-prev cursor-pointer size-10 relative rounded-full overflow-hidden border-[2px] border-dark-primary text-dark-primary hover:bg-dark-primary hover:text-white transition-colors duration-300">
              <div className="absolute inset-0 grid place-items-center">
                <MdArrowBackIosNew />
              </div>
            </button>
            <button className="lbc-swiper-next cursor-pointer size-10 relative rounded-full overflow-hidden border-[2px] border-dark-primary text-dark-primary hover:bg-dark-primary hover:text-white transition-colors duration-300">
              <div className="absolute inset-0 grid place-items-center">
                <MdArrowForwardIos />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};
export default MissionCarousel;
