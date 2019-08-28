import React from 'react';
import './App.scss';
import Posts from './containers/posts';
import Sidemenu from './containers/sidemenu';
function App() {
  return (
    <div className="App">
    	<div className="app-header">
    		<button className="header-button">item1</button>
    		<button className="header-button">item2</button>
    		<button className="header-button">item3</button>
    		<button className="header-button">item4</button>
    		<button className="header-button">item5</button>
    		<button className="header-button">item6</button>
    	</div>
    	<div className="app-content">
    		<Posts />
    		<Sidemenu />
    	</div>
      	
    </div>
  );
}

export default App;
