import Link from "next/link";
import { Cog } from "./icons";
import { SignOut } from '@/(auth)/auth/actions';

export default async function UserNav({ data }: any) {
    return (
        <div className="hidden relative w-full space-x-12 items-center justify-end lg:flex">
            <p>{data.user.email}</p>
            <Link href="/"><Cog className="size-7 text-stone-900 fill-current"/></Link>
            <SignOut/>
        </div>
    )
}