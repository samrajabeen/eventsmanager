**Elevator pitch** <br>
A booking system for organised sport event bookings<br>
user will signup/login and confirm their attendance.<br>


**User story** <br>
I wish to have a booking system in place
-	To know who will attend my event, their details
-	To know how much and who needs to be charged

Authenticator (authentication) if not authorised signup.<br>
Signup details [id, full name, email, phone number, password, member type, referrer from the group]
- 	Use email as login (compare email no repeats)
- 	Compare referrer to db of names must match (change case and try match)
-	Member type hidden status (allowing for admin status change in db) default member
Allow admin to create/delete event for date (moment.js?)
-	Create title, number of available signup


**Additional features** 
-	Link/login via fb profile
-	Group message for payment via email/phone
-   PaymentAPI option upon booking

**Min req** 
-	Login/authentication works
-	Can add an event
-	Users can sign up/login
-	Users can “attend” event
