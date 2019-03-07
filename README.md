# Project Overview


## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  
You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the day

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Functional Components | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| Pseudocode | Complete
|Day 5| Initial Clickable Model  | Complete
|Day 6| MVP | Complete
|Day 7| Present | Complete

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

### The initial MVP was rewritten to cater to Node/Express backend
- Init App/Database
- Render Map to page
- Set up Database with Sequelize
- Build routes in Sequelize
- Build form that includes react-dropzone 
- Test data and image upload to tables
- Build forms and implement full crud
- Place Marker on Map (on click) and retrieve geoloction
- Set up Header (w/Navbar)
- Style all components


#### PostMVP 

- Add User Favorites List
- Add User Login
- Change color of persistant pin
- Create user diary
- Create lines between pins to show distance and route


---

## Architectural Design

---

---

## ERD
http://res.cloudinary.com/dw5c4jnc3/image/upload/v1551225598/Screen_Shot_2019-02-26_at_6.40.32_PM.png

---

## UI Components

- App 
- Home
- Map
- Location List
- Modals - Add Location (includes Dropzone), Show Location Photos (w/ Carousel), Update Location


---

Timebox Approximations

This approach was abandoned on day 4 due to hassles with passing images to Rails DB. 
Methods attempted were 
    1) using Active Storage with Google cloud server gem
    2) using Carrierwave gem
    3) storing image files as base64 string
    4) storing image files as url

    The following are some of the research links used on this attempt:

    https://medium.com/@ebenwoodward/linking-a-react-app-to-rails-active-storage-d414afa4bc7f
    https://github.com/rails/rails/issues/32208
    https://stackoverflow.com/questions/49890851/rails-5-2-rest-api-active-storage-react-add-attachment-url-to-controller-r
    https://arpitonline.com/2018/06/13/using-activestorage-with-dropzone-in-a-react-app/
    https://evilmartians.com/chronicles/rails-5-2-active-storage-and-beyond
    https://www.endpoint.com/blog/2018/03/12/rails-active-storage
    https://www.reddit.com/r/rails/comments/9ax6kx/is_there_a_dropzonejs_or_similar_active_storage/
    https://api.rubyonrails.org/files/activestorage/README_md.html
    https://www.pluralsight.com/guides/handling-file-upload-using-ruby-on-rails-5-api
    http://jameshuynh.com/rails/react/upload/2017/09/17/how-to-upload-files-using-react-and-rails-like-a-boss/
    https://medium.com/@bruno_boehm/reactjs-ruby-on-rails-api-heroku-app-2645c93f0814

    amongst many many others




| Component | Priority | Estimated Time | Actual Time |
|---|---| ---|---|
| Initiate App and Database| 1 | 1 ||
| Render and size Map on page| 2 | 1 | 3 |
| Generate Models and Controllers for Users, Locations, and Images| 3 | 2 | 24 |
| Add Rails Dropzone and Exif Gems | 4 | 1 ||
| Extract Exif data from image and create pin on map | 5 | 5 ||
| Add Image to cloud server and URL to Image Table in DB | 6 | 5 ||
| Make Pin clickable to retrieve image URL and show image and image details | 7 | 5 ||
| Set up user login and auth | 8 | 2 ||
| Set up Header (w/Navbar), and Footer | 9 | 3 ||
| Build Image Modal | 10 | 8 | |
| Build Image Page that only shows Images with filters for date, location, etc...| 11 | 8 ||
| Style and add UI features, animations, carousel, etc | 12 | 16 | |
| Total |  | 57 |  | 

*Step 3 is where a lot of time was lost attempting to use images with Rails at which point the above process was abaonden.

## Updated to suit Node/Express backend
| Component | Priority | Estimated Time | Actual Time |
|---|---| ---|---|
| Create react app | 1 | .5 | .5 |
| Install react dependencies | 2 | 1 | 1 |
| Set up Express/Sequelize backend w/ routes | 3 | 3 | 4 |  
| Test get data | 4 | .5 | .5 |
| Render and size Map on page | 5 | 1 | 2 |
| Build form for upload with dropzone | 6 | 1 |  5 |
| Make Pin clickable to retrieve image URL and show image and image details | 7 | 3 | 2 |
| Set up Header (w/Navbar) | 8 | 2 | 1 |
| Build Show Modal | 9 | 2 | 4 |
| Build Add Location Modal | 10 | 2 | 4 | 
| Build Update Modal (incomplete) | 11 | 3 | 3 |
| Style and add UI features, animations, carousel, etc | 12 | 16 | 12 |j
| Add Corousel to Show Modal | 13 | 3 | 9 |
| Total | All | 38 |  48 | 
---




## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Ruby on Rails | Main application framework | --- abandoned
| Sequelize| WSGI | 
| React | Javascript Frontend
| Express | WSGI
| MapboxGL | Used to display pics on map | 
| React-Dropzone | Used to upload images |


---
## Code Snippet
```
 //component mounts before props from modal are passed, so this is needed to set state for controlled form
  componentDidUpdate(prevProps){
      prevProps !== this.props &&  
      this.setState({
        city: this.props.location && this.props.location.city,
        country: this.props.location && this.props.location.country,
        summary: this.props.location && this.props.location.summary
    })
  }
```
---


## Change Log
  The entire Rails backend was abondened in the middle of day 5 due to hassles with uploading images into the table. Due to time restrictions the decision was made to build an express back end and make up for as much lost time as possible.

---




## Issues and Resolutions
    Attempted to deploy the rails backend on Heroku early in development in order to secure deployment for future git pushes. Unfortunately this proved frustration, cumbersome, and time consuming. Firstly, Heroku rejected the Ruby Version. After installing rvm (which was also a somewhat complicated issue), the Ruby version was switched to 2.6.0, which requested that bundler must be version 2.0. After switching to 2.0, the same error occured on the Heroku server. The bundler was updated on Heroku but to no avail. Several other gems had to be addressed, and after many many hours and countless google and stack overflow searches, Ruby was downgraded to 2.5.0 and the deployment was successful. Unfortuntely, the Rails backend was abandoned and swapped out for Node/Express for reasons mentioned above. 


