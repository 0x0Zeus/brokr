## Attractions components

#### AttractionComponent

- input attraction: IAttraction (information about the attraction)

Component contains brief information about the attraction.

#### AttractionsFilterComponent

Contains a set of inputs for selecting search parameters for attractions.

Contains a filters button that opens a modal window with additional filters (AttractionsFilterModalComponent).

#### AttractionsFilterModalComponent

Contains a set of inputs for selecting additional filters for searching attractions.

## Cars components

#### CarComponent

- input car: ICar (information about the car)

Component contains brief information about the car.

#### CarExtraComponent

- input extra: ICarExtraDetails (information about additional car options)

Component contains brief information about additional car options.

#### CarSpecsComponent

- input specifications: ICarDetailsSpec (information about car specifications)

Component contains brief information about car specifications.

#### CarsFilterComponent

Contains a set of inputs for selecting search parameters for cars.

#### CarReviewComponent

- input review: ICarReview (information about a car rental review)

Contains information about a car rental review.

#### CarReviewsComponent

Renders a list of CarReviewComponent.

## Stays components

#### StayComponent

- input stay: IStay (information about the hotel)

Component contains brief information about the hotel.

#### StaySpecsComponent

- input specs: IStayDetailsSpecs (information about hotel specifications)

Component contains information about hotel specifications.

#### StaysFilterComponent

Contains a set of inputs for selecting search parameters for hotels.

#### StaysFilterModalComponent

Contains a set of inputs for selecting additional filters for searching hotels.

#### StayReviewsComponent

Displays hotel reviews (ReviewComponent).

## Flights components

#### FlightComponent

- input flight: IFlight (information about the flight)

Component contains brief information about the flight.

#### FlightLuggageComponent

- input luggage: IFlightLuggage (information about luggage)

Component contains information about luggage.

#### FlightsFilterComponent

Contains a set of inputs for selecting search parameters for flights.

#### FlightsFilterModalComponent

Contains a set of inputs for selecting additional filters for searching flights.

## SharedComponents

#### MapComponent

Component for rendering the map and markers of found items.

#### ModalComponent

- output closeModal: boolean (emits an event to close the modal window)

Wrapper for displaying components as a modal window.

#### RatingComponent

- input rating: number (rating value)

Component for displaying the rating.

#### ReviewComponent

- input review: IReview (information about the review)

Component for displaying a review.

#### SliderComponent

- input photos: IPhoto[] (information about image URLs)

Component for displaying images of found items.

## Core components

#### FooterComponent

Component displaying the footer and its information.

#### HeaderComponent

Component displaying the header and its information.

#### NavigationComponent

Component displaying navigation and a map switcher if available for the current page.

#### NavigationMobileComponent

Component displaying navigation and a map switcher if available for the current page on mobile devices.

#### ToasterComponent

- input toast: IToaster (toast message);
- input index: number (toast index);

Component displaying a toast message.

#### ToasterComponent

Component displaying toast messages (ToasterComponent).
