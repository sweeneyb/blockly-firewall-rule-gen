# Custom Blocks in Blockly to create firewall rules

Opening firewall rules is not something I do everyday.  The rule structure tends to be really specific to the type of firewall in use, which means I learn the syntax once every year or two.  It takes me a couple of days to get the concepts and how they map to syntax (different network segments have different rules about what you can do, and what's valid in that context).  My colleagues go through this too.  

This repo is a short weekend test to see if I could codify a set of rules into a less-code system.  While the types are made up, I hope this serves as an example of how one might use something like Blockly to make a tool that a) implicitly documents the allowed rules and b) generates the code for the user (possibly to be modified later). 

## Current state
1. You can have multiple rules.  Each will be independent
1. Either an "application" or a "hostname" can be added to the "firewall rule".  This is a primitive type system. Things will render differently based on that.
1. I understand a bit more about custom blocks.  This was the main hurdle.
1. Renders js and the output.  This is building a sort of visual DSL where the output is the js console capture.

![Alt text](screen.png?raw=true "Title")

## Future enhancements

1. Rules can take a source into account.  They should also narrow what a rule allows access to.
1. Integrate acorn to parse/run the javascript to render the firewall rule lines out (which is redundant to the point above, but I'm learning)
1. Change connector shapes to make things more intuitive



# Built with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
