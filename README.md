## Tic-tac-toe

## Project Overview

This project is a simple example tech test.  The purpose of this test is to practise the skills required to successfully pass a tech test (including but not limited to - Using TDD, good documentation, handling data and writing clear code).  The challenge for this test is to write a simple 'Tic-Tac-Toe' program with the following requirements:

- There are two players in the game (X and O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken


## Design Approach

## Tech Stack

- Production code: As I want to build a dynamic web application I will attempt to use javascript and node.js for the front and backend respectively.
- Testing: I will test with a combination of rspec and zombie.js for unit and feature test.

## Potential Design Challenges:

I will attempt to represent the tic-tac-toe table with a single array containing default values. I'll then update the array and calculate outcomes based on the current string values of each indexed item.

## TO DO's


## User Stories

```
As a player
So I know it's my go
I want to be told it's my move

As a player
So I can play my move
I want to update a empty square with my symbol ('x' / 'o')

As a player
So I know I've won the game
I want to be told I have won

As a player
So I can play another game
I want the option to reset the game

```
