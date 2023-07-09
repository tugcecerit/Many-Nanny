# Many Nanny

## Project Choice
Nanny App (MANY NANNY)

https://manynanny.herokuapp.com/home

## Project Description
Include: Sometimes it is very difficult to find a perfect nanny for the loved ones. This app will help to match a nanny and a family that is looking for a care.

## General App Idea/Purpose:
It will have submitted nanny profiles so families can see the name, age, experience, location, desired salary etc. and reach them out.
This app will be created by using Node.js, Mongoose, Express, EJS, at least one model with all 7 RESTful routes and full CRUD.

Models including field names and their datatypes:

Controllers: profiles.js - users.js (stretch goal)

Models: profile.js
Schema:

const profileSchema = new mongoose.Schema({
  image: {type: String, required: true},
  name: {type: String, required: true},
  age: {type: Number, required: true},
  location: {type: String, required: true},
  education: {type: String, required: true},
  experience: {type: Number, required: true},
  desiredSalary: {type: Number, required: true},
  haveCar: type: Boolean
  aboutYourself: type: String,
  phoneNumber: {type: Number, required: true, unique: true},
  email: {type: String, required: true, lowercase: true, unique: true},
})

Public: css/style.css

Views: index.ejs, show.ejs, new,ejs, edit.ejs - users/register.ejs, signin.ejs (stretch goal)

- INDEX: Homepage (display all of a given resources in the main page)
- NEW: Create your profile page (display a form that allows you to create a new resource)
- CREATE: Make a new resource from scratch
- SHOW: Nanny profiles page (display resource)
- EDIT: Allows the user to update the resource
- UPDATE: Update the resource
- DELETE: Get rid of the resource

![mvc](https://user-images.githubusercontent.com/119981069/225994296-842b95d2-57ea-49e1-ab39-3d60b5cf689b.png)

A list of routes (e.g. POST /pins/ allows users to post a picture of a pin)

- GET/home - Take the user to the home page
- GET/home/sitters - Take the user to the profiles page
- GET/home/login - Take the user to sign up or login (stretch goal)
- GET/home/sitters/new - Display a form to create a new profile
- POST/home/sitters - Create a new profile
- GET/home/sitters/:id - Display a single profile
- GET/home/sitters/:id/edit - Display a form to edit a profile
- PUT/home/sitters/:id - Update a profile
- DELETE/home/sitters/:id - Delete the profile

## Wireframes
Wireframes with basic page layouts

<img width="700" alt="wireframe1" src="https://user-images.githubusercontent.com/119981069/225994355-26e920f2-0121-4c04-96c4-c8be7aea92f9.png">
<img width="700" alt="wireframe2" src="https://user-images.githubusercontent.com/119981069/225994368-f5a3dab8-6ca0-4eb5-ada0-0b1f99733a64.png">
<img width="700" alt="wireframe3" src="https://user-images.githubusercontent.com/119981069/225994386-744c246d-da1d-428e-8db3-eb891c3a2f34.png">
<img width="700" alt="wireframe4" src="https://user-images.githubusercontent.com/119981069/225994409-189abddd-2ef2-4cf6-a54a-92f20b84c2e1.png">

## User Stories
User stories detailing app functionality

- As a user, if I am a nanny, I would like to create my profile to show my potential family.
- As a user, if I am a nanny, I would like to share my contact info, so family can reach me out.
- As a user, if I am a family, I would like to see the nanny profiles which have photo, age, location, desired salary, experience, whether has her own car or not etc. to decide.
- As a user, if I am a family, I would like to see nanny's contact info to reach out.

## MVP Goals
- Completing my project by using Node.js, Mongoose, Express, EJS, at least one model with all 7 RESTful routes and full CRUD.
- Having a home page with two buttons, one for the nanny to create a profile, one for the family to see all nanny profiles.
- In create a new profile page, having a form which has many lines therefore nanny can enter her info to create a profile.
- Having an edit a tag or button to update info and having a delete button to remove.
- Having a nav bar which has a logo and home button. (Sign up/Login will be added according to stretch goals)
