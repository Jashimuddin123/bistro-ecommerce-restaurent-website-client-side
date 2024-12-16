

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end mx-auto">
          <button className="btn bg-gray-300 py-2 rounded-xl px-6 text-yellow-700 btn-outline my-4 border-0 border-b-4 border-yellow-700 ">
            Add To Card</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;