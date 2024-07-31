# API_GATEWAY FOR FLIGHT PROJECT

### Table of Contents

1. <a href="#intro">Introduction</a>
2. <a href="#features">Features</a>
3. <a href="#tech">Technologies Used</a>
4. <a href="#install">Installation</a>
5. <a href="#usage">Usage</a>
6. <a href="#related">Related repositories</a>

### <span id="intro">Introduction</span>

Welcome to the documentation for the API Gateway of our Flight Management microservice ecosystem. This gateway serves as the central point of entry for all client requests and routing traffic to the appropriate microservices. By consolidating requests, managing authentication, and handling cross-cutting concerns like logging and rate limiting, the API Gateway ensures efficient communication between clients and diverse range of microservices. This documentation provides a comprehensive overview of the gateway's endpoints, configuration, and usage, aiming to streamline integration and enhance the overall performance of the flight management system.

### <span id="features">Features</span>

- User authentication and authorization
- Email based reminder service
- Flight booking service
- Flight search service
- API GATEWAY


### <span id="tech">Technologies Used</span>

- Programming Language: Javascript (Node.js)
- Database: MySQL
- ORM: Sequelize, Sequelize cli
- Authentication: JWT

### <span id="install">Installation</span>

1. Clone the repository and all other microservices mentioned in <a href="#related">Related repositories</a>.

``` 
git clone https://github.com/Gaurav-Wagh1/API_Gateway.git
```
2. Move to the project's root directory
```
cd bazar-platform
```
3. Install dependencies
```
npm install
```

4. Create a .env file in root directory and add your environment variables. Check .env.sample for assistance

### <span id="usage">Usage</span>
1. Start the server from root directory 
``` 
npm start
```

2. Access the API:
Open the API client (ex. Postman) to interact with the endpoints.


### <span id="related">Related repositories</span>

* [Auth service](https://github.com/Gaurav-Wagh1/Auth_Service.git)
* [Air ticket booking service](https://github.com/Gaurav-Wagh1/AirTicketBookingService.git)
* [Reminder service](https://github.com/Gaurav-Wagh1/ReminderService.git)
* [Flight and search service](https://github.com/Gaurav-Wagh1/FlightsAndSearchService.git)