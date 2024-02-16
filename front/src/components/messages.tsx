
import { ScrollArea } from "../components/ui/scroll-area"
import { Balloon } from "./ui/ballon"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)


export function Messages(chatInfo) {

    //To, send,content,ms(time),
    return (
        <>
            <ScrollArea className="rounded-md border h-dvh p-2">
                <Balloon chatInfo={chatInfo}/>
                
            </ScrollArea>
        </>
    )
}