import { HouseIcon } from "@/shared/static/icons/_icons/house";
import FooterTab from "../footerTab";

function home() {
    return (
        <FooterTab icon={<HouseIcon/>} selected={false}/>
    )
}