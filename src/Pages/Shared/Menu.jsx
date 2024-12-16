

import menuImg1 from '../../assets/menu/banner3.jpg' 
import dessertImg from '../../assets/menu/dessert-bg.jpeg' 
import pizzaImg from '../../assets/menu//pizza-bg.jpg' 
import saladImg from '../../assets/menu/salad-bg.jpg' 
import soupImg from '../../assets/menu/soup-bg.jpg' 
// import PopularMenu from '../Home/PopularMenu';
import Cover from './Cover';
import UseMenu from '../../Hooks/UseMenu';
import SectionTitle from './SectionTitle';
import MenuCategory from './MenuCategory';
const Menu = () => {
  const [menu, setMenu]=UseMenu()
  const dessert =menu.filter(item=>item.category === 'dessert')
  const soup =menu.filter(item=>item.category === 'soup')
  const salad =menu.filter(item=>item.category === 'salad')
  const pizza =menu.filter(item=>item.category === 'pizza')
  const offered =menu.filter(item=>item.category === 'offered')
    return (
        <div>
      <Cover img={menuImg1} title="Our Menu"></Cover> 
      {/* <PopularMenu></PopularMenu>
      <Cover img={menuImg2} title="Our Dessert"></Cover> 
      <PopularMenu></PopularMenu>
      <Cover img={menuImg3} title="Our Pizza"></Cover> 
      <PopularMenu  ></PopularMenu> */}
         <SectionTitle subHeading='Dont miss ' heading="TODAYS oFFERD"></SectionTitle>
         <MenuCategory items={offered}></MenuCategory>
         <MenuCategory 
         items ={dessert}
          title="Dessert"
           coverImg={dessertImg}>
           </MenuCategory>
         <MenuCategory 
         items ={pizza}
          title="pizza"
           coverImg={pizzaImg}>
           </MenuCategory>
         <MenuCategory 
         items ={salad}
          title="salad"
          coverImg={saladImg}>
           </MenuCategory>
         <MenuCategory 
         items ={soup}
          title="soup"
          coverImg={soupImg}>
           </MenuCategory>
        </div>
    );
};

export default Menu;