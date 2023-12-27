# CV Application Planning

## Description

An editable CV with buttons on the bottom of each section (mobile) or that appear on hover (desktop) to add more info. Clicking the Edit button in display mode switches it to edit mode, which has a Save button at the bottom. Opening edit mode on any form should require all other forms to be closed, preventing any accidental loss of data. There will also be a preview section below (mobile) or to the right (desktop) that scrapes the relevant data from the DOM and builds a paper-looking CV, meaning the app will require consistent use of element classes and `querySelectorAll()`. That preview can then be printed via a button at the bottom of the screen that initiates this:

```
function printCV() {
  w=window.open();
  w.document.body.appendChild(<Preview />);
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
- Preview
- Print button

## Components

1. Section
   1. Form(s) - edit or display modes as state
      1. Input(s) - edit or display mode as props, content state saved internally
      1. Edit/Save btn changes mode state
   1. Add Form btn
1. Preview - scrapes contents and builds a printable CV
1. PrintBtn
