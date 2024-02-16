import { Input } from "../components/ui/input"
import { Button } from "@radix-ui/themes"
import { Link } from "react-router-dom"
import {  useState } from "react"
import { ChatPage } from "./chatPage"


export function Login() {
    const [user, setUser] = useState("")
    const [userChats, setUserChats] = useState([])
    

    const handleFetchUser = async () => {
        try {
            const res = await fetch(`/api/messages/${user}`)
            const body = await res.json()
            
            // localStorage.setItem("messages", JSON.stringify(body))
            setUserChats(body)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            {userChats.length >= 1 ? (
                <ChatPage userChats={userChats} userName={user} />
            ) : (
                <div className="flex flex-col h-dvh items-center content-center justify-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Name" onChange={(e) => setUser(e.target.value)} />
                    <Button variant="outline" className="bg-white border-zinc-800 border-2 px-2 h-full rounded-md" onClick={handleFetchUser}>Button</Button>

                </div>
            </div>
            )}

        </>
    )
}