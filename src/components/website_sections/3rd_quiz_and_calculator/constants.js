import houseLogo from "./images/house-symbol.svg";
import documentLogo from "./images/document-symbol.svg";
import searchLogo from "./images/search-symbol.svg";
import leafLogo from "./images/leaf-symbol.svg";
import careLogo from "./images/care-symbol.svg";
import handshakeLogo from "./images/handshake-symbol.svg";
import scheduleLogo from "./images/schedule-symbol.svg";
import dialogueLogo from "./images/dialogue-symbol.svg";

export const values = [

    {   
        id: 1,  symbol: houseLogo,
        desc: ["Selecting an apartment according to your request regarding preferable schedule and payment options"]
    }, {   
        id: 2,  symbol: documentLogo,
        desc: ["Supporting your transaction and documentation jurisdically on every step"]
    }, {   
        id: 3,  symbol: searchLogo,
        desc: ["Organizing viewing presentations of selected variants"]
    }, {   
        id: 4,   symbol: leafLogo,
        desc: ["Commiting a \"clearness\" checks of the estate object before purchasing"]
    }, {   
        id: 5,  symbol: careLogo,
        desc: ["Helping to receive maternity capital"]
    }, {   
        id: 6,  symbol: handshakeLogo,
        desc: ["Negotiating with the vendor in regards to transaction conditions"]
    }, {   
        id: 7,  symbol: scheduleLogo,
        desc: ["Selecting the most profitable mortage programs for you with discounts from partner-banks"]
    }, {   
        id: 8,   symbol: dialogueLogo,
        desc: ["Providing tax refund advice"]
    }
];

export const quizQuestions = [

    {   
        question: "Which kind of service interests you?",
        choices: [ "Selecting and buying an estate for living", "Selecting and buying an estate for investment" ],
        type: "MCQ"
    }, {   
        question: "Which location are you interested in?",
        choices: [ "Saint-Petersburg", "Leningrad Region" ],
        type: "MCQ"
    }, {
        question: "How many rooms would you like to have?",
        choices: [ "Studio", "1-room appartment", "2-room appartment", "3-room appartment and bigger" ],
        type: "MCQ"
    }, {   
        question: "Which budget do you consider?",
        choices: [ "Under 7 millions", "Under 10 millions", "Above 10 millions" ],
        type: "MCQ"      
    }, {   
        question: "Do you want to settle in immediately or are you ready to wait?",
        choices: [ "I want it ready", "I am ready to wait for up to 1 year", "I am ready to wait for 2-3 years", "Does not matter" ],
        type: "MCQ"
    }, {
        question: "Do you want the primary finishing to be included?",
        choices: [ "With finishing", "Without finishing" ],
        type: "MCQ"
    }, {   
        question: "Your name",
        type: "FIB"
    }, {   
        question: "Your phone number",
        type: "TEL"
    }, {   
        question: "How would you like to get a result?",
        choices: [ "Telegram", "WhatsApp" ],
        type: "MCQ"
    }

];