import React from "react";
import Header from "../Components/Header";
import SectionTitle from "../Components/SectionTitle";
import ContactForm from "../Components/ContactForm";
import ContactCard from "../Components/ContactCard";
import Banner from "../Components/Banner";
import bannerImg from "../assets/img/banner.jpeg";
import MetaHelmet from "../Components/MetaHelmet";

const Contact = () => {
  const title ='Contact'
  const  description = 'We are a team of experts in the field of finance and accounting, dedicated to providing the best services to our clients';
  const keywords = 'bussiness, growth, finance, accounting, services, clients';
  return (
    <div className=" bg-accent/10">
      <MetaHelmet 
        title={title}
        description={description} 
        keywords={keywords} 
      />
      <header>
        <Header breadcrumb={"Contact"} />
        <SectionTitle
          sectionTitle={"Hey! Let’s Talk"}
          breadcrumb={"Get in Touch"}
          position={"center"}
        />
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-20">
        <div className="col-span-1 lg:col-span-2">
          <ContactForm />
        </div>
        <div className="col-span-1">
          <ContactCard />
        </div>
      </section>
      <section className="w-full my-20 py-10 bg-white">
        <div className="w-4/5 md:w-3/5 mx-auto">
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

export default Contact;
