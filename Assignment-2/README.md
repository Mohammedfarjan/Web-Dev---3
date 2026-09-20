# Student Management REST API

A simple RESTful API built with **Node.js** and **Express.js** to manage student records using in-memory Array/JSON data (no database, no Mongoose).

## Project Structure
```
student-management-api/
├── app.js
├── package.json
├── routes/
│   └── studentRoutes.js
├── middleware/
│   └── logger.js
└── data/
    └── students.js
```

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Start the server:
   ```
   npm start
   ```
3. Server runs at: `http://localhost:3000`

## API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|---------------------------|
| GET    | /students        | Get all students          |
| GET    | /students/:id    | Get a single student      |
| POST   | /students        | Create a new student      |
| PUT    | /students/:id    | Update an existing student|
| DELETE | /students/:id    | Delete a student          |

## Sample Request Bodies (POST / PUT)

```json
{
  "name": "Sneha",
  "course": "BSc"
}
```

## Status Codes Used

- `200` – Success
- `201` – Created
- `400` – Bad Request (missing/invalid fields)
- `404` – Not Found (student/route doesn't exist)
- `500` – Internal Server Error

## Testing with Postman

1. Open Postman and create a new collection called "Student Management API".
2. Add requests for each endpoint above, pointing to `http://localhost:3000/students`.
3. For POST and PUT, go to **Body → raw → JSON** and enter a sample body like the one above.
4. Check the terminal — the custom logger middleware will print the method, URL, and timestamp for every request.

## Notes

- Data is stored **in-memory only** (in `data/students.js`) — it resets every time the server restarts.
- No database or ORM (MongoDB/Mongoose) is used, per assignment restrictions.
