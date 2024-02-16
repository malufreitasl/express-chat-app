import { Contacts } from "./contacts";

export function SideBar() {
    return (
        <>
            <div className="flex flex-col gap-2 p-2">
                <Contacts />
                <Contacts />
                <Contacts />
            </div>
        </>
    )
}