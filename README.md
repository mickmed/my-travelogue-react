# Project Overview


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  
You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the day

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Day 4| Pseudocode / actual code | Incomplete
|Day 5| Initial Clickable Model  | Incomplete
|Day 6| MVP | Incomplete
|Day 7| Present | Incomplete
---

## Project Description

App pins travelers destination on map. User can click on a pin and see photos they've uploaded to that destination.
---

## Wireframes
---

## Priority Matrix
---


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Init App/Database
- Render Map to page
- Generate Models and Controllers for Users, Locations, and Images
- Add Rails Dropzone Gem for adding Images
- Add Rails Exif Gem for extraction Lat and Long from metadata
- Extract Exif data from image and create pin on map
- Add Image to cloud server and URL to Image Table in DB
- Make Pin clickable to retrieve image URL and show image and image details
- Set up user login and auth
- Build Image Modal
- Set up Header (w/Navbar), and Footer
- Build Image Page that only shows Images with filters for date, location, etc...
- Style pages

#### PostMVP 

- Add User Favorites List
- Add User following other User feature
---

## Architectural Design
---

---

## ERD
http://res.cloudinary.com/dw5c4jnc3/image/upload/v1551225598/Screen_Shot_2019-02-26_at_6.40.32_PM.png
---

## UI Components

{2 Rails views, one for the Map Page (which includes the image modal), and one for the Images}
Map
Image Drop Zone
Image Modal
Image Display Page that shows images by filter, such as date, location, etc
---

Timebox Approximations

| Component | Priority | Estimated Time | Actual Time |
|---|---| ---|---|
| Initiate App and Database| 1 | 1 ||
| Render and size Map on page| 2 | 1 | 3 |
| Generate Models and Controllers for Users, Locations, and Images| 1 |||
| Add Rails Dropzone and Exif Gems | 4 | 1 ||
| Extract Exif data from image and create pin on map | 5 | 5 ||
| Add Image to cloud server and URL to Image Table in DB | 6 | 5 ||
| Make Pin clickable to retrieve image URL and show image and image details | 7 | 5 ||
| Set up user login and auth | 8 | 2 ||
| Set up Header (w/Navbar), and Footer | 9 | 3 ||
| Build Image Modal | 10 | 8 | |
| Build Image Page that only shows Images with filters for date, location, etc...| 11 | 8 ||
| Style pages| 12 | 8 | |
| Total | H | |  | 
---

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 
----
## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Ruby on Rails | Main application framework | 
| MapboxGL | Used to display pics on map | 

---
## Code Snippet

  
---


## Change Log
  

---




## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
