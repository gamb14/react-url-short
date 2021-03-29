  import Card from './Card'  
  
  const Statistics = () => {
    const cardData = [
      {id: 1 , image: './images/icon-brand-recognition.svg', heading: 'Brand Recognition', content: 'Boost your brand recognition with each click. Generic links dont mean a thing. Branded links help instill confidence in your content'},
      {id: 2 , image: './images/icon-detailed-records.svg', heading: 'Detailed Records', content: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions'},
      {id: 3 , image: './images/icon-fully-customizable.svg', heading: 'Fully Customizable', content: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'}
    ]

    return (
      <div className="statistics-container">
        <div className="statistics-header">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advance Stastics dashboard.</p>
        </div>
        <div className="features-card">
          {cardData.map((card => (
            <Card key={card.id} card={card}/>
            )))
          }
        </div>
      </div>
    );
  }
   
  export default Statistics;