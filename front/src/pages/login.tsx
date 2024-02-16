import { Input } from "../components/ui/input"
import { Button } from "@radix-ui/themes"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"


export function Login() {
    const [user, setUser] = useState<string>("")


    const handleFetchUser = async () => {
        try {
            const res = await fetch(`/api/messages/${user}`)
            const body = await res.json()
            console.log(body)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="flex flex-col h-dvh items-center content-center justify-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input type="text" placeholder="Name" onChange={(e) => setUser(e.target.value)} />
                    <Link to={`/Chat`}>
                    <Button variant="outline" className="bg-white border-zinc-800 border-2 px-2 h-full rounded-md" onClick={handleFetchUser}>Button</Button>
</Link>
                    {/* <Link className={buttonVariants({ variant: "outline" })}>Click here</Link> */}
                </div>
            </div>

        </>
    )
}