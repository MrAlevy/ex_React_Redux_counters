import React from 'react';
import AddItem from './AddItem'
import ItemsList from './ItemsList'
import { Filter } from './Filter'

function App() {
  return (
    <div className="App">
      <AddItem />
      <Filter />
      <ItemsList />
    </div>
  );
}

export default App;
