export type friendMenuVariant = "main" | "requests" | "recommend" | "all"; 

export interface friendMenuProps  {
    variant: friendMenuVariant;
    setVariant: (variant: friendMenuVariant) => void
}