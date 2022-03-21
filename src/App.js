import './App.css';

import Nav from './Components/Nav';
import Section from './Components/Section';
import Footer from './Components/Footer';

import TravelData from './travel-data';

export default function App() {
  const travelData = TravelData.map(item => {
    return (
      <Section 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="container">
      <Nav />
      <section className='section-container'>
        {travelData}
      </section>
      <Footer />
    </div>
  );
}
