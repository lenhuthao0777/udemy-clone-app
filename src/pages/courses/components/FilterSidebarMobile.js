import { Button } from "component/button";
import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import SubmenuMobile from "./SubmenuMobile";
// import SubMenu from './SubMenu';
function FilterSidebarMobile({ sidebar, setSidebar }) {
    const sideBarData = [
        {
            id: 1,
            title: "Ratings",
            icon: <FaAngleDown className="filter-angle-icon" />,
            iconOpen: <FaAngleUp className="filter-angle-icon" />,
            iconClose: <FaAngleDown className="filter-angle-icon" />,
            isOpen: true,
            subNav: [
                {
                    id: 11,
                    icon1: <IoMdStar className="filter-star-icon-bold" />,
                    icon2: <IoMdStar className="filter-star-icon-bold" />,
                    icon3: <IoMdStar className="filter-star-icon-bold" />,
                    icon4: <IoMdStar className="filter-star-icon-bold" />,
                    icon5: <IoMdStarHalf className="filter-star-icon-half" />,
                    subNavTitle: "From 4.5",
                    count: Math.floor(Math.random() * 1000),
                },
                {
                    id: 22,
                    icon1: <IoMdStar className="filter-star-icon-bold" />,
                    icon2: <IoMdStar className="filter-star-icon-bold" />,
                    icon3: <IoMdStar className="filter-star-icon-bold" />,
                    icon4: <IoMdStar className="filter-star-icon-bold" />,
                    icon5: <IoMdStarOutline className="filter-star-icon-outline" />,
                    subNavTitle: "From 4",
                    count: Math.floor(Math.random() * 1000),
                },
                {
                    id: 33,

                    icon1: <IoMdStar className="filter-star-icon-bold" />,
                    icon2: <IoMdStar className="filter-star-icon-bold" />,
                    icon3: <IoMdStar className="filter-star-icon-bold" />,
                    icon4: <IoMdStarHalf className="filter-star-icon-half" />,
                    icon5: <IoMdStarOutline className="filter-star-icon-outline" />,
                    subNavTitle: "From 3.5",
                    count: Math.floor(Math.random() * 1000),
                },
                {
                    id: 44,

                    icon1: <IoMdStar className="filter-star-icon-bold" />,
                    icon2: <IoMdStar className="filter-star-icon-bold" />,
                    icon3: <IoMdStar className="filter-star-icon-bold" />,
                    icon4: <IoMdStarOutline className="filter-star-icon-outline" />,
                    icon5: <IoMdStarOutline className="filter-star-icon-outline" />,

                    subNavTitle: "From 3",
                    count: Math.floor(Math.random() * 1000),
                },
            ],
        },
        {
            id: 2,
            title: "Video duration",
            icon: <FaAngleDown className="filter-angle-icon" />,
            iconOpen: <FaAngleUp className="filter-angle-icon" />,
            iconClose: <FaAngleDown className="filter-angle-icon" />,
            isOpen: true,
            subNav: [
                {
                    id: 11,
                    subNavTitle: "0-3 hours",
                    count: Math.floor(Math.random() * 1000),
                },
                {
                    id: 22,
                    subNavTitle: "3-6 hours",
                    count: Math.floor(Math.random() * 1000),
                },
                {
                    id: 33,
                    subNavTitle: "6-17 hours",
                    count: Math.floor(Math.random() * 1000),
                },
                {
                    id: 44,
                    subNavTitle: "More than 17 hours",
                    count: Math.floor(Math.random() * 1000),
                },
            ],
        },
        {
            id: 3,
            title: "Theme",
            icon: <FaAngleDown className="filter-angle-icon" />,
            iconOpen: <FaAngleUp className="filter-angle-icon" />,
            iconClose: <FaAngleDown className="filter-angle-icon" />,
            isOpen: false,
            subNav: [
                {
                    id: 11,
                    subNavTitle: "Javascript",
                    count: 596,
                },
                {
                    id: 22,
                    subNavTitle: "Web development",
                    count: 564,
                },
                {
                    id: 33,
                    subNavTitle: "PHP language",
                    count: 473,
                },
                {
                    id: 44,
                    subNavTitle: "WordPress",
                    count: 470,
                },
                {
                    id: 55,
                    subNavTitle: "React",
                    count: 372,
                },
                {
                    id: 66,
                    subNavTitle: "CSS",
                    count: 315,
                },
                {
                    id: 77,
                    subNavTitle: "HTML language",
                    count: 281,
                },
                {
                    id: 88,
                    subNavTitle: "Angular application framework",
                    count: 241,
                },
                {
                    id: 99,
                    subNavTitle: "Laravel",
                    count: 236,
                },
                {
                    id: 100,
                    subNavTitle: "NodeJs",
                    count: 226,
                },
                {
                    id: 111,
                    subNavTitle: "Bootstrap",
                    count: 201,
                },
                {
                    id: 122,
                    subNavTitle: "Django",
                    count: 177,
                },
                {
                    id: 133,
                    subNavTitle: "VueJs application framework",
                    count: 145,
                },
                {
                    id: 144,
                    subNavTitle: "Front-end web development",
                    count: 140,
                },
                {
                    id: 155,
                    subNavTitle: "ASP.NET Core",
                    count: 125,
                },
                {
                    id: 166,
                    subNavTitle: "Python",
                    count: 123,
                },
                {
                    id: 177,
                    subNavTitle: "Java",
                    count: 98,
                },
            ],
        },
        {
            id: 4,
            title: "Sub-category",
            icon: <FaAngleDown className="filter-angle-icon" />,
            iconOpen: <FaAngleUp className="filter-angle-icon" />,
            iconClose: <FaAngleDown className="filter-angle-icon" />,
            isOpen: false,
            subNav: [
                {
                    id: 11,
                    subNavTitle: "Web development",
                    count: "7,676",
                },
                {
                    id: 22,
                    subNavTitle: "IT certification",
                    count: "2",
                },
                {
                    id: 33,
                    subNavTitle: "Programming languages",
                    count: "2",
                },
                {
                    id: 44,
                    subNavTitle: "Development tool",
                    count: "1",
                },
            ],
        },
        {
            id: 5,
            title: "Level",
            icon: <FaAngleDown className="filter-angle-icon" />,
            iconOpen: <FaAngleUp className="filter-angle-icon" />,
            iconClose: <FaAngleDown className="filter-angle-icon" />,
            isOpen: false,
            subNav: [
                {
                    id: 11,
                    subNavTitle: "All level",
                    count: "3,617",
                },
                {
                    id: 22,
                    subNavTitle: "Beginner",
                    count: "2,704",
                },
                {
                    id: 33,
                    subNavTitle: "Intermediate",
                    count: "1,229",
                },
                {
                    id: 44,
                    subNavTitle: "Confirmed",
                    count: "130",
                },
            ],
        },
        {
            id: 6,
            title: "Languages",
            icon: <FaAngleDown className="filter-angle-icon" />,
            iconOpen: <FaAngleUp className="filter-angle-icon" />,
            iconClose: <FaAngleDown className="filter-angle-icon" />,
            isOpen: false,
            subNav: [
                {
                    id: 11,
                    subNavTitle: "Abkhazian",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 22,
                    subNavTitle: "Afar",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 33,
                    subNavTitle: "Afrikaans",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 44,
                    subNavTitle: "Akan",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 55,
                    subNavTitle: "Albanian",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 66,
                    subNavTitle: "Amharic",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 77,
                    subNavTitle: "Arabic",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 88,
                    subNavTitle: "Aragonese",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 99,
                    subNavTitle: "Armenian",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 100,
                    subNavTitle: "Assamese",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 111,
                    subNavTitle: "Avaric",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 122,
                    subNavTitle: "Avestan",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 133,
                    subNavTitle: "Aymara",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 144,
                    subNavTitle: "Azerbaijani",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 155,
                    subNavTitle: "Bambara",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 166,
                    subNavTitle: "Bashkir",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 177,
                    subNavTitle: "Basque",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 188,
                    subNavTitle: "Belarusian",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 199,
                    subNavTitle: "Bengali",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 200,
                    subNavTitle: "Bihari languages",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 211,
                    subNavTitle: "Bislama",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 222,
                    subNavTitle: "Bosnian",
                    count: Math.floor(Math.random() * 10000),
                },
                {
                    id: 233,
                    subNavTitle: "Breton",
                    count: Math.floor(Math.random() * 10000),
                },
            ],
        },
        {
            id: 7,
            title: "Features",
            icon: <FaAngleDown className="filter-angle-icon" />,
            iconOpen: <FaAngleUp className="filter-angle-icon" />,
            iconClose: <FaAngleDown className="filter-angle-icon" />,
            isOpen: false,
            subNav: [
                {
                    id: 11,
                    subNavTitle: "Subtitles",
                    count: "5,262",
                },
                {
                    id: 22,
                    subNavTitle: "Questionnaires",
                    count: "1,326",
                },
                {
                    id: 33,
                    subNavTitle: "Coding exercises",
                    count: "143",
                },
                {
                    id: 44,
                    subNavTitle: "Practical exercises",
                    count: "152",
                },
            ],
        },
        {
            id: 8,
            title: "Subtitles",
            icon: <FaAngleDown className="filter-angle-icon" />,
            iconOpen: <FaAngleUp className="filter-angle-icon" />,
            iconClose: <FaAngleDown className="filter-angle-icon" />,
            isOpen: false,
            subNav: [
                {
                    id: 11,
                    subNavTitle: "Mandarin Chinese",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 22,
                    subNavTitle: "Spanish",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 33,
                    subNavTitle: "English",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 44,
                    subNavTitle: "Hindi/Urdu",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 55,
                    subNavTitle: "Arabic",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 66,
                    subNavTitle: "Bengali",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 77,
                    subNavTitle: "Portuguese",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 88,
                    subNavTitle: "Russian",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 99,
                    subNavTitle: "Japanese",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 100,
                    subNavTitle: "German",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 111,
                    subNavTitle: "Javanese",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 122,
                    subNavTitle: "Punjabi",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 133,
                    subNavTitle: "Wu",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 144,
                    subNavTitle: "French",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 155,
                    subNavTitle: "Telugu",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 166,
                    subNavTitle: "Vietnamese",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 177,
                    subNavTitle: "Marathi",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 188,
                    subNavTitle: "Korean",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 199,
                    subNavTitle: "Tamil",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 200,
                    subNavTitle: "Italian",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 211,
                    subNavTitle: "Turkish",
                    count: Math.floor(Math.random() * 100),
                },
                {
                    id: 222,
                    subNavTitle: "Cantonese/Yue",
                    count: Math.floor(Math.random() * 100),
                },
            ],
        },
    ];
    return (
        <div className={`filter-sidebar-mobile ${sidebar ? "isOpen" : ""}`}>
            <div className="filter-sidebar-mobile__content">
                <div className="filter-sidebar-mobile__content-result">
                    <h1>432 result</h1>
                </div>
                <div className="filter-sidebar-mobile__content-list">
                    {sideBarData.map((item) => {
                        return <SubmenuMobile key={item.id} item={item} />;
                    })}
                </div>
                <div className="button-done" onClick={() => setSidebar(!sidebar)}>
                    <Button size="full" color="btn btn--primary">
                        Done
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FilterSidebarMobile;
