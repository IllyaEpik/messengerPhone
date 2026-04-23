export interface albumModalProps {
    isEdit: boolean
    isOpen: boolean
    close: () => void
}
export interface albumForm {
    year: number
    topic: string
    name: string
}