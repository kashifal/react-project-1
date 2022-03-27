import Search from './components/Search';
import React from 'react';
import './index.css';
import List from './components/List';
import unsplash from './api/unsplash'; 




class App extends React.Component
{
  constructor(){
    super();
    this.searchfor = this.searchfor.bind(this);
  }
  
  state = {images:[]};
async searchfor(term){
  const res = await unsplash.get('/search/photos', {
    params: { query: term } ,
    
  });
    this.setState({images:res.data.results});
}
  render() {
    
    return(
      <>
      <Search submit={this.searchfor} /> 
     <List images = {this.state.images} />
      
   
      </>
    )
  }
}


export default App;
