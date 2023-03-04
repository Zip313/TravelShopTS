
/* Общие методы используются для вставки текста в header   footer*/

/*  -
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы
*/
import {ITours} from "../../models/tours";
import {getTourTemplate} from "../../templates/tours";
import {openModal} from "@services/modal/modalService";
import {initTicketElementTemplate} from "../../templates/ticketInfo";

export function initHeaderTitle(ticketName:string, selector:string):void {
    const headerElement= document.querySelector('header');
    const targetItem = headerElement.querySelector(selector) as HTMLElement;
    if (targetItem) {
        targetItem.innerText  = ticketName;
    }
}

export function initFooterTitle(ticketName:string, selector:string):void {
    const headerElement = document.querySelector('footer');
    const targetItem = headerElement.querySelector(selector) as HTMLElement;
    if (targetItem) {
        targetItem.innerText = ticketName;
    }
}

export function initToursDivElements(data:ITours[]):void {

    if (Array.isArray(data)) {
        const rootElement = document.querySelector('.main-app');
        const tourWrap = document.createElement('div');

        tourWrap.classList.add('tour-wrap');

        // init click for modal
        initTourElemListener(tourWrap);

        let rootElementData = '';
        data.forEach((el, i) => {
            rootElementData += getTourTemplate(el, i);
        });

        tourWrap.innerHTML = rootElementData;
        rootElement.appendChild(tourWrap) ;
    }
}


export function initTourElemListener(tourWrap):void {
    tourWrap.addEventListener('click', (ev) => {
        const targetItem = ev.target;
        const parentItem = targetItem?.parentNode;
        let realTarget;

        if (targetItem.hasAttribute('data-tour-item-index')) {
            realTarget = targetItem;
        } else if (parentItem && parentItem.hasAttribute('data-tour-item-index')) {
            realTarget = parentItem;
        }

        if (realTarget) {
            const dataIndex = realTarget.getAttribute('data-tour-item-index');
            openModal('order', Number(dataIndex));
        }
    });
}

export function initTicketSellDivElements(data:ITours[],index:number):void {

    if (data) {
        const rootElement = document.querySelector('.main-app');
        const tourWrap = document.createElement('div');

        tourWrap.classList.add('ticket-info');

        // init click for modal
        initTourElemListener(tourWrap);

        let rootElementData = getTourTemplate(data[index],index);
        // data.forEach((el, i) => {
        //     rootElementData += initTicketElementTemplate(el, i);
        // });

        tourWrap.innerHTML = rootElementData;
        rootElement.appendChild(tourWrap) ;
    }
}