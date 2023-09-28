import { MouseEventHandler } from "react";

export interface CustonButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement
>
btntype?:"button"|"submit";

}
export interface SearchManufacturesProps{
    manufacturer: string;
    setManufacturer :(manufacturer: string)=>void;
}