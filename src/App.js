import { Component } from 'react';

import './App.css';

class App extends Component {
  // state = {
  //   price: 100,
  // };

  componentDidMount() {
    const script = document.createElement('script');
    const script2 = document.createElement('script');
    script.src = 'https://dist.cpay.me/latest/merchant-sdk.esm.js';
    script2.src = 'https://dist.cpay.me/latest/merchant-sdk.js';
    document.body.appendChild(script);
    document.body.appendChild(script2);

    script2.onload = this.addCareemPay;
  }

  componentDidUpdate() {
    this.addCareemPay();
  }

  addCareemPay = () => {
    console.log("window",window);
    // new window.CareemPay.autostrap({ /* your options */ })
    // new window.TabbyCard({
    //   selector: '#tabby',
    //   currency: 'AED',
    //   price: this.state.price,
    //   installmentsCount: 4,
    //   lang: 'en',
    //   size: 'wide',
    // });
  }

  updateState = () => {
    this.setState({ price: this.state.price * 2 });
  }

  render() {
    return (
      <>
        <button id="careemBtn">checkout</button>
      </>
    );
  }
}

export default App;
