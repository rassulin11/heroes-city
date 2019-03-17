import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Like from './components/Like';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketplaces: [],
      isLoader: false
    }
  }


  componentDidMount() {
    let url = 'http://localhost:3001/marketplaces'
    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          isLoader: true,
          marketplaces: json
        })
      }); 
  }
      
  render() {
    let { isLoader, marketplaces } = this.state;
    if(!isLoader) {
      return <div>Loading...</div>
    }
    return (
      
      <div className="row">
        { marketplaces.map(item => (
          <div className="col-xl-4">
            <a href="shop_full.html" className="shop_item">
                <div className="shop_item__title">
                  <h3 key={ item.id }>{ item.title }</h3>
                  <div className="shop_item__title___right">
                     <Like />
                  </div>
                </div>
                <div className="shop_item__center">
                    <div className="shop_item__center___avatar">
                      <div className="shop_avatar">
                        <img src={ item.imgSrc } alt />
                        <span>
                          { item.rating }
                        </span>
                      </div>
                    </div>
                    <div className="shop_item__center___text">
                        <p>{ item.descr }</p>
                    </div>
                </div>
                <div className="shop_item__bonus">
                    <h3>{ item.discount }<small>%</small></h3>
                    <span>Бонусов</span>
                </div>
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default App;


