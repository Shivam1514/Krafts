import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";
import "../styles/about.css";

function About() {
  return (
    <div className="about-us-page">
      <PagesHeader />

      <main className="about-main-content">
        <section className="about-intro">
          <h1>About Krafts</h1>
          <p className="tagline">
          Crafts of Remarkable Nature, Directly from the Artisans.
          </p>
          <p>
          Experience the magic of crafts of remarkable nature directly from the artisans at The Krafts. Our collection showcases the incredible 
          talent and skill of artisans who pour their heart and soul into creating extraordinary pieces. From handcrafted ceramics to intricately 
          woven textiles, each item is a testament to the artisan’s dedication and expertise. By sourcing directly from these talented individuals,
           we ensure that their craftsmanship is valued and celebrated. Discover the beauty and authenticity of our artisanal crafts, and be a part
            of supporting sustainable livelihoods and preserving traditional art forms. Explore The Krafts today and bring home a piece of art that
          tells a story.
          </p>
        </section>

        <section className="our-mission">
          <h2>Our Mission</h2>
          <p>
          At The Krafts, our mission is to celebrate the exceptional talent of artisans and preserve traditional crafts. We curate a collection of 
          remarkable handcrafted ceramics, textiles, and more directly from these skilled individuals. By supporting us, you empower artisans, 
          promote sustainable livelihoods, and contribute to the preservation of cultural heritage. Discover the beauty and authenticity of our 
          artisanal crafts today and be part of a global movement that values craftsmanship and honors the artisans behind each creation. Join us 
          in celebrating their extraordinary talent and the stories they tell through their craft.
   
          </p>
        </section>

        <section className="our-products">
          <h2>Our Products</h2>
          <p>
          At The Krafts, we offer a wide range of exquisite artisanal crafts that showcase the skill and creativity of talented artisans. 
          Our collection includes handcrafted ceramics, intricately woven textiles, beautifully carved woodwork, and much more. Each product is 
          carefully curated to ensure exceptional quality and authenticity.
          From stunning pottery pieces that add elegance to your home decor, to unique textiles that tell stories of cultural heritage, our 
          products are a testament to the craftsmanship and dedication of artisans worldwide. We believe in promoting sustainable practices, which 
          is why many of our items are made from eco-friendly materials.
          Whether you’re looking for a special gift or want to enhance your own space with one-of-a-kind creations, our products offer beauty, 
          authenticity, and a connection to the rich traditions of craftsmanship. Explore our collection today and discover the magic of artisanal 
          crafts that bring joy and inspiration into your life.
          </p>
        </section>

        <section className="visit-us">
          <h2>Visit Us</h2>
          <p>
            Want to learn more or get in touch with us? Visit our{" "}
            <a href="/contact">Contact Page</a> and let's start a conversation.
            We're always here to talk about crafts.
          </p>
        </section>
      </main>

      <Footer />
      <BottomBar />
    </div>
  );
}

export default About;
