# Chuck Norris Joke App

## Create a Chuck Norris Joke Application

We as developers like Chuck Norris jokes. Therefor we created the following assignment to test your
Frontend skills/ knowledge.
Please create a git repo (can be local) before you start this assignment. When adding a commit please give
a proper description to explain your choices.
It only has to run in chrome (so you can use es6). Please don't use any boilerplates. You can/may use any
framework/lib you want.
When finished send a link or send your folder(zip with .git folder).


## Assignment

We want an Application where we can fetch 10 Random Chuck Norris jokes. These jokes can be fetched
from the following API http://api.icndb.com/jokes/random/10.
When these jokes are fetched via a button they need to be displayed in a list. In this list we can mark
certain jokes as favourite. The favourite jokes will appear in a favourites list with a max of 10 unique items.
There should be an option to remove jokes from the favourite list as well.
On refresh the favourites lists should be stored so next time when i visit the app my favourites should be
present.
We can also turn a timer on/off via a button (every 5 seconds). This will add one random joke to the
favourites list http://api.icndb.com/jokes/random/1 until the list has 10 items.


## TODO

- Setup ✅
- Fetch Jokes ✅
- Create Button to fetch jokes
- Add Jokes to favorites
- Favorites list with a max of 10 items/jokes
- Remove joke from favorite list
- On refresh the list of favorites need to be stored
- Create timer function which adds a joke to the favorite list every 5s