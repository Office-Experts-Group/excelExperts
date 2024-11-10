const Testimonials = () => {
  const selectedTestimonials = getRandomTestimonials(10);
  const slidesToAppend = [...selectedTestimonials.slice(0, 3)];
  const extendedTestimonials = [...selectedTestimonials, ...slidesToAppend];

  return (
    <section className={styles.testimonials}>
      <div className={styles.box}>
        <h2>Client Testimonials</h2>
      </div>
      <h3>What they say?</h3>

      <div
        className={styles.testimonialsWrapper}
        aria-label="Testimonials carousel"
      >
        <div className={styles.testimonialsTrack}>
          {extendedTestimonials.map((testimonial, index) => (
            <div
              // Create a truly unique key using both index and content
              key={`testimonial-${index}-${testimonial.name.replace(
                /\s+/g,
                ""
              )}`}
              className={styles.testimonialSlide}
              aria-label={`Testimonial ${
                (index % selectedTestimonials.length) + 1
              }`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
