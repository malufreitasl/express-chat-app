import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage, } from "../components/ui/avatar"
import { Card } from "./ui/card"



export function Contacts() {
    return (
        <>
            <Card>
                <div className="p-1 px-2">
                    <div className="flex items-center content-start gap-2">
                        <Avatar>
                            <AvatarImage src='https://github.com/brazilianBug.png' alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="flex items-start flex-col">
                            <div className="w-[250px]" >
                                <p className="font-semibold text-md">Lendro</p>
                            </div>
                            <div className="w-[200px]" >
                                <p className="text-sm opacity-60 "> Teu cu... </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>


        </>
    )
}