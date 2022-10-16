const { Router } = require('express');
const express =require ('express');
const router = express.Router();
const restaurant = require("../Controllers/restaurantController");
const location = require("../Controllers/LocationsController")
const meal_type = require('../Controllers/MealTypesController');
const meanu_items = require('../Controllers/MeanuitemsController');
const payment = require('../Controllers/PaymentController');


//restaurant
router.get('/api/',restaurant.home);
router.get("/api/get-restaurant-details" ,restaurant.getRestaurantList);
router.get('/api/get-restarant-by-location-id/:loc_id',restaurant.getRestaurantByLocId)
router.get('/api/get-restarant-details-by-id/:id',restaurant.getRestaurantDetailsByID)


//location
router.get('/api/get-location',location.getlocationlist);

//mealtype
router.get('/api/get-meal-types',meal_type.getMealTypeList);

//menuitems
router.get("/api/get-menu-item-list-by-restaurant-id/:res_id",meanu_items.getMeanuitemslistByRestID);


//Filter
router.post('/api/filter',restaurant.filterData);

//payments
router.post('/api/payment/gen-order' ,payment.getOrderID);
router.post("/api/payment/verify" ,payment.verifyPayment);




module.exports = router;