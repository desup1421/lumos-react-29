import React from "react";
import SectionTitle from "../Components/SectionTitle";
import Button from "../Components/Button";
import Group65Image from "../assets/img/Group65.jpg";
import MaskGroupImage from "../assets/img/Maskgroup.jpg";
import InfoCard from "../Components/InfoCard";
import BlackIcon from "../assets/img/Black.jpg";
import MainCard from "../Components/MainCard";
import Black5Icon from "../assets/img/Black-5.jpg";
import Black6Icon from "../assets/img/Black-6.jpg";
import Black7Icon from "../assets/img/Black-7.jpg";
import Black8Icon from "../assets/img/Black-8.jpg";
import icon3 from "../assets/img/icon3.png";
import icon4 from "../assets/img/icon4.png";
import icon5 from "../assets/img/icon5.png";
import icon6 from "../assets/img/icon6.png";
import icon7 from "../assets/img/icon7.png";
import icon8 from "../assets/img/icon8.png";
import Leader_1 from "../assets/img/Rectangle14.jpg";
import Leader_2 from "../assets/img/Rectangle15.jpg";
import Banner from "../Components/Banner";
import bannerImg from "../assets/img/banner.jpeg";
import ContactForm from "../Components/ContactForm";
import ContactCard from "../Components/ContactCard";
import BlogCard from "../Components/BlogCard";
import BlogImage from "../assets/img/Rectangle25-2.jpg";
import BlogProfile from "../assets/img/Ellipse4-1.jpg";
import MetaHelmet from "../Components/MetaHelmet";
import SchemaHelmet from "../Components/SchemaHelmet";

