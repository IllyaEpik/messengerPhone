export interface AuthProps {
  	authType: "login" | "register";
}
export interface codeInputProps{
	setCode: (code:string) => void
	code: string
}