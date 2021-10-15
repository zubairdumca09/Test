import logo from './logo.svg';
import './App.css';
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import City from './components/City'
import Product from './components/products/Product'
import products from './json/products.json'

function App() {
  console.log(products)
  return (
    <div className="wrapper">
      {/* <City
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
      /> */}

      <Product
        image={products[0].image}
        price={products[0].price}
        quantity={products[0].quantity}
      />
      <Product
        image={products[1].image}
        price={products[1].price}
        quantity={products[1].quantity}
      />
      <Product
        image={products[2].image}
        price={products[2].price}
        quantity={products[2].quantity}
      />
      <Product
        image={products[3].image}
        price={products[3].price}
        quantity={products[3].quantity}
      />
      <Product
        image={products[4].image}
        price={products[4].price}
        quantity={products[4].quantity}
      />
      <Product
        image={products[5].image}
        price={products[5].price}
        quantity={products[5].quantity}
      />
    </div>
  );
}

export default App;
