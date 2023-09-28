# Wordle Analog
A simple clone of the popular browser-based word game  
By [Max McBride](https://github.com/maxnmcbride/), [Leah Cardoz](https://github.com/lcardoz/), & [Martin Souza](https://github.com/souzamartin/)

## About
Wordle Analog fetches a random word from the external [Random Word API](https://random-word-api.herokuapp.com/home), which the user must try to guess. When the user submits a guess, each letter of that guess is rendered in the topmost empty row, and color coded as follows:  

• **Grey** means the target word doesn't include that letter of the guess  
• **Gold** means the target word includes that letter of the guess, but in a different position  
• **Green** means the target word includes that letter of the guess at that position  

If the user guesses the word correctly in the allotted number of attempts (represented by the rows on screen), they win!

The user can reset the game at any time by clicking the reset button at the bottom of the page.

If you want to play around with the app and quickly test its functionality, we've left in a ```console.log``` to print the current target word in the browser console.

## Technologies
Wordle Analog is a single-page application built in React using Vite. It incorporates Redux for app-wide state management.

## Known Issues
Currently the color-coding behavior of the letter boxes only reflects whether each letter is present in the target word, but not how many instances of that letter the word contains. For example, if the target word is _TESTY_, and the user guesses _EERIE_, all three instances of the letter E will be highlighted. We intend to improve this behavior in a future update.