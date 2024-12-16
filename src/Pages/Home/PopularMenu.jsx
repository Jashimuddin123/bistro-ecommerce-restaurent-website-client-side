
import SectionTitle from "../Shared/SectionTitle";
import Menutems from "../Shared/Menutems";
import UseMenu from "../../Hooks/UseMenu";

const PopularMenu = () => {
const [menu]= UseMenu()
const popular = menu.filter(item=> item.category === 'popular')

//   useEffect(() => {
//     fetch("/menu.json") // Ensure this path points to the correct file or API
//       .then((res) => res.json())
//       .then((data) => {
//         const popularItems = data.filter((item) => item.category === "popular");
//         setMenu(popularItems);
//       })
//       .catch((error) => console.error("Error fetching menu:", error)); // Optional error handling
//   }, []);


  return (
    <section>
    <SectionTitle
      heading="Popular Items"
      subHeading="FROM OUR MENU"
    />
    <div className="grid md:grid-cols-2 gap-4 p-8">
      {popular.map((item) => (
        <Menutems key={item._id} item={item} />
      ))}
    </div>
    <div className="flex justify-center mt-4">
      <button className="btn btn-primary my-8">View Full Menu</button>
    </div>
  </section>
  
  );
};

export default PopularMenu;
