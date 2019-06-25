import React from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const fordCars = [
  { label: "Lincoln", value: 1 },
  { label: "Mustang", value: 2 },
  { label: "Ford Truck", value: 3 }
];

const fetures = [
  {
  }
]

const App = () => (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Select options={ fordCars } />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
);

export default App