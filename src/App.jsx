import './App.css'

import Header from './components/header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Article from './components/Article';



// function App() {
//   return (
//    <main>
//     <header />
//    </main>
//   ); 
// }

function App() {
  return (
      <div className="App">
          <Header />
          <main>
              <Article 
                  title="Latest trends in the World of fashion"
                  image="latest-trends.jpg"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictum"
              />
              <Article 
                  title="Style Tips for Fall And Other Seasons"
                  image="style-tips-fall.jpg"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictumLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dolor ac ligula vehicula dictum"
              />
          </main>
          <Footer />
      </div>
  );
}

export default App;

