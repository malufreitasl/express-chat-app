import React, { FC, useState } from 'react';
import { Chat } from '../components/chat';
import { Messages } from '../components/messages';
import { SideBar } from '../components/sideBar';

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "../components/ui/resizable";

interface ChatPageProps {
    userChats: Array<any>;
    userName: string;
}

interface SideBarProps {
    allInfos: Array<string>;
    userName: string;
}

export const ChatPage: FC<ChatPageProps> = ({ userChats, userName }) => {
    const [chat , setChat] = useState([])  

    return (
        <>
            <div className='h-dvh p-4'>
                <ResizablePanelGroup direction="horizontal"
                    className="h-dvh w-full rounded-lg border"
                >
                    <ResizablePanel defaultSize={25}>
                        <SideBar userChats={userChats} userName={userName} chatInfo={chat} setChat={setChat}/>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className='flex p-2 gap-4 w-full h-full flex-col justify-between items-center content-center'>
                            <Messages chatInfo={chat}/>
                            <Chat />
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </>
    );
}