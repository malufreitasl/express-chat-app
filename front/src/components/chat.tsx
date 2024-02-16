import { Textarea } from "@/components/ui/textarea"
import { ChevronRightIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"

export function Chat() {
    return (
        <>

            <div className="w-full flex gap-2  items-center">
                <Textarea placeholder="Type your message here." />
                <Button variant="outline" size="icon">
                    <ChevronRightIcon className="h-6 w-6" />
                </Button>
            </div>
        </>
    )
}