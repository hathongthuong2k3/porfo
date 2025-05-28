export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Thong Thuong Ha</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack Software</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I specialize in developing end-to-end web applications, blending frontend creativity with backend efficiency.
            <br />  With a strong foundation in both client and server-side technologies, I build reliable, scalable, and user-centric digital experiences.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
