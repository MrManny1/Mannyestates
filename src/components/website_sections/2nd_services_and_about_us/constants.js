import starLogo from "./images/star-symbol.svg";
import clocksLogo from "./images/clock-symbol.svg";
import giftboxLogo from "./images/giftbox-symbol.svg";
import wifiLogo from "./images/wifi-symbol.svg";

export const serviceCards = [
        
    {   
        id: 1, title: "Selection of real estate for investment", 
        brief: "Securing your finances from inflation", 
        price: "Free",
        desc: [ "Assistance with choosing the strategy of investing, fitting your goals and budget",
                "Assistance with choosing liquid investment prjects",
                "We will teach you how to benefit from investing without dificulties and risks" ]
    }, { 
        id: 2, title: "Selection and purchasing of real estate for living", 
        brief: "Taking all responsibility for purchasing your dream apatment", 
        price: "Free",
        desc: [ "We will find you an partment that suits your demands",
                "Arranging a demonstrations of suitable apartments",
                "Assistance with preparing all the documents",
                "Checking the legal clearness of the transaction",
                "Assistance with getting the loan",
                "We will guide you through every step of the transaction" ]
    }, {  
        id: 3, title: "Lawer support of the transaction",
        brief: "Save yourself from dealing with dishonest dealers and buyers", 
        price: "Free",
        desc: [ "Checking the real estate objects and the documents",
                "Assistance with preparing all the documents required for the transaction",
                "*You get to keep a certificate of legal clearness of the estate" ]
    }, {  
        id: 4, title: "Selling real estate",
        brief: "Simplifying the task of selling your apartment for a price you want", 
        price: "Negotiable",
        desc: [ "Preparing the estate for selling",
                "Presentation and advertisment support",
                "Checking of the legal clearness of the second party",
                "Assistance with preparing all the documents and signing a contract",
                "We will guide you through every step of the transaction" ]
    }
];

export const values = [

    {   id: 1,  symbol: starLogo,   title: "Quality Service",
        desc: ["We arrange presentations and consultations with showing all the choise of apartments online or in our office"]
    }, 
    
    {   id: 2,  symbol: clocksLogo, title: "Economy of Your time",
        desc: ["We quickly and efficiently provide the selection of resedential and commercial real estate objects"]
    }, 
    
    {   id: 3,  symbol: giftboxLogo, title: "Bonuses",
        desc: ["&#8226; Cashback system for any new clients brought.", "&#8226; You get to know the dates of trading launch in advance"]
    }, 
    
    {   id: 4,   symbol: wifiLogo,   title: "Mobility",
        desc: ["We work with clients from other cities or countries"]
    }
];