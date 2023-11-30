import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import request from './request';
import Nav from './components/Nav';



function App() {
  return (
    <div>
      <Nav/>
      <Banner  fetchurl={request.fetchNetflixOriginals}/>
      <Row title="NetflixOrginals" fetchurl={request.fetchNetflixOriginals}/>
      <Row title="Top Rated" fetchurl={request.fetchTopRated}/>
      <Row title="Trending" fetchurl={request.fetchTrending}/>
      <Row title="Action" fetchurl={request.fetchActionMovies}/>
      <Row title="Comedy" fetchurl={request.fetchComedyMovies}/>
      <Row title="Horror" fetchurl={request. fetchHorrorMovies}/>
      <Row title="Romance" fetchurl={request.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchurl={request. fetchDocumentaries}/>
    </div>
  );
}

export default App;
