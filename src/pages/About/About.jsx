import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Novel Quest</h2>
            <p className='fs-17'>Welcome to Novel Quest, your ultimate destination for discovering and exploring books. Whether you're an avid reader, a literature enthusiast, or someone simply looking for your next great read, Novel Quest is here to guide you through a treasure trove of literary adventures.
<br />
At Novel Quest, we curate a diverse collection of books across genres, from timeless classics to contemporary bestsellers. Our mission is to connect you with stories that ignite your imagination, provoke thought, and provide endless hours of enjoyment.

Browse through our carefully curated categories, discover new releases, or dive into our editor's picks. <br /> Whatever your reading preferences may be, Novel Quest offers a seamless browsing experience designed to help you find exactly what you're looking for.

Join our community of book lovers and embark on a journey through the pages of literature.Novel Quest ensures that your next literary adventure is just a click away.

Start your quest for the perfect book today with Novel Quest – where every story is an opportunity to explore, imagine, and escape.</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
