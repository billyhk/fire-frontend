# f i r e

## Front-End Readme

## Project Description

This app offers users the ability to explore information on various popular cannabis strains.

## Wireframes

**Home Page**  
![Home Page](/public/front-end-images/home-page-wireframe-png.png)  
**Information Page**  
![Information Page](/public/front-end-images/show-page-wireframe-png.png)
**Form Page**
![Form Page](/public/front-end-images/form-page-wireframe-png.png)

## User Stories

_**MVP User Stories**_ 
-_As a user, I want to read about different strains of cannabis._ 
-_As a user, I want to add, edit, and delete strain data._  
-_As a user, I want to views strains of a particular category (i.e. indica/sativa/hybrid)._

_**Post MVP Stretch Goals**_ 
-_As a user, I want to save certain strains as favorites._ 
-_As a user, I want to search for strains by name or other properties._  
-_As a user, I want to sign up and create a personal account._

## Sample of Data from Back-End

```json
{
"_id": "5ec5041b45f19100047b3684",
"title": "Hall of Fame",
"name": "Amnesia Haze",
"genetics": "Sativa dominant (70%)",
"plantCategory": "Sativa",
"popular": true,
"parents": "Jamaican, Afghani, Laos, Hawaiian",
"thcContent": "22 - 24%",
"cbdContent": "Low",
"smellAndFlavor": "Sweet, Pepper, Citrus, Spicy, Earthy",
"effect": "Uplifting, Euphoric, Cerebral, Strong, Energetic",
"info": "Amnesia Haze has a classic, long, maturing psychotropic sativa lineage tamed with a dash of dense mountain indica. Two land-races and a hybrid have been expertly combined to produce a THC powerhouse that has an effect that even the most experienced cannabis aficionados will find undeniable and insistent. Amnesia Haze has dense flower clusters that are hard to the touch when cured lovingly. So well-crystallised are the firm nuggets, that they seem to have been lightly glazed with some kind of exotic cardamom and lime, marjoram and mandarin flavoured toffee that sparkles and refracts the light. The overdrive trichome production makes Amnesia Haze prized for hashes and other extractions. Warmed and twenty tonne pressed, the clear honey-coloured 22% THC resin waterfalls are a sticky sight to behold and an incomparable aromatic revelation.",
},
```

## Component Hierarchy

![Component Hierarchy](/public/front-end-images/component-tree-png.png)

## Front-End Objectives and Technologies Used

 -_Data from deployed Mongo database is rendered onto multiple pages via React.js and React-Router._
 -_Interaction with back-end functionality to Create, Read, Update, and Destroy (CRUD) via React components._
