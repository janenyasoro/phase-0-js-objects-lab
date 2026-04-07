//create a variable named attendee
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
}

//create a function named logAttendeeName
function logAttendeeName(attendee){
  console.log(attendee.name);
}

//create a function named logTicketPrice
function logTicketPrice(attendee){
  console.log(attendee.ticketPrice);
}

//Create a function named updateTicketType
function updateTicketType(attendee, newTicketType){
  attendee.ticketType = newTicketType;
  console.log(attendee.ticketType);
}

//Create a function named updateTicketPrice
function updateTicketPrice(attendee,newTicketPrice){
  attendee.ticketPrice = newTicketPrice;
  console.log(attendee.ticketPrice);
} 
 
//create a function named removeEventProperty
function removeEventProperty(attendee){
  delete attendee.event;
  console.log(attendee.event);
}

//Create a function named addCheckedInProperty
function addCheckedInProperty(attendee){
  attendee.checkedIn = true;
  console.log(attendee.checkedIn);
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};