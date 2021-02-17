const{Router} = require('express');
const router = Router();

router.get('/',(req,res)=>{

    res.redirect('/usedCars/usedCarCatalog');

})


module.exports = router;