/* Functions declaration */

// Returns random number
const randomNumber = (max=12) => Math.floor( Math.random * max );

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
const randomCreature = () => {
  // Array with all the kill actions
  const actions = [ 'dramatically possesed','eaten alive','smashed',
                    'eternally hunted','swallowed in one piece','slowly drained',
                    'cut into pieces','furiously drowned','terribly murdered',
                    'sacrified alive','deprived of food and water','seriously burnt'];

  return actions[randomNumber(actions.length)];
}

// Returns a random place
const randomCreature = () => {
  // Array with places
  const places = ['in a forest','in a volcano','in the middle of the sea',
                  'in your house','in the sabana','in a cave',
                  'in the moon','in a hunted hose','in a graveyard',
                  'underground','in hell','in a basement'];

  return places[randomNumber(places.length)];
}

// Returns a random time of event
const randomCreature = () => {
  // Array with time events
  const time = ['in a couple of hours','next June','tonight',
              'soon enough','when you turn 100 years old','next winter',
              'in couple of weeks','when you least expect it','in 10 years from now',
              'in the next couple of months','in 5...','not in any time soon'];

  return time[randomNumber(time.length)];
}