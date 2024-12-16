import { useState } from 'react';
import orderdcoverImg from '../../assets/shop/orderedFood.jpg'; // Corrected path
import Cover from '../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import FoodCard from '../../Components/FoodCard';
import UseMenu from '../../Hooks/UseMenu';
import OrderTab from './OrderTab';
import { useParams } from 'react-router';

const Orderd = () => {
    const categories = ['salad', 'pizza', 'soup','dessert', 'drinks']
    const {category}=useParams()
    const innitialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(innitialIndex);
   const [menu]= UseMenu()

   console.log(category);
   
    // Filter items by category
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks'); // Added drinks category

    return (
        <div>
            <Cover img={orderdcoverImg} title="Order food" />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                {/* Salad Tab */}
                <TabPanel>
                  <OrderTab items={salad}></OrderTab>
                </TabPanel>

                {/* Pizza Tab */}
                <TabPanel>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {pizza.map(item => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div> */}
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>

                {/* Soup Tab */}
                <TabPanel>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {soup.map(item => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div> */}
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>

                {/* Dessert Tab */}
                <TabPanel>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {dessert.map(item => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div> */}
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>

                {/* Drinks Tab */}
                <TabPanel>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {drinks.map(item => (
                            <FoodCard key={item._id} item={item} />
                        ))}
                    </div> */}
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Orderd;
