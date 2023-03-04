import {getTours} from "@rest/tours";
import './assets/styles/main.scss';
import {images} from "@services/img/img";
import {ITours} from "./models/tours";
import {getTourTemplate} from "./templates/tours";
import {openModal} from "@services/modal/modalService";
import {
  initFooterTitle,
  initHeaderTitle,
  initTicketSellDivElements,
  initToursDivElements
} from "@services/general/general";

export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist

const isPathTicket:boolean = window.location.pathname=="/ticket.html"

if(!isPathTicket) {
  initHeaderTitle('Туры', 'h1');
  initFooterTitle('Туры по всему миру', 'h2');
}
// init data
const tourData: Promise<ITours[]> = getTours();

tourData.then((data): void => {
  console.log('call')
  toursDataArray = data;
  initApp(data);
});


// init app

/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
-   создать метод initApp который будет здесь вызываться, в теле метода добавить эти имортированные методы
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы чтобы не было ошибок
*/

export function initApp(data:ITours[]):void{

  if(!isPathTicket) {
    initToursDivElements(data);
  }
  else {
    const params = new URL(location.href).searchParams;
    const tourId = +params.get('tourId');
    console.log(tourId)
    initTicketSellDivElements(data, tourId);
  }
}






