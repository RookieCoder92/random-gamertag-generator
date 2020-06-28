// Declare Arrays
const funnyAdj = ['floppy', 'soggy', 'horny', 'spikey', 'dangerous', 'terrified',
'intoxicated', 'emotional', 'triggered', 'squishy', 'jazzy', 'tiny', 'intelligent',
'smelly', 'hypocritical', 'sweaty', 'godlike', 'decapitated', 'overweight', 'crazy',
'lazy', 'emo', 'drowsy', 'sneaky', 'paraplegic', 'silly', 'sadistic', 'domesicated',
'medicated', 'cocky', 'impressive', 'disrespectful', 'bearded', 'violent', 'slimy', 
'naked', 'sticky', 'fluffy', 'filthy', 'dirty', 'impulsive', 'friksy', 'greedy',
'abusive', 'idiotic', 'hateful', 'insecure', 'slippery', 'vengeful', 'sinister', 
'cowardly', 'alcoholic', 'offensive', 'aggressive', 'agitated', 'anxious', 'creepy',
'deceptive', 'itchy', 'stoned', 'frothy', 'sexy', 'wobbly', 'elegant', 'hysterical',
 'erotic', 'unloved', 'diabetic', 'dyslexic', 'wiggly', 'jiggly', 'tricky', 'theChosen'];

const funnyNouns = ['Hippo', 'Gorilla', 'Flamingo', 'Wombat', 'Turtle', 'Ninja',
'Samurai', 'Sandwich', 'Teaspoon', 'Lady', 'Alcoholic', 'Junkie', 'Pervert', 'Trainwreck',
'Wizard', 'Cheeseburger', 'Vegetable', 'Scooterkid', 'Communist', 'Fascist', 'Eskimo',
'Dragon', 'Jellybean', 'Dad', 'Mother', 'CheeseCake', 'Blueberry', 'Policeman', 'Warlord',
'Girlfriend', 'Testicle', 'Grandad', 'Grandma', 'Dinosaur', 'Alien', 'Dwarf',
'Midget', 'Albanian', 'Russian', 'Chihuahua', 'Doohickey', 'Camel', 
'Goblin', 'Doodle', 'Frizbee', 'Donkey', 'Gypsy', 'Criminal', 'Druggo', 'Potato',
'Sausage', 'Meatball', 'Thief', 'Failure', 'Mistake', 'Nightmare', 'Noodle', 'Doctor',
'Emperor', 'SquadLeader', 'MobBoss', 'HappyMeal'];

const seriousAdj = ['dark', 'wise', 'black', 'silent', 'stealthy', 'sneaky', 'vengeful',
'dangerous', 'mysterious', 'fatal', 'posessed', 'TheChosen'];

const seriousNouns = ['Templar', 'Ghost', 'Samurai', 'Wizard', 'Abyss', 'Demon', 'Ork',
'Goblin', 'Warrior', 'Soldier', 'Tombstone'];

// Declare clickables
const button = document.querySelector('#button');
const selector = document.querySelector('#select-box');

// Declare display paragraph
const display = document.querySelector('#gamertag');

// Event listener
button.addEventListener('click', function() {
    if (selector.value === 'funny') {
        renderFunny();
    } else {
        renderSerious();
    }
});