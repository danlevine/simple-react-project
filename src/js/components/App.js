import React from 'react';
import AddItem from '../containers/AddItem';
import Footer from '../components/Footer';
import VisibleItemList from '../containers/VisibleItemList';

const App = ({params}) => (
  <div>
    <AddItem />
    <VisibleItemList filter={params.filter || 'all'} />
    <Footer />
  </div>
);

export default App;