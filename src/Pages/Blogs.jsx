import React from "react";
import Header from "../Components/Header";
import SectionTitle from "../Components/SectionTitle";
import MainBlogCard from "../Components/MainBlogCard";
import BlogCard from "../Components/BlogCard";
import BlogImage from "../assets/img/Rectangle25-2.jpg";
import BlogProfile from "../assets/img/Ellipse4-1.jpg";
import bannerImg from "../assets/img/banner.jpeg";
import Banner from "../Components/Banner";
import MetaHelmet from "../Components/MetaHelmet";

const Blogs = () => {
  const title ='Blogs'
  const  description = 'We are a team of experts in the field of finance and accounting, dedicated to providing the best services to our clients';
  const keywords = 'bussiness, growth, finance, accounting, services, clients';
  return (
    <>
      <MetaHelmet 
        title={title}
        description={description} 
        keywords={keywords} 
      />
      <Header breadcrumb={"Blogs"} />
      <section className="flex flex-col items-center justify-center my-20 mx-16 lg:mx-28">
        <SectionTitle
          sectionTitle={"Latest Blogs"}
          breadcrumb={"Our Blogs"}
          position="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="row-span-2 h-full">
            <MainBlogCard
              cardImage={BlogImage}
              cardTitle="The most popular business of the year"
              cardDate="12th June 2023"
              authorName="Ranold Jeff."
              authorImage={BlogProfile}
              readTime="2 Min Read"
              direction="1"
              side="w"
            />
          </div>
          <div className="row-span-1">
            <MainBlogCard
              cardImage={BlogImage}
              cardTitle="The most popular business of the year"
              cardDate="12th June 2023"
              authorName="Ranold Jeff."
              authorImage={BlogProfile}
              readTime="2 Min Read"
              direction="5"
              side="h"
            />
          </div>
          <div className="row-span-1">
            <MainBlogCard
              cardImage={BlogImage}
              cardTitle="The most popular business of the year"
              cardDate="12th June 2023"
              authorName="Ranold Jeff."
              authorImage={BlogProfile}
              readTime="2 Min Read"
              direction="5"
              side="h"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-20 mx-16 lg:mx-28 bg-secondary">
        <SectionTitle sectionTitle={"Latest Blogs"} breadcrumb={"Our Blogs"} position="center" />
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
    </>
  );
};

export default Blogs;
