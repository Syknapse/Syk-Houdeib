# Project Docs

## Rendering Elements

For components that are dynamically generated such as projects, nav buttons, and contact links the process is as follows:

+ Create the HTML component in `src/js/components`.
+ Export it as a function.
+ Create an array of the items in `src/data`.
+ Each item on the page corresponds to an object in this array.
+ Add the data needed to be shown for each individual item.
+ Now we have a component, and the array of items to be shown on the page, and the data each item needs to display. It's time to render it.
+ To render the items create a container in `index.html`.
+ Add a new section to `sections` in `script.js`. This requires:
  + The selector of the parent container.
  + The data array.
  + The component to display.
  + An optional name for clarity.
+ We then map over the array of sections and pass each section as the params for the `renderElements()` function.
+ This in turn maps over the data array and passes that to the indicated component.
+ We end up with an array of elements (with the commas removed via `join('')`) and we finally render that as the inner HTML of the parent container.
