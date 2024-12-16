
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="w-3/12 mx-auto text-center border-y-4 py-4 my-4">
           
            <p className="text-yellow-700 text-xl ">{subHeading}</p>
            <p className="uppercase font-semibold text-3xl">{heading}</p>
        </div>
    );
};

export default SectionTitle;