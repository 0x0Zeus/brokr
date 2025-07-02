#### getNowDate

Returns the current date and time.

#### getTomorrowDate

Returns tomorrow's date.

#### parseDate

- input date: Date

Converts and returns the date without time as a string in the format 2024-04-27.

#### parseTime

- input date: Date

Converts the date and returns the time as a string in the format 05:36 PM.

#### getShortDateFormat

- input date: string

Converts and returns the date in the format 05.05.2024.

#### getFullDateFormat

- input date: string

Converts and returns the date in the format April 27, 2024 at 10:15 PM.

#### transformAttractionsResponse, transformCarsResponse, transformFlightsResponse, transformStaysResponse

Files contain transformer functions for parsing API responses and returning only the necessary data as an object.
