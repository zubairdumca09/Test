import logo from './logo.svg';
import './App.css';
import Product from './components/products/Product'
import products from './json/products.json'
import Table from './components/employees/Table'
import AddEmployee from './components/employees/AddEmployee'

function App() {
  console.log(products)
  return (
    <div className="wrapper">
      {/* {
        products.map((data) => {
          return (
            <Product
              image={data.image}
              price={data.price}
              quantity={data.quantity}
            />
          )
        })
      } */}
      {/* <Table /> */}
      <AddEmployee />
    </div>
  );
}

export default App;
