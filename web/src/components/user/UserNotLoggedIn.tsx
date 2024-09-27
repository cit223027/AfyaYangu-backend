import {useContext} from "react";
import {UserInformationContext} from "@/context/UserInformationContext.ts";
import {Card, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

export default function UserNotLoggedIn(
    {
        id,
        className
    }: {
        id?: string
        className?: string
    }
) {

    const { showLogInDialog } = useContext(UserInformationContext)

    return (
        <Card id={id} className={`${className} w-96`}>
            <CardHeader>
                <CardTitle>Not Logged In</CardTitle>
                <CardDescription>You have not logged in. You can log in to access all features once you have logged in.</CardDescription>
            </CardHeader>
            <CardFooter>
                <div className="w-full">
                    <Button onClick={() => showLogInDialog()}>
                        Log In
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
