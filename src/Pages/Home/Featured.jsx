import SectionTitle from "../Shared/SectionTitle";
import featured from '../../../src/assets/home/featured.jpg'
import './featured.css'
const Featured = () => {
    return (
      <section
        className="featured-background bg-fixed text-white   my-16"
        style={{
          backgroundImage: `url(${featured})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '50px 0',
        }}
      >
        <SectionTitle 
        heading="Check it "
        subHeading="FROM OUR MENU">
        </SectionTitle>
        <div className="flex justify-center bg-blue-600  rounded gap-20 items-center w-9/12 mx-auto my-8" >
            <img className="w-96 " src={featured} alt="" />
            <div>
                <h1 className="text-white">March 20, 2024</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nulla voluptas adipisci libero dolores ea labore recusandae blanditiis ipsa nisi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sit commodi nobis doloribus sint deleniti..</p>
                <button className="btn btn-outline my-4 border-0 border-b-4 border-white text-white">Read More</button>
            </div>
        </div>
      </section>
    );
};

export default Featured;
