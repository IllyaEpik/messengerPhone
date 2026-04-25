import { Album } from "../api/api.types"

export interface albumModalProps {
    isEdit: boolean
    isOpen: boolean
    close: () => void
    album?: Album
}
export interface albumForm {
    year: number
    topic: string
    title: string
}