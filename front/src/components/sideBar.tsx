import { Contacts } from "./contacts";

export function SideBar({userChats, userName, chatInfo, setChat}) {
    return (
        <>
            <div className="flex flex-col gap-2 p-2">
                <Contacts userChats={userChats} userName={userName} chatInfo={chatInfo} setChat={setChat}/>
            </div>
        </>
    )
}