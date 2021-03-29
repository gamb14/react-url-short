const Card = ({card}) => {
  return (
    <div className="card-item">
      <img src={card.image} alt={card.heading}/>
      <h3>{card.heading}</h3>
      <p>{card.content}</p>
    </div>
  );
}
export default Card;