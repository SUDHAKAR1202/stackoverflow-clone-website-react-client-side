import React, { Component } from 'react'



export default class Chatbot extends Component {

   

    componentDidMount() {

        (function (d, m) {
            var kommunicateSettings =
                { "appId": "292b9f1c84de0dcdb7825c7f41f2faf49", "popupWidget": true, "automaticChatOpenOnNavigation": true };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});

    }

    

   
    
    render() {
        return (
            <div>

            </div>
        )
    }
}
