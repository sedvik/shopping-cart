import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home () {
  return (
    <div className="home-container">
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          <span className="emphasis">We&apos;re going to help you with all things Doily.</span> We tailor the doilies here to your needs. Whether you&apos;re a seasoned doily-developer opening an impromptu Bed and Breakfast or just a doily-dabbler, you&apos;ve come to the right place.
        </p>
      </section>
      <section className="about">
        <h2>What makes our doilies different?</h2>
        <p>Well the simple answer is, not much. It&apos;s the classic doily, there&apos;s nothing wrong with that.</p>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SFdq-8wwNeM"
          title="YouTube video player" frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </section>
      <Link to="/shop">
        <button className="home-shop-link">
          Delve into Doilies
        </button>
      </Link>
    </div>
  )
}

export default Home
