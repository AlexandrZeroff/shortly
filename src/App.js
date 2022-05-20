import './App.scss';
import Form from './components/Form'
import Navbar from './components/Navbar'
import Shortens from './components/Shortens'
import Header from 'components/Header';
import Statistics from 'components/Statistics';
import Cta from 'components/Cta';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Form />
      <Shortens />
      <Statistics />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
