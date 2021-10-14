import logo from './logo.svg';
import './App.css';
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import City from './components/City'

function App() {
  const data = {
    city: "Hamirpur",
    street: "Mahagun Mascot"
  }
  return (
    <>
      <City
        city={data.city}
        streetName={data.street}
      />


      <Test1
        name={"zubair"}
        age={35}
      />
      <Test2
        name={"Junaid"}
        age={31}
      />
    </>
  );
}

export default App;
