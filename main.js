/* Function declaration */

// Returns random number
const randomNumber = (max=12) => Math.floor( Math.random() * max );

// Returns a random creature
const randomCreature = () => {
  // Array with creatures
  const creatures = [ 'a small fairy','a crazy demon','a vampire clutch',
                      'a fat ghost','a stupid troll','a party of goblins',
                      'an angry dragon','a wild unicorn','a bunch of elfs',
                      'an uncontrolled werewolf','a hungry giant','a horde of dwarfs'];

  return creatures[randomNumber(creatures.length)];
}

// Returns a random kill action
const randomKillAction = () => {
  // Array with all the kill actions
  const actions = [ 'dramatically possesed','eaten alive','smashed',
                    'eternally hunted','swallowed in one piece','slowly drained',
                    'cut into pieces','furiously drowned','terribly murdered',
                    'sacrified alive','deprived of food and water','seriously burnt'];

  return actions[randomNumber(actions.length)];
}

// Returns a random place
const randomPlace = () => {
  // Array with places
  const places = ['a forest','a volcano','the middle of the sea',
                  'your house','the sabana','a cave',
                  'a park','a hunted house','a graveyard',
                  'a swimming pool','a abandoned building','a basement'];

  return places[randomNumber(places.length)];
}

// Returns a random time of event
const randomTimeEvent = () => {
  // Array with time events
  const time = ['in a couple of hours','next June','tonight',
              'soon enough','when you turn 100 years old','next winter',
              'in couple of weeks','when you least expect it','in 10 years from now',
              'in the next couple of months','in 5..','in any time soon'];

  return time[randomNumber(time.length)];
}

// Returns a random string from the specified group
const getRandom = data => {
  switch(data.toUpperCase()){
    case 'CREATURE': 
      return randomCreature();

    case 'KILL ACTION': 
      return  randomKillAction();

    case 'PLACE': 
      return randomPlace();

    case 'TIME EVENT': 
      return randomTimeEvent();

    default:
      return randomNumber();
  }
}

// Create random death message
const createDeathMessage = () => `You will be ${getRandom('kill action')} by ${getRandom('creature')}. 
But don't worry, as it will happen ${getRandom('time event')}.
Just be careful not getting anywhere near to ${getRandom('place')}.`;

console.log(createDeathMessage())