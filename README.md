# 🎟️ Ticket Booking System (MERN – Backend Focus)
### This project is a ticket booking system built with Node.js, Express, MongoDB, and React. The primary focus is on core booking logic, data consistency, and safe concurrent seat booking.

## 🚀 Setup Instructions
### 1️⃣ Clone the repository

```
git clone https://github.com/Harmandeep01/ticket-booking-backend.git
cd ticket-booking-backend
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Environment variables
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Run the server
```
npm run dev
```
##### Server will start on:
```
http://localhost:5000
```

### 5️⃣ Admin setup (one-time)
- Register a normal user

- Manually update the user’s role to admin in MongoDB
```
role: "admin"
```
#### This admin can create events via a hidden backend route.

## 🧠 Key Assumptions & Design Decisions

### 1️⃣ Seat availability is stored at event level

- Each event has totalSeats and availableSeats

- No individual seat numbers are tracked (simpler & scalable)

### 2️⃣ Strong data consistency is enforced

- Seat booking uses atomic MongoDB updates

- Prevents over-booking even under concurrent requests
```
availableSeats: { $gte: 1 }
$inc: { availableSeats: -1 }
```

### 3️⃣ Separation of state and history

- Event → current seat availability (mutable state)

- Booking → immutable booking records (audit trail)

### 4️⃣ Admin-only event creation

- Event creation route is protected by:

    - JWT authentication

    - Role-based authorization

- Frontend only consumes public APIs

### 5️⃣ Pagination at database level

- Events list uses skip + limit

- Avoids loading large datasets into memory

### ⚠️ Known Limitations
- No seat holding or timeout mechanism

- No payment gateway integration

- No booking cancellation / refund flow

- No real-time updates (WebSockets not used)

- No database transactions for multi-document rollback

- No rate limiting or advanced monitoring
    #### These were intentionally excluded to keep focus on core booking consistency.


## 🔧 What I Would Improve With More Time

### 1️⃣ Seat hold mechanism

- Temporarily reserve seats for a few minutes

- Auto-release if payment is not completed

### 2️⃣ Booking cancellation

- Allow users to cancel bookings

- Restore seats safely using atomic updates

### 3️⃣ Database transactions

- Use MongoDB sessions for full rollback safety

- Especially useful for payment-based flows

### 4️⃣ Real-time updates

- Use WebSockets or SSE

- Instantly update seat availability on all clients

### 5️⃣ Performance & scalability

- Redis caching for hot events

- Rate limiting for booking endpoints

- Background jobs for reconciliation

## ✅ Final Note

This project intentionally prioritizes correctness, data consistency, and clean backend design over feature count.
The architecture is easy to extend without breaking existing logic.

---

## 👤 Author Profile

- 💼 **LinkedIn:** [https://www.linkedin.com/in/harmandeep01/](https://www.linkedin.com/in/harmandeep01/)
- 🧑‍💻 **GitHub:** [https://github.com/Harmandeep01](https://www.linkedin.com/in/harmandeep01/)
- 📧 **Email:** sharmandeep954@gmail.com
> Backend-focused developer with strong interest in **data consistency, system design, and scalable APIs**.  
> This project reflects real-world backend decision-making rather than surface-level feature building.
