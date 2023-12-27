# CV Application Planning

## Description

An editable CV with buttons on the bottom of each section (mobile) or that appear on hover (desktop) to add more info. Clicking on the info in display mode switches it to edit mode, which has a save btn at the bottom. Opening edit mode on any form should require all other forms to be closed, preventing any accidental loss of data. At the bottom of the page will be a "Download" button that scrapes all the data from the DOM and offers it as a to print, meaning the app will require consistent use of element classes and `querySelectorAll()`. 2 ways of doing this include printing the whole page and hiding certain things using CSS `@media print`, OR implementing some variation on this:

```
function printDiv(divName) {
        var printContents = document.getElementById(divName).innerHTML;
        w=window.open();
        w.document.write(printContents);
        w.print();
        w.close();
    }
```

## Requirements

- Each section needs an edit/save button
- On save, rerender the section in display mode
- Sections:
  - General information
    - Name, email, phone number.
  - Educational experience
    - School name, title of degree, grad date
    - Add school feature?
  - Practical experience
    - For each job
      - Company, position, responsibilities, dates
    - Add job feature

## Components

1. Section
   1. Form(s) - edit or display modes as state
      1. Input(s) - edit or display mode as props, content state saved internally
      1. Edit/Save btn changes mode state
   1. Add Form btn
