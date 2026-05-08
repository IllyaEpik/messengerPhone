
export interface friend{ 
    avatar: string;
    username: string;
    name: string;
}

export interface friendsSectionProps {
    title: string;
    primaryAction: string;
    friends: friend[]
}