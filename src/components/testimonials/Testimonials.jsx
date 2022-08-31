import React from "react";
import Client from "./Client";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.webp";
import AVTR2 from "../../assets/avatar2.webp";
import AVTR3 from "../../assets/avatar3.webp";
import AVTR4 from "../../assets/avatar4.webp";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const clients = [
  {
    id: "avtr1",
    img: AVTR1,
    name: "Diluc",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis non molestias labore ratione a temporibus fugit mollitia, necessitatibus modi. Eum soluta accusamus, ut porro alias deserunt quibusdam dignissimos iusto?",
  },
  {
    id: "avtr2",
    img: AVTR2,
    name: "Zhongli",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis non molestias labore ratione a temporibus fugit mollitia, necessitatibus modi. Eum soluta accusamus, ut porro alias deserunt quibusdam dignissimos iusto?",
  },
  {
    id: "avtr3",
    img: AVTR3,
    name: "Xiao",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis non molestias labore ratione a temporibus fugit mollitia, necessitatibus modi. Eum soluta accusamus, ut porro alias deserunt quibusdam dignissimos iusto?",
  },
  {
    id: "avtr4",
    img: AVTR4,
    name: "Tartaglia",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis non molestias labore ratione a temporibus fugit mollitia, necessitatibus modi. Eum soluta accusamus, ut porro alias deserunt quibusdam dignissimos iusto?",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client) => (
          <SwiperSlide>
            <Client
              id={client.id}
              image={client.img}
              name={client.name}
              comment={client.comment}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
