
import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';
function App() {
  return (
    <div className="App">
      <div><NavBar/></div>
    <div className="Profil">
      <ProfilPhoto/>
      <div className="name">
      <FullName/>
      <Address/></div>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
