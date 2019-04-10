# FriendFinder

## Purpose

The purpose of the application is to match users who surveyed similar answers and match them together. Users can access it (here.)[https://friend-finder-toth.herokuapp.com/]

## Improvements

I attempted to use handlebars on this assignment to make it easier on displaying the users' information more easily and for practice.  Looking at it now, it would have been much easier to simply go with a modal as the example application did.  Styling also could have been a lot better and needs work.

## Errors

I am currently getting the error:
    TypeError: Cannot read property 'name' of undefined
whenever the Best Friend is matched (any valid /friends/:id) is hit. Currently all the information is still displaying correctly and console logging 'name' is giving the expected value (not undefined).