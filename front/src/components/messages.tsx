import { Ballon } from "./ui/ballon";
import { ScrollArea } from "../components/ui/scroll-area"

const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)


export function Messages() {

    return (
        <>
            <ScrollArea className="rounded-md border h-dvh p-2">
                <Ballon />
            </ScrollArea>
        </>
    )
}