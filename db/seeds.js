const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')



mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true }, (err, db) => {
  if (err) return console.log(err)
  db.dropDatabase()
    .then(() => {
      return Event.create([
        {
          eventType: 'game',
          eventName: 'Bridge Night',
          date: new Date('07/04/2019'),
          location: 'Camberwell',
          description: '',
          schedule: '',
          startTime: 1900,
          endTime: 2200,
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: 'snacks will be provided',
          provided: '',
          whatToBring: 'your wits! (and maybe a bottle of something)',
          maxSize: 4,
          minSize: 4,
          idealGroupSize: 4,
          anythingElse: '',
          image: '',
          tags: ['cards', 'strategy game'],
          skillLevel: 'intermediate'
        },

        {
          eventType: 'picnic',
          name: 'non-alcoholic picnic',
          date: new Date('07/10/2019'),
          fixed: false,
          location: 'Peckham Rye',
          description: 'Just a nice (sober!) afternoon (hopefully!) sitting in the sun.',
          schedule: '',
          startTime: 1100,
          endTime: 1700,
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: 'Everyone bring something deliecious to nibble on (homemade or shop bought both fine)',
          provided: '',
          whatToBring: 'suncream, sun hat, maybe a book to read? Anything you\'d want at a picnic',
          maxSize: 6,
          minSize: 2,
          idealGroupSize: 4,
          anythingElse: '',
          image: '',
          tags: ['sober', 'non-alcoholic', 'day time', 'park'],
          skillLevel: ''
        },

        {
          eventType: 'Drinks',
          name: 'After Work Drink and Chat',
          date: new Date('07/28/2019'),
          fixed: true,
          location: 'The City',
          description: 'Please come have a drink and a chat with me, I\'d appreciate the opportunity to have a good moan and I can offer a listening ear too',
          schedule: '',
          startTime: 1800,
          endTime: 0,
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: 'I imagine bar snacks like nuts and such will be available',
          provided: '',
          whatToBring: '',
          maxSize: 6,
          minSize: 2,
          idealGroupSize: 4,
          anythingElse: '',
          image: '',
          tags: ['sober', 'non-alcoholic', 'day time', 'park'],
          skillLevel: ''
        },

        {
          eventType: 'Yoga',
          name: 'Morning Yoga Session',
          date: new Date('07/17/2019'),
          fixed: true ,
          location: 'Brixton',
          description: 'Relaxed pre-work yoga session in my local park',
          schedule: '',
          startTime: 545,
          endTime: 730,
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: 'Soothing music and some loose instructions',
          whatToBring: 'Yoga Mat',
          maxSize: 6,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['yoga', 'mindfulness', 'buddhism', 'mental health', 'health', 'fitness'],
          skillLevel: ''
        },

        {
          eventType: 'Tea and Cake',
          name: 'An informal afternoon tea at my lovely home',
          date: new Date('07/12/2019'),
          fixed: false ,
          location: 'Poplar',
          description: 'I love baking and always want a chance to feed people cake!',
          schedule: '',
          startTime: 1600,
          endTime: 1900,
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: 'Tea and cake (and maybe some little sandwiches) will all be provided',
          provided: '',
          whatToBring: '',
          maxSize: 6,
          minSize: 2,
          idealGroupSize: 4,
          anythingElse: 'Only women please!',
          image: '',
          tags: ['chitchat', 'girls-only', 'cake', 'baking'],
          skillLevel: ''
        },

        {
          eventType: 'Shopping',
          name: 'Vintage Clothes Shopping- Brick Lane',
          date: new Date('08/01/2019'),
          fixed: true ,
          location: 'Brick Lane',
          description: 'Need some company for a bit of fun vintage shopping, desperately need a very ridiculous new outfit to wear to a super hipster party I\'m going to and don\'t want to shop alone',
          schedule: '',
          startTime: 1445,
          endTime: 1830,
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: 'Money and a critical eye!',
          maxSize: 3,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: 'I have slightly out there taste in clothes, you have been warned!',
          image: '',
          tags: ['fashion', 'vinatge', 'hipster', 'day time', 'shopping'],
          skillLevel: ''
        },
        {
          eventType: 'Language Exchange',
          name: 'My French for Your English',
          date: new Date('08/01/2019'),
          fixed: true ,
          location: 'Dulwich',
          description: 'Frenchy looking for a funny but serious conversation with interesting English person. It is perfect if you want to learn French too',
          schedule: '',
          startTime: 1800,
          endTime: 2100,
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: 'Money for coffee or beer or wine',
          maxSize: '',
          minSize: '',
          idealGroupSize: 2,
          anythingElse: 'My level is intermediate but yours doesn\'t matter',
          image: '',
          tags: ['languages', 'French'],
          skillLevel: ''
        },
        {
          eventType: 'Breakfast',
          name: 'Greasy Fry-Up in my Local Caff',
          date: new Date('08/02/2019'),
          fixed: false ,
          location: 'Tower Hamlets',
          description: 'I hate eating breakfast alone but this place is the best and I can\'t get enough of their full English, join me for brekky and have your mind blown. Best sausage in London',
          schedule: '',
          startTime: '1100',
          endTime: '1230',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 'Roughly a tenner',
          catered: '',
          provided: '',
          whatToBring: 'Money and an appetite!',
          maxSize: 5,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: 'NO VEGANS OR VEGGOS!!!',
          image: '',
          tags: ['breakfast', 'meat', 'food', 'morning', 'eggs'],
          skillLevel: 'PROFESSIONAL EATER LEVEL (joking!)'
        },
        {
          eventType: 'Film',
          name: 'Screening of Brief Encounter',
          date: new Date('08/05/2019'),
          fixed: true ,
          location: 'Shoreditch',
          description: 'This is one of my very favourite films but I hate going to the cinema alone. It\'s such a lovely and romantic bit of cinema, please don\'t let the fact that is old put you off even if that\'t not normally your thing.',
          schedule: '',
          startTime: '1900',
          endTime: '2200',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 8.50,
          catered: '',
          provided: '',
          whatToBring: 'Money (extra for snacks if wanted!)',
          maxSize: 5,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['cinema', 'film', 'hollywood'],
          skillLevel: ''
        },

        {
          eventType: 'Dog Walking',
          name: '(Long) Sunday Afternoon Dog Walk',
          date: new Date('08/09/2019'),
          fixed: true ,
          location: 'Richmond',
          description: 'Join me and my beautiful Chow Chow Lola for a long dong walk in Richmond park, I love a good deep chat about anything or everything (or nothing much!) and I\'m an excellent listener. Lola is very social too but does have a bit of a problem with excitable/jumpy small dogs.',
          schedule: '',
          startTime: '1200',
          endTime: '1500',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: 'The usual dog walking things! Maybe some money for a drink in a dog friendly pub after if you\re up for it',
          maxSize: 5,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['dogs', 'walking', 'talking', 'listening'],
          skillLevel: ''
        },
        {
          eventType: 'Ping-Pong',
          name: 'Very serious Ping-Pong Tournament',
          date: new Date('08/09/2019'),
          fixed: true ,
          location: 'Kilburn',
          description: 'This tournament will not be the faint harded! I take my ping pong (aka table tennis, aka WHIFF WHAFF) exceedingly seriously so please don\'t bother RSVP-ing if you don\'t even know the TTA\'s official rules or don\'t own your own bat!!!!!',
          schedule: '',
          startTime: '1600',
          endTime: '2200',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 2.50,
          catered: '',
          provided: '',
          whatToBring: 'Money to pay the venue for table rental plus bat and whatever else you need (you can buy drinks there)',
          maxSize: 8,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['ping-pong', 'sport', 'game', 'ball-game', 'activity', 'competition', 'tournament'],
          skillLevel: 'Advanced!'
        },
        {
          eventType: 'Ping-Pong',
          name: 'Very serious Ping-Pong Tournament',
          date: new Date('08/13/2019'),
          fixed: true ,
          location: 'Kilburn',
          description: 'This tournament will not be the faint harded! I take my ping pong (aka table tennis, aka WHIFF WHAFF) exceedingly seriously so please don\'t bother RSVP-ing if you don\'t even know the TTA\'s official rules or don\'t own your own bat!!!!!',
          schedule: '',
          startTime: '1600',
          endTime: '2200',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 2.50,
          catered: '',
          provided: '',
          whatToBring: 'Money to pay the venue for table rental plus bat and whatever else you need (you can buy drinks there)',
          maxSize: 8,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['ping-pong', 'sport', 'game', 'ball-game', 'activity', 'competition', 'tournament'],
          skillLevel: 'Advanced!'
        },
        {
          eventType: 'Jam Session',
          name: 'Casual (indie rock) Jam Session',
          date: new Date('08/15/2019'),
          fixed: true ,
          location: 'Dalston',
          description: 'I play guitar and I\'ve got a big garage and a drum kit, would love to spend an afternoon jamming (and maybe drinking beer!) with a few fellow music lovers and your instruments',
          schedule: '',
          startTime: '1600',
          endTime: '2100',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: 'Your instrument (if not drums)',
          maxSize: 8,
          minSize: 2,
          idealGroupSize: 5,
          anythingElse: '',
          image: '',
          tags: ['music', 'rock', 'guitar', 'band', 'live-music', 'jamming'],
          skillLevel: 'intermediate'
        },
        {
          eventType: 'Game',
          name: 'Dungeons and Dragons',
          date: new Date('08/17/2019'),
          fixed: false ,
          location: 'Islington',
          description: 'Would love to form a new group and get back into this, I\'m an experienced DM (dungeon master) but I welcome all levels and I\'m very willing to teach!',
          schedule: '',
          startTime: '1600',
          endTime: '2100',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: 'If you are a beginner please have a read online, there is quite a lot to learn so the more you know in advance the better!',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: 'Snacks and drinks maybe?',
          maxSize: 6,
          minSize: 2,
          idealGroupSize: 5,
          anythingElse: '',
          image: '',
          tags: ['game', 'strategy', 'nerdy', 'fantasy', 'story-telling', 'role-play'],
          skillLevel: 'any'
        },
        {
          eventType: 'Make-over',
          name: 'Make-up session with Prosecco and Cheese',
          date: new Date('08/12/2019'),
          fixed: false ,
          location: 'Camden Town',
          description: 'Hi :), I\'ve just completed a course in doing full face make-up and I would love a chance to practice my skills! I will give you a whole new dramatic look and feed you prosecco too!!!!!!! Men and women both welcome, you just must be happy to have lots of stuff put on your face.',
          schedule: '',
          startTime: '1900',
          endTime: '2000',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: 'There will be a big cheeseboard full of cheese and plentiful bubbles! Let me know if you are plant based and I will source some plant based cheese.',
          provided: '',
          whatToBring: 'Just your face!',
          maxSize: 4,
          minSize: 2,
          idealGroupSize: 3,
          anythingElse: '',
          image: '',
          tags: ['make-up', 'make-over', 'sparkles', 'LGBTQ', 'drag', 'dress-up'],
          skillLevel: ''
        },
        {
          eventType: 'Watching Sport',
          name: 'Liverpool V. Bangor',
          date: new Date('08/19/2019'),
          fixed: false ,
          location: 'Holborm',
          description: 'Come round my gaff and watch the footie, I\'m a Bangor man (come on you Bangers!) but all allegances welcome. It\'ll be well macho (lads, lads, lads) but birds welcome so long as you\'ve got banter',
          schedule: '',
          startTime: '1900',
          endTime: '2200',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: 'I will get in some beers and snacks, I like olives a lot.',
          provided: '',
          whatToBring: 'more beer can never hurt',
          maxSize: 10,
          minSize: 3,
          idealGroupSize: 7,
          anythingElse: '',
          image: '',
          tags: ['footie', 'lads', 'sport', 'watching', 'beer', 'banter'],
          skillLevel: ''
        },
        {
          eventType: 'Running',
          name: 'Morning Thames Run',
          date: new Date('08/28/2019'),
          fixed: false ,
          location: 'Tower Bridge',
          description: 'Join me for a Thames loop going from Tower Bridge to Westminster, I\'m not a fast runner and would prefer it if you\'d keep pace with me as that is the whole point of having company!',
          schedule: '',
          startTime: '0600',
          endTime: '0800',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: 'Normal running gear...',
          maxSize: 4,
          minSize: 2,
          idealGroupSize: 3,
          anythingElse: '',
          image: '',
          tags: ['running', 'fitness', 'morning', 'exercise'],
          skillLevel: ''
        },
        {
          eventType: 'Game',
          name: 'Chess Game',
          date: new Date('08/11/2019'),
          fixed: false ,
          location: 'Clerkenwell',
          description: 'I have not played in quite some time but would love to get back into the game, I used to be a very serious player but am undoubtedly somewhat oxidised (rusty).',
          schedule: '',
          startTime: '1200',
          endTime: '1500',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: 'I have a board',
          whatToBring: '',
          maxSize: 2,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['chess', 'strategy', 'intellectual chat'],
          skillLevel: ''
        },
        {
          eventType: 'Meal',
          name: 'Dinner at Moro',
          date: new Date('08/10/2019'),
          fixed: false ,
          location: 'Faringdon',
          description: 'I have been wanting to dine at Moro for quite some time but haven\'t mustered the courage to go alone. The food is said to be muy delicioso.',
          schedule: '',
          startTime: '1900',
          endTime: '2200',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 'We will pay for what we each eat/drink just to keep things as simple as possible',
          catered: 'WELL YES',
          provided: 'good conversation!',
          whatToBring: '',
          maxSize: 3,
          minSize: 3,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['food', 'fine-dining', 'spanish', 'restaurant'],
          skillLevel: ''
        },
        {
          eventType: 'Coffee',
          name: 'Casual cup of coffee and a bit of a chat',
          date: new Date('08/13/2019'),
          fixed: false ,
          location: 'Greenwich',
          description: 'I am disabled and don\'t get out much, I\'ll happily buy you a coffee and a slice of cake if you fancy sitting with me for a few hours and just having a good natter',
          schedule: '',
          startTime: '1100',
          endTime: '1500',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: '',
          maxSize: 2,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['coffee', 'cake', 'chat', 'company', 'friendship', 'listening'],
          skillLevel: ''
        },
        {
          eventType: 'Political Canvassing',
          name: 'Door knocking for the Greens',
          date: new Date('09/16/2019'),
          fixed: false ,
          location: 'Chelsea',
          description: 'I am a Green party member but you don\'t need to be offically signed up, if you agree with our values and want to keep me company while we do a bit of campaigning then I\'d very much appreciate it',
          schedule: '',
          startTime: '1200',
          endTime: '1600',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: 'comfortable shoes (we\'ll be walking a fair distance)',
          maxSize: 3,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['politics', 'green', 'environmental', 'activism', 'door-knocking'],
          skillLevel: ''
        },
        {
          eventType: 'Meal',
          name: 'Mexican Night!',
          date: new Date('09/18/2019'),
          fixed: false ,
          location: 'Hackney',
          description: 'I love to cook and have a serious craving for burittos but no-one to cook for, there will be plenty of food and even more plenty of MARGARITA!',
          schedule: '',
          startTime: '1900',
          endTime: '1500',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: 'Your party head',
          maxSize: 5,
          minSize: 3,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['mexican', 'food', 'cocktails', 'drink', 'friendship', 'fun', 'party'],
          skillLevel: ''
        },
        {
          eventType: 'Conversation',
          name: 'A nice chat',
          date: new Date('09/01/2019'),
          fixed: false ,
          location: 'Haringey',
          description: 'I am 84 years old and house bound, I have all of my basic needs met but do miss having somebody to talk to. I have lived a full life and have a few good stories to tell. I also like to think that I have learned a thing or two and give sensible advice if you would like to ask me for my thoughts on anything that is troubling you.',
          schedule: '',
          startTime: '1600',
          endTime: '1800',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: 'I always have an excellent and varied selection of biscuits available',
          provided: '',
          whatToBring: '',
          maxSize: 2,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['tea', 'biscuits', 'coffee', 'cake', 'chat', 'company', 'friendship', 'listening'],
          skillLevel: ''
        },
        {
          eventType: 'Charity',
          name: 'Help the Homeless',
          date: new Date('07/02/2019'),
          fixed: false ,
          location: 'The City',
          description: 'I work for a small charity that aims to help those sleeping rough in London. A big part of this work is just getting out there and talking to folk. We need to understand what happened to these people and what they need if we want to solve this problem. If you fancy helping out and joining me on a night out and about that\'d be great.',
          schedule: '',
          startTime: '2200',
          endTime: '0200',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: '',
          maxSize: 3,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['charity', 'homelessnes', 'community', 'helping'],
          skillLevel: ''
        },
        {
          eventType: 'Charity',
          name: 'Help the Homeless',
          date: new Date('07/10/2019'),
          fixed: false ,
          location: 'The City',
          description: 'I work for a small charity that aims to help those sleeping rough in London. A big part of this work is just getting out there and talking to folk. We need to understand what happened to these people and what they need if we want to solve this problem. If you fancy helping out and joining me on a night out and about that\'d be great.',
          schedule: '',
          startTime: '2200',
          endTime: '0200',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: '',
          maxSize: 3,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['charity', 'homelessnes', 'community', 'helping'],
          skillLevel: ''
        },
        {
          eventType: 'Play Date',
          name: 'Park Trip with Small People',
          date: new Date('07/11/2019'),
          fixed: false ,
          location: 'Southwark Park',
          description: 'I\'m a stay at home Dad and have a bit of problem when it comes to doing things with the little ones in the day as I have no SAHP friends! It\'d be great to have a bit of company. My small people are 3, 2 and 5 months (I KNOW!).',
          schedule: '',
          startTime: '1100',
          endTime: '0200',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: 'I tend to have many snacks about my person, mostly Ella\'s Kitchen though!',
          provided: '',
          whatToBring: 'Normal park things (and children!). Well behaved dogs are more than welcome!',
          maxSize: 6,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['kids', 'chat', 'friendship', 'park', 'play', 'parenting'],
          skillLevel: ''
        },
        {
          eventType: 'Gardening',
          name: 'Gardening in the Community Gardens',
          date: new Date('07/02/2019'),
          fixed: false ,
          location: 'Hackney',
          description: 'Our lovely little local garden is looking a bit overgrown, join me with your clippers and let\'s get pruning! I am more than happy give guidance and advice to anyone inexperienced at caring for plants and stuff.',
          schedule: '',
          startTime: '1000',
          endTime: '1200',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: 'If you are very lucky I may have a courgette or two for you to take home!',
          whatToBring: 'I have quite a good gardening tool kit but feel free to bring your own extra bits and gloves obviously!',
          maxSize: 7,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['community', 'gardening', 'helping'],
          skillLevel: 'beginner garneners more than welcome!'
        },
        {
          eventType: 'Meal',
          name: 'Family Friendly BBQ',
          date: new Date('07/13/2019'),
          fixed: false ,
          location: 'Hyde Park',
          description: 'We are planning a family day out in the park with lots of drinks, nibbles, fun, games and a BBQ! We are a very social fun loving familyand we are keen to make local friends as we are brand new to the area.',
          schedule: '',
          startTime: '1400',
          endTime: '1900',
          tickets: '',
          ticketLink: '',
          eventLink: '',
          preparation: '',
          cost: 0,
          catered: '',
          provided: '',
          whatToBring: 'Bring whatever you fancy, we will have plenty to share but when it comes to picnic/bbqs MORE IS MORE. Bats, balls and all that jazz also encouraged (a warning though- we can get quite competative!)',
          maxSize: 12,
          minSize: '',
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['family', 'picnic', 'park', 'community', 'fun', 'games'],
          skillLevel: ''
        },
        {
          eventType: 'Art Gallery',
          name: 'Natalia Goncharova Exhibtion',
          date: new Date('07/03/2019'),
          fixed: false ,
          location: 'Tate Modern',
          description: 'Would love some company for this. She is absolutely one of my favourite ever artists and if you don\'t know her work or a lot about her please check the link and if you are interested I will be so happy to share my knowledge with you (she was my dissertation topic)',
          schedule: '',
          startTime: '1400',
          endTime: '1600',
          tickets: '',
          ticketLink: '',
          eventLink: 'https://www.tate.org.uk/whats-on/tate-modern/exhibition/natalia-goncharova',
          preparation: '',
          cost: 16,
          catered: '',
          provided: '',
          whatToBring: 'A willingness to learn',
          maxSize: 4,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['art', 'modern art', 'learning', 'painting'],
          skillLevel: ''
        },
        {
          eventType: 'Art Gallery',
          name: 'Natalia Goncharova Exhibtion',
          date: new Date('07/05/2019'),
          fixed: false ,
          location: 'Tate Modern',
          description: 'Would love some company for this. She is absolutely one of my favourite ever artists and if you don\'t know her work or a lot about her please check the link and if you are interested I will be so happy to share my knowledge with you (she was my dissertation topic)',
          schedule: '',
          startTime: '1400',
          endTime: '1600',
          tickets: '',
          ticketLink: '',
          eventLink: 'https://www.tate.org.uk/whats-on/tate-modern/exhibition/natalia-goncharova',
          preparation: '',
          cost: 16,
          catered: '',
          provided: '',
          whatToBring: 'A willingness to learn',
          maxSize: 4,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['art', 'modern art', 'learning', 'painting'],
          skillLevel: ''
        },
        {
          eventType: 'British Museum Visit',
          name: 'Day at the British Museum',
          date: new Date('07/23/2019'),
          fixed: false ,
          location: 'Bloomsbury',
          description: 'Somehow I\'ve never visited and it seems so very silly that I have not, I would like some company as I always find it more fun to look at stuff when I can talk about the stuff I am looking at (without looking unhinged)',
          schedule: '',
          startTime: '1300',
          endTime: '1700',
          tickets: '',
          ticketLink: '',
          eventLink: 'https://www.britishmuseum.org/',
          preparation: '',
          cost: 0,
          catered: 'I imagine we will pause for a snackeral at some point',
          provided: '',
          whatToBring: 'Some money though the museum is free as Britain is great!',
          maxSize: 4,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['history', 'eduction', 'museum', 'learning' ],
          skillLevel: ''
        },
        {
          eventType: 'British Museum Visit',
          name: 'Day at the British Museum',
          date: new Date('07/12/2019'),
          fixed: false ,
          location: 'Bloomsbury',
          description: 'Somehow I\'ve never visited and it seems so very silly that I have not, I would like some company as I always find it more fun to look at stuff when I can talk about the stuff I am looking at (without looking unhinged)',
          schedule: '',
          startTime: '1300',
          endTime: '1700',
          tickets: '',
          ticketLink: '',
          eventLink: 'https://www.britishmuseum.org/',
          preparation: '',
          cost: 0,
          catered: 'I imagine we will pause for a snackeral at some point',
          provided: '',
          whatToBring: 'Some money though the museum is free as Britain is great!',
          maxSize: 4,
          minSize: 2,
          idealGroupSize: '',
          anythingElse: '',
          image: '',
          tags: ['history', 'eduction', 'museum', 'learning' ],
          skillLevel: ''
        }
      ])
    })
    .then(() => console.log('tracks galore!'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())

})
