let express = require('express');
let router = express.Router();
let axios = require('axios');

router.get('/:state/:city/:price', (req, res) => {
  axios({
    method: 'get',
    url: `https://api.yelp.com/v3/businesses/search?location=${req.params.state}${req.params.city}&price=${req.params.price}`,
    headers: {
      'Authorization': 'Bearer fmjCqOtqbpcI1rrFbw9L8yE95mlF4LFx7avDbJqn5UsebMfR9hF62KpEuQIPTLCeiRazEWfE-xDsTbIVrGfpcQlr2e7PgQhFilFUzRjR4uohsoqsV6TspX3r97LkXHYx',
      'Content-Type': 'application/json'
    }
  }).then(response => res.send(response.data)).catch(error => console.log(error))
});


module.exports = router;