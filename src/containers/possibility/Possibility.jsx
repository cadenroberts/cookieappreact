import React from 'react';
import veganCookies from '../../assets/vegancookies.jpeg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={veganCookies} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Ingredients: 1 3/4 cups all-purpose flour, 3/4 brown sugar, 1/2 melted coconut oil & dairy-free chocolate chips & chopped nuts (optional), 1/4 maple syrup, 1 tsp baking powder & vanilla extract, 1/2 baking soda, 1/4 salt </h4>
      <h1 className="gradient__text">Vegan cookies are <br /> here, to (deliciously) satisfy cravings from all backgrounds</h1>
      <p>Instructions: Preheat oven to 350°F. Whisk flour, baking powder, baking soda, and salt. In a separate bowl, combine melted coconut oil, brown sugar, maple syrup, and vanilla extract. Gradually add dry ingredients to wet, stirring into a thick dough. Fold in dairy-free chocolate chips and nuts. Scoop tablespoon-sized dough portions onto lined baking sheet. Flatten slightly. Bake for 10-12 minutes until golden. Cool on sheet briefly, then transfer to plate to cool completely. Enjoy!</p>
      <h4><a href="https://mcusercontent.com/7777e1427ce6b6d31357d1d96/files/e9653f44-6433-3eeb-46ba-4abba06105a9/The_Home_Baked_Vegan_Cookies_E_Book_1_.pdf?mc_cid=39c2ff21d5&mc_eid=21b9175f0d" target="_blank" rel="noopener noreferrer">Show me more vegan cookies</a></h4>
    </div>
  </div>
);

export default Possibility;
