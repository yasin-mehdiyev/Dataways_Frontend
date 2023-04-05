// React Icons
import { BsWhatsapp, BsInstagram } from "react-icons/bs";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";

export const languageSwitchers = [
    {
        id: "1",
        code: "az",
        name: "AZ"
    },
    {
        id: "2",
        code: "en",
        name: "EN"
    },
    {
        id: "3",
        code: "ru",
        name: "RU"
    }
];

export const defaultLanguage = "az";

export const colorMode = {
    LIGHT_MODE: "#FFFDFE",
    DARK_MOOE: "#1E1E1E"
};

export const specialities = [
    {
        id: "1",
        name: "app_programming"
    },
    {
        id: "2",
        name: "app_desgn"
    },
    {
        id: "3",
        name: "app_digital_marketing"
    }
];

export const socialMediaAccounts = [
    {
        id: "1",
        icon: <BsWhatsapp />,
        content: "+994504282230",
        url: "https://wa.me/994504282230"
    },
    {
        id: "2",
        icon: <AiOutlineMail />,
        content: "dataways.aze@gmail.com",
        url: ""
    },
    {
        id: "3",
        icon: <BsInstagram />,
        content: "dataways.az",
        url: "https://www.instagram.com/dataways.az/"
    },
    {
        id: "4",
        icon: <AiOutlineLinkedin />,
        content: "dataways.az",
        url: "https://www.linkedin.com/company/dataways-az/"
    }
]
