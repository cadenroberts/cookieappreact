import React from 'react';
import { oreo, chipsahoy, pepperidge, nilla, girlscouts } from './imports';
import './brand.css';

const Brand = () => (
  <div className="cookieapp__brand section__padding">
    <div>
      <img src={oreo} />
    </div>
    <div>
      <img src={chipsahoy} />
    </div>
    <div>
      <img src={pepperidge} />
    </div>
    <div>
      <img src={nilla} />
    </div>
    <div>
      <img src={girlscouts} />
    </div>
  </div>
);

export default Brand;
