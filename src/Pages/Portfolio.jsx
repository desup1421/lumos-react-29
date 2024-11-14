import React from 'react';
import PortfolioGroup from '../Components/PortfolioGroup';
import Banner from '../Components/Banner';
import bannerImg from '../assets/img/banner.jpeg';
import MetaHelmet from "../Components/MetaHelmet";


const Portfolio = () => {
  const title ='Portfolio'
  const  description = 'We are a team of experts in the field of finance and accounting, dedicated to providing the best services to our clients';
  const keywords = 'bussiness, growth, finance, accounting, services, clients';
  return (
    <div>
      <MetaHelmet 
        title={title}
        description={description} 
        keywords={keywords} 
      />
      <section>
        <PortfolioGroup />
      </section>
      <section className="flex justify-center items-center my-10">
				<div className="w-4/5 md:w-3/5">
					<Banner image={bannerImg} text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae." button="Learn More" />
				</div>
      </section>
    </div>
    
  )
}


export default Portfolio