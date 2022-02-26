/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/testing', async () => {
  return { test: 'Hello' }
})

//Release 0
// Route.post('/venues', 'VenuesController.create')
//Release 1
Route.post('/bookings', 'BookingsController.create')

//Tugas 15
//Release 0
// Route.get('/venues', 'VenuesController.index')
// Route.post('/venues', 'VenuesController.store')
// Route.get('/venues/:id', 'VenuesController.show')
// Route.put('/venues/:id', 'VenuesController.update')
// Route.delete('/venues/:id', 'VenuesController.delete')

Route.resource('venues', 'VenuesController')
Route.resource('venues.fields', 'FieldsController')
