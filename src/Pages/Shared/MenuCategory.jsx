import { Link } from "react-router";
import Cover from "./Cover";
import Menutems from "./Menutems";


const MenuCategory = ({items,title, coverImg}) => {
    return (
        <div>
            {title && <Cover img={coverImg} title={title}></Cover>}
              <div className="grid md:grid-cols-2 gap-4 p-8">
      {
      items.map((item) => (
        <Menutems key={item._id} item={item} />
      ))}
    </div>
   <Link to={`/orderd/${title}`}>
   <button className="btn btn-outline my-4 border-0 border-b-4 ">Orderd Now</button>
   </Link>
        </div>
    );
};

export default MenuCategory;