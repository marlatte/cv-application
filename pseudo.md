# CV Application Planning

## Description

An editable CV with buttons on the bottom of each section (mobile) or that appear on hover (desktop) to add more info. Clicking the Edit button in display mode switches it to edit mode, which has a Save button at the bottom.

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
   1. Form(s)
      1. Input(s)
      1. Edit/Save btn changes mode state
   1. Add Form btn

- App
  - Section: GenInfo
    - Form
      - FormItem
      - FormItem
      - FormItem
  - Section: Education
    - Form
      - FormItem
      - FormItem
      - FormItem
    - Add School btn
    - Form (optional)
      - FormItem
      - FormItem
      - FormItem
  - Section: Experience
    - Form
      - FormItem
      - FormItem
      - FormItem
      - FormItem
    - Add Job btn
    - Form (optional)
      - FormItem
      - FormItem
      - FormItem
      - FormItem
