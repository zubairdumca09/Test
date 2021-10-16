import logo from './logo.svg';
import './App.css';
import Product from './components/products/Product'
import products from './json/products.json'
import Table from './components/employees/Table'

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
      <Table />
    </div>
  );
}

export default App;
