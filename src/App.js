import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';


function App() {

	const cards = data.map(item => {
		return (
			<Card
				key={item.id}
				item={item}
			/>
		)
	})

	return (
		<div className="app">
			<Navbar />
			<Hero />
			<section className="cards-list scrollbar-hide">
				{cards}
			</section>
		</div>
	);
}

export default App;
