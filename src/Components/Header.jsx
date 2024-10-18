
const Header = () => {
    return (
        <div>
            <div className="w-[1112px] h-20 flex flex-row items-center m-auto md:w-full md:justify-between md:h-auto md:mb-[75.83px]">
                <img src="../public/image/Group.png" alt="" className="w-[162px] mr-[229px] md:w-[124px] md:h-[21.17px] md:mt-[30px] md:mr-0 " />
                <ul className="w-[675px] h-[13px] relative right flex flex-row justify-between text-sm md:hidden">
                    <li>HOME</li>
                    <li>SERVICES</li>
                    <li className="text-primary">BLOCKCHAIN</li>
                    <li>BLOG</li>
                    <li>JOBS</li>
                    <li>ABOUT</li>
                    <li>TESTIMONIALS</li>
                    <li>CONTACT</li>
                </ul>
                <button className="w-[18px] h-3 mdpc:hidden md:block md:w-6 md:h-6 md:mt-[30px]">
                    <img src="/image/hamburger.png" alt="" />
                </button>
            </div>
            <hr className="border w-[1112px] mx-auto mb-[92px] md:hidden mdpc:block" />
        </div>


    )
}
export default Header