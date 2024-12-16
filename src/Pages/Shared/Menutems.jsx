

const Menutems = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div>
            <div className="flex gap-4 space-y-4">
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px]"  src={image} alt="food images" />
            <div>
                <h3 className="text-xl font-bold">{name}-----------------</h3>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <p className="text-yellow-600">{price}</p>

           
        </div>
      
        </div>
    );
};

export default Menutems;