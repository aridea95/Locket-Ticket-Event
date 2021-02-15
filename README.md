# Locket-Ticket-Event

## About

This is a Locket Ticket Event Online so the user can purchase the ticket with this app.

## Database Schema
This project uses NoSql database, mongoDB.
![Database Scheme](https://res.cloudinary.com/drqvopuni/image/upload/v1613405888/2021-02-15_at_23-16-46_dpx8tq.png)

## MongoDB Collection

You can find full data of mongoDB collection in screenshot

- Event Collection
![Sample](https://res.cloudinary.com/drqvopuni/image/upload/v1613357442/Event_Database_zwyqwm.png)

- Ticket Collection
![Sample](https://res.cloudinary.com/drqvopuni/image/upload/v1613357442/Ticket_Database_qlfgyj.png)

- Transaction Collection
![Sample](https://res.cloudinary.com/drqvopuni/image/upload/v1613405975/2021-02-15_at_23-18-36_xtlzuc.png)


## Installation Step
- First you need to clone the repository master from Github, for clone the repository copy the link from github, and in the terminal use :
```
$ git clone https://github.com/aridea95/Locket-Ticket-Event.git
```
- after finish clone the repository you have to install the dependecies, you can install all the dependecies for this app by using :
```
$ npm i/install or yarn install -y 
```
- for start the app use this command in terminal. 
```
$ npm run dev 
```

## How it works

Here is the full guide and response of the API on what feature you can apply.

To give you a clear explanation, these are the list of actors and business processes.

#### Actors
- User Event Creator
- User Purchase Ticket

by default, there are already created events. However, you can create more for I provided the API to create events.

#### Business Processes

**1. As user Event Creator**

- Get all Events => user can choose event from the listed event.
- Create a Events => Input detail event.
- Create a Tickets => Input ticket with different type for the event.
- Get all Transaction => user can see the detail transaction that user has been purchased.

**2. As user want to purchase ticket**
- Get all Events => user can choose event from the listed event.
- choose ticket for the event.
- create a transaction and fill the detail for the transaction.
- Get all Transaction => user can see the detail transaction that user has been purchased.

**Create Event**

![Create Event req](https://res.cloudinary.com/drqvopuni/image/upload/v1613363364/2021-02-15_at_11-24-38_snsrfz.png)
![Create Event res](https://res.cloudinary.com/drqvopuni/image/upload/v1613363365/2021-02-15_at_11-25-31_uxpewz.png)

Give a response of success status and created event's name will be stored.

**Create Ticket**

- input the event Data

![Create Ticket Req](https://res.cloudinary.com/drqvopuni/image/upload/v1613364018/2021-02-15_at_11-38-47_jqpgf4.png)

- Data event has been created
![Create Ticket Res](https://res.cloudinary.com/drqvopuni/image/upload/v1613364018/2021-02-15_at_11-39-07_pwgahj.png)

Give a response of success status and created ticket's name and eventId  will be stored.

**Get All Event**

Give a response of success status and all events.

![Get all events](https://res.cloudinary.com/drqvopuni/image/upload/v1613365451/2021-02-15_at_11-55-28_plfaj5.png)
![Get all events](https://res.cloudinary.com/drqvopuni/image/upload/v1613365451/2021-02-15_at_11-55-58_gnqxhy.png)
![Get all events](https://res.cloudinary.com/drqvopuni/image/upload/v1613365451/2021-02-15_at_11-56-18_duyl07.png)
![Get all events](https://res.cloudinary.com/drqvopuni/image/upload/v1613365451/2021-02-15_at_11-56-35_jmcx0s.png)
![Get all events](https://res.cloudinary.com/drqvopuni/image/upload/v1613365464/2021-02-15_at_12-01-38_h5ovj7.png)
![Get all events](https://res.cloudinary.com/drqvopuni/image/upload/v1613365452/2021-02-15_at_12-02-37_jnnlcr.png)

**Create Transaction**

Create transaction for the same ticket event with req and res.

![Create Transaction](https://res.cloudinary.com/drqvopuni/image/upload/v1613403566/2021-02-15_at_21-29-37_ruu6j9.png)
![Create Transaction](https://res.cloudinary.com/drqvopuni/image/upload/v1613403566/2021-02-15_at_21-30-10_fv4ryd.png)
![Create Transaction](https://res.cloudinary.com/drqvopuni/image/upload/v1613403566/2021-02-15_at_22-12-23_bftrcz.png)
![Create Transaction](https://res.cloudinary.com/drqvopuni/image/upload/v1613403566/2021-02-15_at_22-13-07_fl4pgv.png)

**Get All Transaction**

Give a response of success status and all events.

![Get all transaction](https://res.cloudinary.com/drqvopuni/image/upload/v1613403566/2021-02-15_at_22-12-23_bftrcz.png)
![Get all transaction](https://res.cloudinary.com/drqvopuni/image/upload/v1613403566/2021-02-15_at_22-13-07_fl4pgv.png)

## Backend Dependencies

The framework and packages used are listed below:

- [express](https://www.express.com/)
- [mongoose](https://mongoosejs.com)
- [cors](https://www.npmjs.com/package/bcrypt)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [node-uuid](https://www.npmjs.com/package/node-uuid)

## Documentation

The documentation for this project can be found here and if you use [Postman](https://www.getpostman.com/) you can directly run all of the API within the environment

- [Online Ticket Reservation](https://www.getpostman.com/collections/4eb53f10ea5d41f3bdf9)
