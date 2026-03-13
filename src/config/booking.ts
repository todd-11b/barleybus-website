export const BOOKING_LINKS = {
  hub: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/all?wid=3",
  brewery: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/product/3?wid=9",
  breweryDistillery: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/product/6?wid=9",
  breweryWinery: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/product/8?wid=9",
  breweryWineryDistillery: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/product/11?wid=9",
  winery: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/product/13?wid=9",
  tacosMargaritas: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/product/15?wid=9",
  bbq: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/product/17?wid=9",
  ghostGangsters: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/product/20?wid=9",
  sightseeing: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/product/31?wid=9",
  holidayLights: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/product/22?wid=9",
  partyBus: "https://barley-bus-tours-transportation.captainbook.io/en/embedded/all?wid=3",
} as const;

export type BookingKey = keyof typeof BOOKING_LINKS;
