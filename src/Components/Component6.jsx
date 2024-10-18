import { Vinova, Vinova2 } from "../assets/Api5"

const Component6 = () => {
    return (
        <div>
            <div className="w-[1112px] h-[905px] m-auto bg-gray_cus flex flex-col  pt-[127px] md:w-[375px] md:mx-[-35px] md:h-auto">
                <h3 className="text-5xl leading-[60px]  mx-auto mb-[79px] font-bold md:text-[35px] md:mb-10">WHY HIRE
                    <b className="text-primary font-bold text-5xl after:content-[' ?'] after:text-black md:text-[35px]"> VINOVA</b>
                </h3>
                <div className="flex flex-row justify-center text-center mb-[52px] md:w-full md:flex-col md:items-center md:mb-5">
                    {Vinova && Vinova.map((data) => (
                        <div key={data.id} className="w-[full] h-full px-2 flex flex-col items-center md:mb-5">
                            <img src={data.URL} alt="" className="mb-[26px]" />
                            <b className="text-2xl mb-[10px]">{data.title}</b>
                            <p>{data.content}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-center text-center md:w-full md:flex-col md:items-center md:mb-10">
                    {Vinova2 && Vinova2.map((data) => (
                        <div key={data.id} className="w-[full] h-full px-2 flex flex-col items-center md:mb-5">
                            <img src={data.URL} alt="" className="mb-[26px]" />
                            <b className="text-2xl mb-[10px]">{data.title}</b>
                            <p>{data.content}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="w-[1112px] m-auto md:w-[375px] md:mx-[-35px]">
                <img src="/image/session8/bg1.png" alt="" />
                <img src="/image/session8/bg2.png" alt="" />
            </div>
        </div>
    )
}
export default Component6