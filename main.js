/* Create object with the random data*/
const randomData = {
  creatures: ['a small fairy','a crazy demon','a vampire clutch',
              'a fat ghost','a stupid troll','a party of goblins',
              'an angry dragon','a wild unicorn','a bunch of elfs',
              'an uncontrolled werewolf','a hungry giant','a horde of dwarfs'],

  'kill actions': [ 'dramatically possesed','eaten alive','smashed',
                    'eternally hunted','swallowed in one piece','slowly drained',
                    'cut into pieces','furiously drowned','terribly murdered',
                    'sacrified alive','deprived of food and water','seriously burnt'],

  places: [ 'a forest','a volcano','the middle of the sea',
            'your house','the sabana','a cave',
            'a park','a hunted house','a graveyard',
            'a swimming pool','an abandoned building','a basement'],

  'time events': [ 'in a couple of hours','next June','tonight',
                  'soon enough','when you turn 100 years old','next winter',
                  'in couple of weeks','when you least expect it','in 10 years from now',
                  'in the next couple of months','in 5..','in any time soon'],

}

/* Function declaration */

// Returns random number
const randomNumber = (max=12) => Math.floor( Math.random() * max );

// Returns a random string from the specified group
const getRandom = group => {
  group = group.toLowerCase();
  const data = randomData[group];
  const num = randomNumber(data.length)

  return data[num];
}

// Create random death message
const createDeathMessage = () => `You will be ${getRandom('kill actions')} by ${getRandom('creatures')}. 
But don't worry, as it will happen ${getRandom('time events')}.
Just be careful not getting anywhere near to ${getRandom('places')}.`;

console.log(createDeathMessage())