## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.


## Index Page
Photo by <a href="https://unsplash.com/@nikolasnoonan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nikolas Noonan</a> on <a href="https://unsplash.com/s/photos/disaster?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

## Results Index: 
https://en.wikipedia.org/wiki/List_of_natural_disasters_in_the_United_States

## Prep List: 
https://www.electricgeneratorsdirect.com/stories/6-How-to-Safely-Stockpile-Emergency-Gasoline.html
https://www.cdc.gov/aging/pdf/disaster_planning_tips.pdf
https://www.ready.gov/financial-preparedness
https://www.ready.gov/sites/default/files/2020-03/ready_emergency-financial-first-aid-toolkit.pdf
https://www.cdc.gov/aging/pdf/disaster_planning_tips.pdf

*Preppy Page Plan*
-------HTML-------
- two progress bars at top (fixed to page)
- button to move to results page / a tag
- h1 essential title
- forEach? place to render each essential item (grid 5x4 or table?)
- h1 suggested title
- place to render each suggested item

-------JS-------
- Chart.js create two progress bars: essential and suggested
- add completed: false property to each item
- render each essential item
- render each suggested
    - checking if need === true before rendering

- make each rendered item clickable
    - completed: true on click
    - toggleable? stretch goal
