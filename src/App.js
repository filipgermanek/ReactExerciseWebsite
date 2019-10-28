import React from 'react';
import './App.scss';
import Posts from './containers/posts';
import Sidemenu from './containers/sidemenu';
import DropdownButton from './components/dropdown_button';

function App() {
  return (
    <div className="App">
    	<div className="app-header">
    		<DropdownButton title="Item 1" />
    		<DropdownButton title="Item 2" />
    		<DropdownButton title="Item 3 with long name" />
    		<DropdownButton title="Item 4" />
    		<DropdownButton title="Item 5" />
    		<DropdownButton title="Item 6" />
    	</div>
    	<div className="app-content">
    		<Posts />
    		<Sidemenu />
    	</div>
      	
    </div>
  );
}

export default App;
