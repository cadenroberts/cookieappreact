import React from 'react';
import Feature from '../../components/feature/Feature';
import './recipe.css';
import cookie from './cookie.txt';

const recipeData = [
  {
    title: 'Ingredients',
    text: '1 1/2 cups all-purpose flour, 3/4 chocolate chips, 1/2 (1 stick) softened unsalted butter & granulated sugar & packed light brown sugar, 1/4 chopped nuts (optional), 1/2 tsp pure vanilla extract & baking soda, 1/4 salt, 1 large egg',
  },
  {
    title: 'Preparation',
    text: 'Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper. In a large mixing bowl, cream together the softened butter, granulated sugar, and brown sugar until the mixture is light and fluffy. Beat in the egg, then stir in the vanilla extract. In a separate bowl, whisk together the flour, baking soda, and salt. Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Fold in the chocolate chips and optional chopped nuts.',
  },
  {
    title: 'Baking',
    text: 'Scoop rounded tablespoons of dough and place them on the prepared baking sheet, spacing them about 2 inches apart. Bake for 9-11 minutes or until the edges turn a golden brown color. The centers will still be slightly soft.',
  },
  {
    title: 'Enjoying',
    text: 'Allow the cookies to cool on the baking sheet for a few minutes, then transfer them to a wire rack to cool completely. Indulge in these exquisitely delicious chocolate chip cookies, savoring every delightful bite!',
  },
];

const Recipe = () => (
  <div className="cookieapp__recipe section__padding" id="recipe">
    <div className="cookieapp__recipe-heading">
      <h1 className="gradient__text">The ultimate chocolate chip cookie recipe, for instant professional referance to address your cookie desires. With approximately 15 minutes for preparation and dough preparation, and 9-11 minutes of baking time, with a total cooling time of about 10 minutes, 12 simple &amp; delicious chocolate chip cookies are ready in about 35 minutes.</h1>
      <p><a href={cookie} download="cookie.txt">Download <span>&#x1F36A;</span>.txt and think about this later </a></p>
    </div>
    <div className="cookieapp__recipe-container">
      {recipeData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Recipe;
