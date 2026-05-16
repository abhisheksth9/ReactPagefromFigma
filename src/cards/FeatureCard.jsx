const FeatureCard = ({title, subtitle,description,bgColor,image,imagePosition,imageStyle
}) => {
    return (
        <div className="relative overflow rounded-[32px] h-[341px] w-[592px] top-[40px] left-[90px]"
        style={{backgroundColor: bgColor}}
        >
            <img
            src={image}
            alt={title}
            style={imageStyle}
            className={`
                absolute bottom-0
                ${imagePosition === "left" ? "-left-10" : "-right-10"}
                `}
            />
            <div className={`
                h-full flex flex-col justify-center text-right
                $(imagePosition === "left" ? "pl-[280px] pr-10" : "pl-10 pr-[260px]"
                )
            `}
            >
                <h2 className="text-white text-[32px] font-[700] h-[38] w-[270] leading-right">
                    {title}
                </h2>
                <p className="mt-4 text-white text-[24px] font-[500] font-medium font-[500] h-[30] w-[339]">
                    {subtitle}
                </p>

                <p className="mt-6 text-white/90 text-[18px] font-[400] font-regular w-[351px] h-[115] leading-[1.7]">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default FeatureCard