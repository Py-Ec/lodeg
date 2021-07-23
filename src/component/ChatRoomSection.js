import React, { Component } from "react";
import  telegramImg  from '../asset/image/new/chat_1.svg';

class ChatRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chatRoom: [
                {
                    id: 0,
                    name: "GENERAL CHATROOM",
                    description: "YOU CAN DISCUSS ON ANY TOPIC FROM YOUR SYLLABUS",
                    img: telegramImg

                },
                {
                    id: 1,
                    name: "COMPETITIVE CHATROOM",
                    description: "COMMUNICATE WITH INTERNATIONAL LEVEL CODERS. ",
                    img: telegramImg
                }
            ] 
        }
    }

    render() {

        const chat = this.state.chatRoom.map(chatroom => {
            return(
                <div key={chatroom.id} className="chat-room-card">
                    <div className="chat-room-card-img">
                        <img src={chatroom.img} alt="chat image" />
                    </div>
                    <div className="chat-room-card-para">
                        <h3>{chatroom.name}</h3>
                        <p>{chatroom.description}</p>
                        <div className="chat-room-card-link">
                            <a target="_blank" href="#">{chatroom.name}</a>
                        </div>
                    </div>
                </div>
            );
        });

        return(
            <section id="chat" className="chatroom">
                <div className="chatroom-container">
                    <h2>ChatRoom</h2>
                    <div className="chatroom-content">
                        {chat}
                    </div>
                </div>
            </section>
        );
    }
}

export default ChatRoom;