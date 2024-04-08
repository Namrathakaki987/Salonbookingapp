# Salonbookingapp

Salon booking application using Node.js. The backend consists of RESTful APIs to manage salon booking functionalities

Step1: Download "salonappbackend"
       Download the backend project repository "salonappbackend" from GitHub.

Step2: Open the folder in VScode
      Navigate to the downloaded folder and open it in Visual Studio Code (VSCode) or any preferred code editor.

Step3: Open a new terminal window in VSCode and navigate to the "api" repository within the project folder.
       command: cd api
       
Step4: Install node modules
      command: npm init -y
      
Step5: Set environment variables
       MONGO=<your-mongodb-uri>
       JWT=<your-jwt-secret>

Step6: Run application
      command: "npm start"

Step7: Open Postman and start testing the API endpoints for user authentication and salon booking functionalities.
       User authentication:
        POST /api/auth/register: Register a new user
        POST /api/auth/login: Login with username and password to obtain JWT token
       Salon Booking APIs:
        POST /api/availability: Set availability for booking
        GET /api/available-slots/:date: Retrieve available booking slots for a given date
        POST /api/bookings: Schedule a booking
        GET /api/bookings: Retrieve all booked slots
        Make sure to replace :date in the endpoint /api/available-slots/:date with the desired date in the format YYYY-MM-DD
       

