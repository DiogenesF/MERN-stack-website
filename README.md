# MERN-stack-website

## A dynamic website built with React + Node.

Using redux for state management.

Using Multer for image uploading.

JWT authetication.

## To run the app:
It's necessary a default.json file inside the config folder containing the following:
```js
{
    "mongoURI": "",
    "jwtSecret": ""
}
```
A mongoDB Atables cluster will be needed so that you can get a token and use it in the mongoURI field.
A JWT secret is needed as well

After that, we can start the server by running:

### `npm run server` 

and in the client directory, start the app with:

###  `npm start`

Once that is done, it's necessary to register an user to be an admin. The backend has a route /admin/register which allows users to be registered as admin. This route is not accessible through the frontend (the infos are in the file in the path: /routes/admin/login.js)

## The login screen for the admin area:

<img src="./images_exp/login.jpeg" alt="Image Info" height="400"  />

## The admin area with CRUDs to insert infos to be shown in the homepage

<img src="./images_exp/admin.jpeg" alt="Image Info" height="400"  />

<img src="./images_exp/edit.jpeg" alt="Image Info" height="400"  />

