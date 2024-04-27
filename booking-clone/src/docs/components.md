## Attractions components

#### AttractionComponent

- input attraction: IAttraction (информация о развлечении)

Компонент содержит краткую информацию о развлечении

#### AttractionsFilterComponent

Содержит набор inputs для выбора входных данных для поиска развлечения

Содержит кнопку filters которая открывает модальное окно с дополнительными фильтрами AttractionsFilterModalComponent

#### AttractionsFilterModalComponent

Содержит набор inputs для выбора дополнительных фильтров для поиска развлечения

## Cars components

#### CarComponent

- input car: ICar (информация об авто)

Компонент содержит краткую информацию об авто

#### CarExtraComponent

- input extra: ICarExtraDetails (информация о дополнительных опциях для авто)

Компонент содержит краткую информацию о дополнительных опциях для авто

#### CarSpecsComponent

- input specifications: ICarDetailsSpec (информация о характеристиках авто)

Компонент содержит краткую информацию о характеристиках авто

#### CarsFilterComponent

Содержит набор inputs для выбора входных данных для поиска авто

#### CarReviewComponent

- input review: ICarReview (информация об отзыве на аренду авто)

Содержит информацию об отзыве на аренду авто

#### CarReviewsComponent

Отрисовывает список CarReviewComponent

## Stays components

#### StayComponent

- input stay: IStay (информация об отеле)

Компонент содержит краткую информацию об отеле

#### StaySpecsComponent

- input specs: IStayDetailsSpecs (информация о характеристиках отеля)

Компонент содержит информацию о характеристиках отеля

#### StaysFilterComponent

Содержит набор inputs для выбора входных данных для поиска отелей

#### StaysFilterModalComponent

Содержит набор inputs для выбора дополнительных фильтров для поиска отелей

#### StayReviewsComponent

Показывает отзывы ReviewComponent на отель

## Flights components

#### FlightComponent

- input flight: IFlight (информация о полете)

Компонент содержит краткую информацию о полете

#### FlightLuggageComponent

- input luggage: IFlightLuggage (информация о багаже)

Компонент содержит информацию о багаже

#### FlightsFilterComponent

Содержит набор inputs для выбора входных данных для поиска билетов на самолеты

#### FlightsFilterModalComponent

Содержит набор inputs для выбора дополнительных фильтров для поиска билетов на самолеты

## SharedComponents

#### MapComponent

Компонент по отрисовке карты и меток найденных предметов

#### ModalComponent

- output closeModal: boolean (генерирует событие по закрытию модального окна)

Обертка для отображения компонентов в виде модального окна

#### RatingComponent

- input rating: number (значение рейтинга)

Компонент по отображению рейтинга

#### ReviewComponent

- input review: IReview (информация об отзыве)

Компонент по отображению отзыва

#### SliderComponent

- input photos: IPhoto[] (информация о адресах изображений)

Компонент по отображению изображений найденных предметов

## Core components

#### FooterComponent

Компонент отображающий footer и информацию для него

#### HeaderComponent

Компонент отображающий header и информацию для него

#### NavigationComponent

Компонент отображающий навигацию и переключатель карт если они имеются для данной страницы

#### NavigationMobileComponent

Компонент отображающий навигацию и переключатель карт если они имеются для данной страницы для мобильных телефонов

#### ToasterComponent

- input toast: IToaster (сообщение для тостера);
- input index: number (номер тостера);

Компонент отображающий сообщение-тостер

#### ToasterComponent

Компонент отображающий сообщения-тостеры ToasterComponent
