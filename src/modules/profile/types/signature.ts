import { IUser } from "@/shared/types/user"

export interface IProps {
    setSignature: (signature:string) => void 
    setScrollEnabled: (scroll: boolean) => void
    edit:boolean
    user:IUser
    signature: string | null
}