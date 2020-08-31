# Simple Chat

https://github.com/cjulian/simple-chat.git

A react based front-end for a bare-bones chat application.  Built
on Next.js.

## Instructions
>Instructions on how to run the codebase so we can check it out ourselves
>
Requires node v10 or greater.

1. `git clone https://github.com/cjulian/simple-chat.git`
2. `npm install`
3. `npm run build`
4. `npm start`
5. open http://localhost:3000

## Selected Features 
>Few notes on which features were selected and why?
>
For my assignment I attempted to implement the following 3 features:
>1. As a User of the web-app, I can see a list of all the channels
>2. As a User of the web-app, I can join a channel and see the history of it
>3. As a User of the web-app, I can send messages to a channel after I have joined
it
>
I chose these features because together they describe a reasonable MVP for a 
chat application.  

## Next Steps
>Possible next steps if had more time.
>
If I had more time I would likely continue with the following:
- finish Chat (root) component tests
- subscribe to history updates
- error handling for API calls
- timestamps for history items
- scroll to bottom for new messages
- loading indicators
- reference users by ID in history items
- mobile friendly layout
- explore React Testing Library
- cross-browser testing

## Assumptions
> What assumptions were made?
>
Here are some of the assumptions I made while working on this assignment:
- user is on a modern browser
- user is not on mobile
- user's message are always labeled "You"
- nobody else is named "You"
