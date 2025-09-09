const Choose = ({ choose, alignment, ...props }) => {
    const { name, proposition, icon, id } = choose;

    return (
        <div
            {...props}
            className={`mb-8 flex flex-col md:flex-row justify-between items-center w-full ${
                alignment === 'left' ? 'md:flex-row-reverse' : ''
            }`}
        >
            {/* Empty space for timeline alignment */}
            <div className="order-1 md:w-5/12"></div>

            {/* Step Indicator */}
            <div className="z-20 flex items-center justify-center order-1 bg-[#0F766E] w-14 h-14 rounded-full shadow-lg border-2 border-[#F59E0B]">
                <span className="text-lg font-bold text-white">{id}</span>
            </div>

            {/* Content Box */}
            <div className="order-1 font-oswald bg-[#0F766E] rounded-xl shadow-xl w-full md:w-5/12 px-6 py-5 mt-4 md:mt-0 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                {icon && (
                    <div className="text-[#F59E0B] text-3xl mb-2">
                        {icon}
                    </div>
                )}
                <h3 className="mb-3 font-bold text-white text-xl">{name}</h3>
                <p className="text-gray-100 leading-relaxed text-sm md:text-base">
                    {proposition}
                </p>
            </div>
        </div>
    );
};

export default Choose;
