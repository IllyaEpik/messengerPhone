
export interface IProps {
    onChange: (uri: string) => void;
    filled?: boolean;
    icon?: React.ReactElement;
    text: string; 
}