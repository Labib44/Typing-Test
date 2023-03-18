import React, { useState } from 'react';
import io from 'socket.io-client';
import Chat from './Chat';

const socket = io.connect('http://localhost:5000');

const LiveChat = () => {
    const [userName, setUserName] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);

    const joinRoom = () => {
        if (userName !== "" && room !== "") {
            socket.emit("join_room", room);
            setShowChat(true);
        }
    };

    return (
        <div className=' my-20'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto p-10">
                {!showChat ? (
                    <div className="">
                        <h1 className='text-center text-2xl font-serif font-bold'>Join Room</h1>
                        <input className="input input-bordered input-info w-full m-3"
                            type="text"
                            placeholder="Labib..."
                            onChange={(event) => {
                                setUserName(event.target.value);
                            }}
                        />
                        <input className="input input-bordered input-info w-full m-3"
                            type="text"
                            placeholder="Room ID..."
                            onChange={(event) => {
                                setRoom(event.target.value);
                            }}
                        />
                        <button className='btn btn-outline btn-primary m-3' onClick={joinRoom}>Join A Room</button>
                    </div>
                ) : (
                    // <Chat socket={socket} username={userName} room={room} />
                    <Chat socket={socket} username={userName} room={room}></Chat>
                )}
            </div>
            
        </div>
    );
};

export default LiveChat;