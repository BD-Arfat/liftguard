import { icon } from "leaflet";

const Choose = ({ choose, alignment, ...props }) => {
    const { name, proposition, icon, id } = choose;
    return (
        <div
            {...props}
            className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${alignment === 'left' ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Spacing Div for Alignment */}
            <div className="order-1 md:w-5/12"></div>

            {/* Icon Container */}
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-12 h-12 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">{id}</h1>
            </div>

            {/* Content Box */}
            <div className="order-1 font-oswald bg-blue-950 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4 mt-4 md:mt-0">
                <h1 className="text-2xl mb-2">{icon}</h1>
                <h3 className="mb-3 font-bold text-gray-300 text-xl">{name}</h3>
                <p className="text-gray-300 leading-tight text-sm md:text-base">{proposition}</p>
            </div>
        </div>
    );
};

export default Choose;