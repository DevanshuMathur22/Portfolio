import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import petworld from "../assets/image/petworld.jpg"
import aluminum from "../assets/image/aluminum.jpg"
import event from "../assets/image/events.jpg"
import coffee from "../assets/image/coffee.jpg"
import portfolio from "../assets/image/portfolio.png"

const slides = [
  {
    title: "PetWorld — Adoption Platform",
    subtitle: "Healthy, certified pets with modern UI",
    tech: "React • Tailwind • Routing",
    cta: "View Project",
    img: petworld,
    link: "https://pet-world-eta.vercel.app/"
  },
  {
    title: "Event Management Website",
    subtitle: "Weddings, Corporate Events, Concerts",
    tech: "React • Responsive UI • Cards",
    cta: "View Events",
    img: event,
    link: "https://event-tawny-three.vercel.app/"
  },
  {
    title: "Coffee Shop Website",
    subtitle: "Menu • Bakery • Ordering UI",
    tech: "React • Hero Banner • Categories",
    cta: "Explore Menu",
    img: coffee,
    link: "https://coffee-web-wwoc.vercel.app/"
  },
  {
    title: "Aluminum & Glass Services",
    subtitle: "ACP Cladding & Glass Partitions",
    tech: "Business UI • React • Branding",
    cta: "View Services",
    img: aluminum,
    link: "https://aluminium-nine.vercel.app/"
  },
  {
    title: "Let’s Work Together",
    subtitle: "Frontend + Full Stack Projects",
    tech: "Open to Freelance & Collaboration",
    cta: "Contact Me",
    img: portfolio,
    link: "#contact-me"
  }
];

export default function PortfolioSlider() {
  return (
    <div className="w-full h-[90vh] relative ">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3500 }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${s.img})` }}
            >
              <div className="bg-black/50 backdrop-blur-sm p-10 ml-10 rounded-xl max-w-xl text-white">
                <h2 className="text-4xl font-bold">{s.title}</h2>
                <p className="text-lg mt-2">{s.subtitle}</p>
                <p className="text-sm mt-3 text-gray-300">{s.tech}</p>

                <a
                  href={s.link}
                  className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  {s.cta}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
