import axios from "axios";

export const sendTGNotification = async (message, setLoading) => {

    setLoading(true);

    const TOKEN = process.env.REACT_APP_TG_BOT_TOKEN;
    const CHAT_ID = process.env.REACT_APP_TG_BOT_CHAT_ID;
    const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    const status = await axios.post(URI_API, {
        chat_id: CHAT_ID, 
        text: message, 
        parse_mode: 'HTML'
    })
    .then(response => {
        setLoading(false);
        return response.data.ok;
    })
    .catch(error => {
        console.log(error);
        setLoading(false);
        return error.response.data.ok;
    });

    return status;
}