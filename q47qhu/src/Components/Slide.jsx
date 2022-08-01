function Slide({ title, description }) {
  return (
    <div className="slide-container" data-testid="slide">
      <h3 data-testid="title">{title}</h3>
      <p data-testid="description">{description}</p>
    </div>
  );
}

export default Slide;
