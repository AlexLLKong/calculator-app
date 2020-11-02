# Calculator App

This project is a simple calculator for now. More functions will be added. `create-react-app` was used to initialize this project.

## Current Host

Using Netlify here:

https://romantic-goldstine-10533b.netlify.app

## Technologies

-   React.js - 17.0.1
-   Mathjs - 7.5.1 - https://mathjs.org/index.html

## Install

To install:

In your development directory or wherever:

`git clone https://github.com/AlexLLKong/calculator-app.git`

`cd calculator-app`

`npm install`

To start:

`npm start`

## Planned Features

-   Customizable layout
-   Unit Conversions

## Adding buttons to the calculator

More of a note to self but anyways:

1.  If we need rules to guard against user input mistakes then:

    -   Add an Event Handler to EventHandlers.js that facilitates the rules we need
    -   eg. We don't want the user to be able to do something like 8.88.8 so HandleDecimalClick is a thing

2.  The component we should use most of the time is SinglePurposeButton.js
