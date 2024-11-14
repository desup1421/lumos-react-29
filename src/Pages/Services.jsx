import React from "react";
import Header from "../Components/Header";
import SectionTitle from "../Components/SectionTitle";
import InfoCard from "../Components/InfoCard";
import MainCard from "../Components/MainCard";
import Banner from "../Components/Banner";
import bannerImg from "../assets/img/banner.jpeg";
import groupPic from "../assets/img/group.png";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
import icon5 from "../assets/img/icon5.png";
import icon6 from "../assets/img/icon6.png";
import icon7 from "../assets/img/icon7.png";
import icon8 from "../assets/img/icon8.png";
import MetaHelmet from "../Components/MetaHelmet";


const Services = () => {
  const title ='Portfolio'
  const  description = 'We are a team of experts in the field of finance and accounting, dedicated to providing the best services to our clients';
  const keywords = 'bussiness, growth, finance, accounting, services, clients';
  return (
    <div className="mb-32">
      <MetaHelmet 
        title={title}
        description={description} 
        keywords={keywords} 
      />
      <Header breadcrumb="Services" />
      <section className="p-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
          <div className="col-span-1 mb-12 lg:mb-0">
            <img
              className="object-cover w-4/5 mx-auto rounded-md lg:h-full"
              src={groupPic}
              alt="group discussion"
            />
          </div>

          <div className="col-span-1">
            <SectionTitle
              breadcrumb="What We Do"
              sectionTitle="We Develope Product That People Love to Use."
              position="left"
            />

            <p className="mt-10">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed, of a page when looking at its
              layout. The point of using Lorem Ipsum is that of a page when
              looking at its layout. The point of using Lorem Ipsum is thatLorem
              Ipsum is that it has a more-or-less normalLorem IpsumLorem Ipsum
              distribution of letters, as opposed
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              <div className="col-1">
                <InfoCard
                  bgImage="bg-white"
                  title="Our Vision"
                  image={icon1}
                  desc="It is a long esta-blished fact that"
                />
              </div>
              <div className="col-1">
                <InfoCard
                  bgImage="bg-white"
                  title="Our Goal"
                  image={icon2}
                  desc="It is a long esta-blished fact that"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-20">
        <SectionTitle
          breadcrumb="What We Do"
          sectionTitle="Our Expertise"
          position="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
          <MainCard
            icon={icon3}
            title="Web Design / Development"
            description="It is a long established fact that a reader will be distra by the readable content of a page when looking at its layout, when looking at its layout"
          />

          <MainCard
            icon={icon4}
            title="UI/UX Design"
            description="It is a long established fact that a reader will be distra by   he readable content of a page when looking at its layout, when looking at its layout"
          />

          <MainCard
            icon={icon5}
            title="Website Migration"
            description="It is a long established fact that a reader will be distra by   he readable content of a page when looking at its layout, when looking at its layout"
          />
          <MainCard
            icon={icon6}
            title="App Development"
            description="It is a long established fact that a reader will be distra by   he readable content of a page when looking at its layout, when looking at its layout"
          />

          <MainCard
            icon={icon7}
            title="HubSpot Integration"
            description="It is a long established fact that a reader will be distra by   he readable content of a page when looking at its layout, when looking at its layout"
          />

          <MainCard
            icon={icon8}
            title="Email Marketing"
            description="It is a long established fact that a reader will be distra by   he readable content of a page when looking at its layout, when looking at its layout"
          />
        </div>
      </section>

      <section className="flex justify-center items-center my-10">
        <div className="w-4/5 md:w-3/5">
          <Banner
            image={bannerImg}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            button="Learn More"
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
