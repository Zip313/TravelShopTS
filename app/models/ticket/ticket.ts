// Определить интерфейс ITicket

// Определить интерфейс IVipTicket который расширяет  ITicket

// Определить тип TicketType который будет объединять 2 интерфейса IVipTicket и ITicket

import {IUser} from "../user/user";

export interface ITicket {
    // id?: string,
    description: string,
    name: string,
    price: string,
    tourOperator: string,
    location: {
        x: '30.4044',
        y: '70.45'
    },
    hotel: string
}

export interface IVipTicket extends ITicket {
    vipNumber: number,
    vipStatus: string,
}

export type TicketType = ITicket | IVipTicket;

export interface IPostTicketData {
    ticket: TicketType,
    user: IUser,
}

