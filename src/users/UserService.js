(function(){
  'use strict';

  angular.module('users')
    .service('userService', ['$q', UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q){
    var users = [
      {
	firstName: 'Amar',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-1',
	content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
	firstName: 'Akbar',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-2',
	content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
	firstName: 'Anthony',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-4',
	content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
	firstName: 'Anna',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-3',
	content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
      },
      {
	firstName: 'Amit',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-5',
	content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
      },
      {
	firstName: 'Anil',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-6',
	content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
      },
      {
	firstName: 'Anjani',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-3',
	content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
	firstName: 'Ambalika',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-3',
	content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
	firstName: 'Alok',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-4',
	content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      },
      {
	firstName: 'Akshra',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-3',
	content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
	firstName: 'Aacharya',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-2',
	content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
      },
      {
	firstName: 'Allo Arjun',
	lastName: 'pwe',
	email: 'pwe.p@pppp.qqq',
	telephone: '022-0225-5588',
	alternateContact : '9978582825',
	address1: 'sdkds sd sds ',
	address2: 'dsf sdf dsfd dsf',
	city: 'abc',
	state: 'stv',
	zipCode: '659874',
	relation: 'Friend',
	avatar: 'svg-4',
	content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
      }
    ];

    // Promise-based API
    return {
      loadAllUsers : function() {
	// Simulate async nature of real remote calls
	console.log(users);
	return $q.when(users);
      }
    };
  }

})();
