import React, { Component } from "react";

class ChatRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chatRoom: [
                {
                    id: 0,
                    name: "GENERAL CHATROOM",
                    description: "YOU CAN DISCUSS ON ANY TOPIC FROM YOUR SYLLABUS"
                },
                {
                    id: 1,
                    name: "COMPETITIVE CHATROOM",
                    description: "COMMUNICATE WITH INTERNATIONAL LEVEL CODERS AND PREPARE FOR CODING COMPETITIONS LIKE (HASHCODE, CODEJAM, KICKSTART, ICPC DISCUSS THE PROBLEMS OF COMPETITIVE PROGRAMMING PLATFORMS WANT TO BECOME A SUCCESSFUL CODER AND PROBLEM SOLVER? JUMP IN THE OCEAN OF COMPETITIVE PROGRAMMING TAKE A DEEP DIVE DISCUSS YOUR COMPETITIVE PROBLEM IN YOUR OWN CHATROOM WITH INTERNATIONAL AS WELL AS LOCAL COMMUNITY MEMBERS"
                },
                {
                    id: 2,
                    name: "WEB DEVELOPMENT",
                    description: "THIS CHATROOM IS ESPECIALLY FOR WEB DEVELOPERS, DISCUSS ANYTHING RELATED TO WEB DEVELOPMENT AND DO PROJECTS WITH TALENTED PEOPLE AROUND YOU"
                },
                {
                    id: 3,
                    name: "ANDROID DEVELOPMENT",
                    description: "IF YOU ARE A ANDROID ENHUSIAST THEN, YOU ARE MOST WELCOME TO THE COMMUNITY OF ANDROID DEVELOPERS. TRY TO EAT EVERY BUG FROM YOU CODE"
                },
                {
                    id: 4,
                    name: "INTERNSHIP PROGRAM",
                    description: "THIS CHATROOM WILL HELP EVERY COLLEGE STUDENTS. YOU CAN DISCUSS LATEST INTERNSHIP PROGRAMS."
                },
                {
                    id: 5,
                    name: "AI & ML",
                    description: "WELCOME TO THIS HUGE WORLD OF ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING.DISCUSS YOUR QUERY OF AI & ML AND HELP OTHER BY SOLVING THEIR QUERIES. "
                },
                
            ] 
        }
    }

    render() {

        const chat = this.state.chatRoom.map(chatroom => {
            return(
                <div key={chatroom.id} className="chat-room-card">
                    <p>{chatroom.description}</p>
                    <a href="#">{chatroom.name}</a>
                </div>
            );
        });

        return(
            <section className="chatroom">
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