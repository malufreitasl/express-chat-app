import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage, } from "../components/ui/avatar"
import { Card } from "./ui/card"



export function Contacts({ userChats, userName, chatInfo, setChat}) {
    const allContacts: Array<string> = userChats.reduce((acc: Array<string>, e: any) => {
        if (e["from"] === userName) {

            if (!(acc.includes(e["to"]))) {
                acc.push(e["to"]);
            }
        }
        if (e["to"] === userName) {
            if (!(acc.includes(e["from"]))) {
                acc.push(e["from"]);
            }
        }
        return acc;
    }, []);

    return (
        <>
            {(allContacts.map((e) => (
                <Card onClick={setChat(userChats.filter(userChats["from"].includes(e) || userChats["to"].includes(e) ))}>
                    <div className="p-1 px-2">
                        <div className="flex items-center content-start gap-2">
                            <Avatar>
                                <AvatarImage src='https://github.com/brazilianBug.png' alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex items-start flex-col">
                                <div className="w-[250px]" >
                                    <p className="font-semibold text-md">{e}</p>
                                </div>
                                <div className="w-[200px]" >
                                    <p className="text-sm opacity-60 ">  </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            )))}

        </>
    )
}