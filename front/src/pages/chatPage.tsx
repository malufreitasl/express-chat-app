import { Chat } from '../components/chat'
import { Messages } from '../components/messages'
import { SideBar } from '../components/sideBar'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ChatPage() {
    return (
        <>
            <div className='h-dvh p-4'>
                <ResizablePanelGroup direction="horizontal"
                    className="h-dvh w-full rounded-lg border"
                >
                    <ResizablePanel defaultSize={25}>
                        <SideBar />
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={75}>
                        <div className='flex p-2 gap-4 w-full h-full flex-col justify-between items-center content-center'>
                            <Messages />
                            <Chat />
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </>
    )
}