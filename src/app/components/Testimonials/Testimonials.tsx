import React from "react";

const Testimonials = ({ data }) => {
  return (
    <section id="testimonials" className="">
      <div className="czd2q c92f3 cmhb9 c1plj">
        <div className="cq8p6 co2a3 c1xxg cnqgv cxbax">
          {/*-- Testimonials --*/}
          <div className="clyfp crfqu c04nn cgv10 cn6x8 c07xy c2k38 c46gb cmhb9 cldwg c74as">
            {data.map((testimonial) => (
              <div className="c5ymx" key={testimonial.id}>
                <div className="czak8 czjaw c54sb cyb9k">
                  <img
                    className="cpz4m"
                    src={testimonial.imageUrl}
                    width="56"
                    height="56"
                    alt={`Testimonial by ${testimonial.name}`}
                  />
                  <svg
                    className="cgk3d c2s69 cti3h cv0d8 cshj2"
                    width="27"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="text-purple-500 c4u31"
                      d="M2.785 5.334C2.538 5.5-.2 2.944.011 2.646.826 1.483 2.183.836 3.62.5 5.064.158 6.582.117 7.92-.02c.017-.002.098.153.088.166-1.763 2.018-3.223 3.836-5.221 5.188zm3.676 6.519c-.862.184-1.937-3.403-1.07-3.711 3.422-1.22 7.078-1.671 10.728-1.766 3.655-.096 7.304.162 10.866.32.044.002.06.177.018.187-6.938 1.634-13.691 3.504-20.542 4.97z"
                    ></path>
                  </svg>
                </div>
                <blockquote className="text-gray-600 c0atf czz36">
                  {testimonial.message}
                </blockquote>
                <div className="cps50 cu5hn cltxh">
                  <cite className="cl4eo">—{testimonial.name}</cite>,{" "}
                  <a className="text-teal-500 clq5w ccb29 ceo83" href="#0">
                    {testimonial.company}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
