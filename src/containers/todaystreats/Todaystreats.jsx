import React from 'react';
import Feature from '../../components/feature/Feature';
import './todaystreats.css';

const Todaystreats = () => (
  <div className="cookieapp__todaystreats section__margin" id="todaystreats">
    <div className="cookieapp__todaystreats-feature">
      <Feature title="Today&apos;s classic treats!" text="Classic cookies are timeless treats that bring joy to our taste buds. With their golden-brown edges, soft centers, and aromatic flavors, they evoke nostalgic memories and satisfy our cravings. Whether it&apos;s chocolate chip, oatmeal raisin, or peanut butter, these cookies are the epitome of simple, comforting indulgence." />
    </div>
    <div className="cookieapp__todaystreats-heading">
      <h1 className="gradient__text">The classics never dissapoint.</h1>
      <a href="https://online.fliphtml5.com/xlry/lkkt/" target="_blank" rel="noopener noreferrer"><p>I&apos;m hungry... show me more!</p></a>
    </div>
    <div className="cookieapp__todaystreats-container">
      <Feature title="Sugar Cookie" text="Mix 1 cup butter, 1 cup sugar, 1 egg, and 1 tsp vanilla extract. In a separate bowl, combine 3 cups flour, ½ tsp baking powder, and ¼ tsp salt. Gradually add dry ingredients to wet, then chill dough for 1 hour. Roll, cut shapes, bake at 375°F for 8-10 mins. Enjoy!" />
      <Feature title="Peanut Butter Cookie" text="Mix 1 cup peanut butter, 1 cup sugar, 1 egg, and 1 tsp vanilla extract. Roll dough into balls, place on a baking sheet, and press with a fork. Bake at 350°F for 10-12 mins. Let cool before enjoying these delicious peanut butter cookies!" />
      <Feature title="Oatmeal Raisin Cookie" text="Cream together 1 cup butter, 1 cup brown sugar, and 1/2 cup white sugar. Add 2 eggs and 1 tsp vanilla extract. Mix well. In a separate bowl, combine 1 1/2 cups flour, 1 tsp cinnamon, 1/2 tsp baking soda, and 1/4 tsp salt. Add dry ingredients to the wet mixture, then stir in 2 1/2 cups rolled oats and 1 cup raisins. Scoop onto a baking sheet, bake at 350°F for 10-12 mins. Enjoy these delightful oatmeal raisin cookies!" />
    </div>
  </div>
);

export default Todaystreats;
