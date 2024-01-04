const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("User List")
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})


router
    .route("/:id")

    .get((req, res) => {
        console.log(req.params);
    res.send(`GET user ${req.params.id}`)
    })
    
    .put((req, res) => {
        res.send(`UPDATE user ${req.params.id}`)
    })
    
    .delete((req, res) => {
        res.send(`DELETE user ${req.params.id}`)
    })

// router.get('/:id', (req, res) => {
//     res.send(`GET user ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`UPDATE user ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`DELETE user ${req.params.id}`)
// })

// Dynamic routes go last

module.exports = router;