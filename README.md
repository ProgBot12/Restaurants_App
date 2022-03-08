# Restaurants_App

RESTFUL Api backend

Instructions:

Clone the repository to your local machine, and open with VS Code.
Once opened, in the command line run `npm start`

Open Postman and run the following commands to test the API:

1. To get all the restaurants in the MongoDB, run: GET -- http://localhost:5000/restaurants
2. To get a specific restaurant with a specific id, run: GET -- http://localhost:5000/restaurants/get/(restaurant id goes here)
3. To get a specific number of restaurants, run: GET -- http://localhost:5000/restaurants/(number of restaurants)
4. To add a new restaurant, run: POST -- http://localhost:5000/restaurants/add (with the new data included in the body in the JSON format)
5. To update a restaurant, run: PATCH -- http://localhost:5000/restaurants/update/(restaurant id goes here) (make sure to only include the fields you want to update)
6. To delete a restaurant, run DELETE -- http://localhost:5000/restaurant/delete/(restaurant id goes here)
