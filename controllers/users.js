const express = require('express')
const bcrypt = require('bcrypt')

const router = express.Router()

const User = require('../models/users')
const Profile = require('../models/sitters.js')

router.get('/register', (req, res) => {
	res.render('users/register.ejs')
})

router.post('/register', (req, res) => {
	const salt = bcrypt.genSaltSync(10)
	req.body.password = bcrypt.hashSync(req.body.password, salt)
    User.findOne({username: req.body.username}, (err, userExists) => {
        if (userExists) {
            res.send('This email is already registered')
        } else {
            User.create(req.body, (err, createdUser) => {
                console.log(createdUser)
                req.session.currentUser = createdUser
                res.redirect('/home/sitters/new')
            })
        }
    })
})


router.get('/signin', (req, res) => {
    res.render('users/signin.ejs')
})


router.post('/signin', (req, res) => {
	User.findOne({username: req.body.username}, (err, foundUser) => {
		if(foundUser) {
			const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
			if(validLogin) {
				req.session.currentUser = foundUser
                res.redirect('/home/sitters/')
			} else {
				res.send('Invalid username or password')
			}
		} else {
			res.send('Invalid username or password')
		}
	})
})


router.get('/signout', (req, res) => {
	req.session.destroy()
	res.redirect('/home')
})

router.post('/signout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/users/signin');
      }
    });
  });
  

module.exports = router
