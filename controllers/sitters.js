const express = require('express')
const router = express.Router()
const Profile = require('../models/sitters.js')


const authRequired = (req, res, next) => {
    console.log(req.session.currentUser)
    if(req.session.currentUser) {
        next()
    } else {
        res.send('You must be logged in to do that!')
    }
}

router.get('/', (req, res) => {
    Profile.find({}, (err, foundProfiles) => {
        if (err) {
            console.log(err);
        }
        res.render('home.ejs', {
            profile: foundProfiles
        })
    })
})


router.get('/sitters', (req, res) => {
    Profile.find({}, (err, foundProfiles) => {
        if (err) {
            console.log(err);
        }
        res.render('index.ejs', {
            profile: foundProfiles
        })
    })
})

router.get('/sitters/aboutus', (req, res) => {
    res.render('about.ejs')
})

router.get('/sitters/contactus', (req, res) => {
    res.render('contact.ejs')
})

router.get('/sitters/contactus/done', (req, res) => {
    res.send('Your message has been submitted!')
})

router.get('/sitters/new', (req, res) => {
    res.render('new.ejs')
})


router.get('/sitters/seed', async (req, res) => {
    const newProfiles =
      [
        {
        image: url('../images/nanny-1.avif'),
        name: 'Jessica Bold',
        age: 24,
        location: 'Wallington, NJ',
        education: 'College degree',
        experience: 5,
        desiredSalary: 30,
        haveCar: true,
        aboutYourself: 'My child care experience expands across all age groups including special needs. I find such joy in being a positive mentor in a life of childs. My background caring for infants, toddlers, and youth started when I worked as a pre-school assistant in high school. I have 5 years experience with kids, I am a professional sitter.',
        phoneNumber: 2221235234,
        email: 'jessicabold@email.com'
    }, {
        image: 'https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=1060&t=st=1678418487~exp=1678419087~hmac=9a1a2a3718667b2fa98bc2690bb3e27e4f36b6362c3a0784412754a981cada33',
        name: 'Laura Sharp',
        age: 18,
        location: 'Manhattan, NYC',
        education: 'Student',
        experience: 1,
        desiredSalary: 15,
        haveCar: false,
        aboutYourself: 'I am young and energetic person and I am very good with kids. Looking for a weekend job to help my education.',
        phoneNumber: 5136226617,
        email: 'laurasharp@email.com'
    }, {
        image: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1060&t=st=1678418506~exp=1678419106~hmac=69060722e3de3b6a5b4a26008eda40f4ca385baf5076c240550ad502f1b489ac',
        name: 'Mary Clark',
        age: 20,
        location: 'Queens, NY',
        education: 'College Degree',
        experience: 2,
        desiredSalary: 20,
        haveCar: false,
        aboutYourself: 'Growing up, I had a very special relationship with my own babysitter who I looked up to. I try to carry her loving, thoughtful influence into my work as a nanny.',
        phoneNumber: 2154413238,
        email: 'maryclark@email.com'
    }, {
        image: 'https://img.freepik.com/free-photo/close-up-enthusiastic-brunette-girl-with-makeup-smiling-looking-happy-camera-posing-against-pink-background_1258-87102.jpg?w=1060&t=st=1678418388~exp=1678418988~hmac=97ac0be3b68c7a67e3963c192140818a7a7b39861484f18757ef85d983eaec2e',
        name: 'Jane Brown',
        age: 19,
        location: 'Princeton, NJ',
        education: 'College degree',
        experience: 3,
        desiredSalary: 18,
        haveCar: true,
        aboutYourself: 'I am a kind, compassionate, and caring person. As the oldest of my siblings, caregiving has always been a part of my day-to-day. So, naturally, I turned to childcare as a profession at the age of 16, and I have never looked back.',
        phoneNumber: 7975156465,
        email: 'janebrown@email.com'
        },
        {
        image: 'https://img.freepik.com/free-photo/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background_273609-32160.jpg?w=1060&t=st=1678418544~exp=1678419144~hmac=d9e09519a2d809041c472134fedf78f4104e9fa838feaf73b164f552af041ef5',
        name: 'Amy Heart',
        age: 21,
        location: 'Cresskill, NY',
        education: 'Student',
        experience: 1,
        desiredSalary: 17,
        haveCar: false,
        aboutYourself: 'I am a student and part-time daycare assistant. I love kids, hide and seek, board games, crafts and music are my favorite things. I looking for another part time job.',
        phoneNumber: 7985623124,
        email: 'amyheart@email.com'
        }
    ]
    try {
        const seedProfiles = await Profile.create(newProfiles)
        res.send(seedProfiles)
      } catch (err) {
        res.send(err.message)
      }
    })

router.post('/sitters', (req, res) => {
    const haveCar = req.body.haveCar === 'on';
    const profileData = {...req.body, haveCar};
    console.log(req.session)
    Profile.create(profileData, (err, createdProfile) => {
        if (err) {
            console.log(err);
            res.send(err);
        }
        console.log(createdProfile);
        res.redirect('/home/sitters/profile/' + createdProfile.id);
    });
});


router.get('/sitters/:id', (req, res) => {
    Profile.findById(req.params.id, (err, foundProfile)=>{
        res.render('show.ejs', {
            profile: foundProfile
        });
    });
})

router.get('/sitters/profile/:id', (req, res) => {
    console.log(req.params.id);
    Profile.findById(req.params.id, (err, foundProfile)=>{
        console.log(foundProfile)
        res.render('profile.ejs', {
            profile: foundProfile
        });
    });
})


router.delete('/sitters/:id', (req, res) => {
    Profile.findByIdAndDelete(req.params.id, (err, deletedProfile) => {
        if(err) {
            console.log(err)
            res.send(err)
        } else {
            console.log(deletedProfile)
            res.redirect('/home/sitters')
        }
    })
})

router.get('/sitters/:id/edit', (req, res)=>{
    Profile.findById(req.params.id, (err, foundProfile) => {
		if(err) {
			console.log(err)
			res.send(err)
		} else {
            res.render('edit.ejs', {
			profile: foundProfile
			})
		}
	})
})

router.put('/sitters/:id', (req, res) => {
    if(req.body.haveCar === 'on') {
        req.body.haveCar = true
    } else {
        req.body.haveCar = false
    }
	Profile.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err, updatedProfile) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else {
                console.log(updatedProfile)
                res.redirect('/home/sitters/profile/'+req.params.id)
            }
        }
    )
})

module.exports = router