const Home = () => {
  const cardDataOurProcess = [
    {
      icon: Black5Icon,
      title: "Research",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page.",
      number: "1",
    },
    {
      icon: Black6Icon,
      title: "Design",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page.",
      number: "2",
    },
    {
      icon: Black7Icon,
      title: "Develope",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page.",
      number: "3",
    },
    {
      icon: Black8Icon,
      title: "Test",
      description:
        "It is a long established fact that a reader will be distra by the readable content of a page.",
      number: "4",
    },
  ];
  const title = "Logoipsum";
  const description =
    "We are a team of experts in the field of finance and accounting, dedicated to providing the best services to our clients";
  const keywords = "bussiness, growth, finance, accounting, services, clients";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-12-23T12:34:00-05:00",
    dateModified: "2024-12-26T14:53:00-05:00",
    mainEntity: {
      "@type": "Organization",
      name: "Logoipsum",
      alternateName: "logoipsum",
      interactionStatistic: [
        {
          "@type": "InteractionCounter",
          interactionType: "https://schema.org/WriteAction",
          userInteractionCount: 1,
        },
      ],
      agentInteractionStatistic: {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/WriteAction",
        userInteractionCount: 2346,
      },
      description: "Better Insights For Business Growth",
      image: "https://lumos-react-group-28-m9la.vercel.app/assets/Group65-CIkUMWDF.jpg",
    },
  };
  

  return (
    <div>
      <MetaHelmet title={title} description={description} keywords={keywords} />
      <SchemaHelmet schema={schema} />

      {/* Hero section START */}
      <section className="flex-col-reverse flex md:flex-row items-center justify-center px-46 py-10">
        <div className="flex flex-col items-start justify-center">
          <SectionTitle
            breadcrumb="We are here"
            sectionTitle="Better Insights For Business Growth"
            position={"left"}
          />
          <div className="pl-3">
            <Button>View More</Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            src={Group65Image}
            alt=""
            className="max-w-lg max-h-lg rounded-xl"
          />
        </div>
      </section>
      {/* Hero section END */}

      {/* About section START */}
      <section className="flex flex-col md:flex-row items-center justify-center py-10 bg-secondary">
        <div className="flex flex-col items-center justify-center">
          <img
            src={MaskGroupImage}
            alt=""
            className="max-w-lg max-h-lg rounded-5"
          />
        </div>

        <div className="flex flex-col px-5 w-4/5 mt-8 md:mt-0">
          <SectionTitle
            breadcrumb="We are here"
            sectionTitle="One of the Fastest Way to Business Growth"
            position={"left"}
          />
          <p className="text-base pl-3 pr-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed
          </p>
          <div className="mt-5 ml-3">
            <InfoCard
              bgImage="bg-secondary"
              title="Get Instant Professional Advice"
              image={BlackIcon}
              desc="Ready to Help"
              number="+62 259519252"
            />
          </div>
        </div>
      </section>
      {/* About section END */}

      {/* Planning section START */}
      <section className="flex flex-col items-center justify-center py-10 pb-20">
        <div className="w-4/5">
          <SectionTitle
            breadcrumb="Planning"
            sectionTitle="Our Process"
            position={"center"}
          />

          <div className="flex flex-col md:flex-row items-center justify-center gap-5">
            {cardDataOurProcess.map((card, index) => (
              <MainCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                number={card.number}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Planning section END */}

      {/* What we do section START */}
      <section className="flex flex-col md:flex-row items-center justify-center py-10 bg-secondary">
        <div className="flex flex-col items-center justify-center">
          <img
            src={MaskGroupImage}
            alt=""
            className="max-w-lg max-h-lg rounded-5"
          />
        </div>

        <div className="flex flex-col px-5 w-4/5 mt-8 md:mt-0">
          <SectionTitle
            breadcrumb="What We Do"
            sectionTitle="We Develope Product That People Love to Use."
          />
          <p className="text-base pl-3 pr-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed, Lorem Ipsum is that it has a
            more-or-less normal distribution of letters, as opposed
          </p>
          <div className="mt-5 ml-3">
            <InfoCard
              bgImage="bg-secondary"
              title="Get Instant Professional Advice"
              image={BlackIcon}
              desc="Ready to Help"
              number="+62 259519252"
            />
            <div className="mt-5">
              <Button>View More </Button>
            </div>
          </div>
        </div>
      </section>
      {/* What we do section END */}

      {/* Our Expertise section START */}
      <section className="flex flex-col md:flex-row items-center justify-center py-10 bg-white">
        <div className="flex flex-col px-5 w-4/5 mt-8 md:mt-0">
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
        </div>
      </section>
      {/* Our Expertise section END */}

      {/* Our Leader section START */}
      <section className="flex flex-col md:flex-row items-center justify-center py-10 bg-secondary">
        <div className="flex flex-col px-5 w-4/5 mt-8 md:mt-0">
          <SectionTitle
            breadcrumb="Teams"
            sectionTitle="Our Leaders"
            position="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Larry F. Burnett", role: "CEO", image: Leader_1 },
              { name: "Meghan J. Webb", role: "CTO", image: Leader_2 },
              { name: "Yvonne J. Cullum", role: "CFO", image: Leader_1 },
              { name: "Diana H. Williams", role: "COO", image: Leader_2 },
            ].map((leader, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-red-500 text-lg font-medium">
                  {leader.name}
                </h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Our Leader section END */}

      {/* Form section START */}
      <section className="flex flex-col items-center justify-center py-10 bg-primary">
        <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-medium mb-2">
            \ Get In Touch \
          </p>
          <h2 className="text-white text-4xl font-bold">
            Hey! Let&apos;s Talk
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-4/5">
          <div className="col-span-1 lg:col-span-2">
            <ContactForm />
          </div>
          <div className="col-span-1">
            <ContactCard />
          </div>
        </div>
      </section>
      {/* Form section END */}

      {/* Form section START */}
      <section className="flex flex-col items-center justify-center py-10 bg-secondary">
        <div className="flex flex-col items-center justify-center mx-16 lg:mx-28 bg-secondary">
          <SectionTitle
            sectionTitle={"Latest Blogs"}
            breadcrumb={"Our Blogs"}
            position="center"
          />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
            <div>
              <BlogCard
                image={BlogImage}
                title={"The Most Popular Bisnis of the year"}
                imageProfile={BlogProfile}
                name={"Ranold Jeff."}
                date={"2023-02-01"}
              />
            </div>
            <div>
              <BlogCard
                image={BlogImage}
                title={"The Most Popular Bisnis of the year"}
                imageProfile={BlogProfile}
                name={"Ranold Jeff."}
                date={"2023-02-01"}
              />
            </div>
            <div>
              <BlogCard
                image={BlogImage}
                title={"The Most Popular Bisnis of the year"}
                imageProfile={BlogProfile}
                name={"Ranold Jeff."}
                date={"2023-02-01"}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Form section END */}

      {/* Banner section START */}
      <section className="w-full my-20 py-10 bg-white">
        <div className="w-4/5 md:w-3/5 mx-auto">
          <Banner
            image={bannerImg}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
            button="Learn More"
          />
        </div>
      </section>
      {/* Banner section END */}
    </div>
  );
};

export default Home;
