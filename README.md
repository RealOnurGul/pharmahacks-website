## [See website ↗](https://pharmahacks2020.web.app/)
<hr />


[See .doc version with images](https://docs.google.com/document/d/1D7iskBF3jSnnrxfg_tbjLkryyjigIUhcDJyC0s8Q-bg/edit?usp=sharing)

# Project overview

This is a summary of everything you need to know to  work with PharmaHacks. Our workflow, details of the projects, and guidelines on how to get started are all outlined in this document.



Sections -

**GitHub Organization**

Details on how the open-source workflow is set up for Pharmahacks

**Source Code**

Details on the specific repositories, getting set up, folder structure, guidelines on what you&#39;re expected to work with, pushing your code online, how things operate on a higher level, etc.

<hr />
<br/><br/><br/>

# GitHub Organization

A GitHub organization has been created with the name **PharmaHacks** ([https://github.com/PharmaHacks](https://github.com/PharmaHacks)), administered by the github account **StudentPharma** ([https://github.com/StudentPharma](https://github.com/StudentPharma)). All developers who will be working on PharmaHacks will be added to this organization to allow them to contribute code under their own github accounts, thereby giving them credit for the work they do.

The PharmaHacks github organization will contain all the source code for every website or app built for the PharmaHacks hackathon. Currently, a repository named &quot;[**official-website-2020**](https://github.com/PharmaHacks/official-website-2020)&quot; has been created inside the repository. This repo (repository) will have all the code for the official website for PharmaHacks 2020.
<br/>
# Source Code

Repository: [**official-website-2020**](https://github.com/PharmaHacks/official-website-2020)

This is a static website built with ReactJS.
<br/>
## Setting up the project in your own environment

**Prerequisites** : You must have NodeJs installed on your computer. [Download nodejs](https://nodejs.org/en/).

**Step 1:** clone the github repo and download the code to your computer

**Step 2:** open command prompt and change directory to the local project directory (the place where you just downloaded the repo).

**Step 3:** run  `npm install` in the command prompt.
<br/><br/>
## Running the website locally

Execute `yarn start` in the command prompt inside the project directory. This will launch the application on your local machine, which can be accessed through the browser at (by default) [http://localhost:3000](http://localhost:3000). As you make changes to your code and save, the changes will be immediately updated on the browser (you do not need to manually reload every time).
<br/><br/>
## Folder structure

The following outlines the current project directory structure.

Currently, developers should only be required to work with the contents of the these directories: **public, src**

The following folders are directories associated with ReactJS framework and additional project config. (i.e. developers working on this repo **do not** need to worry about them): .circleci, .firebase, build, node\_modules, .firebasesrc, .gitignore, firebase.json, LICENSE, package-lock.json, package.json, yarn.lock

The **/src** directory contains all the essential content for the website. It has been sub-divided into **components** and **containers**.

Components are meant to be, as the name suggests, small items on the webpage, eg. a button. Containers are meant to be larger sections of the page, eg. an entire title section. Ergo, a lot of components will be inside a container.

**Styles** directory contains all the .css files used in the project. **No inline styling must be used!** All styling on components/containers must be done in a .css file associated with that component/container. Eg. assuming we have a button component (button.jsx). We will create a button.css file inside styles and then do whatever styling necessary from there, and link the css file with the button.jsx file.

**App.js** can be considered as the entire website, containing all the containers. Meaning, App.js is the master container. Not much work should be done here, other than adding whatever routing necessary to direct to the containers.

**App.test.js** is used to create tests on the application, we will not focus much on testing currently. Similarly, we will not work on **index.js** , **serviceWorker.js** , and **setupTests.js** at the moment.

**/public** contains the index.html, logo and the favicon. Not much work is expected to be done here.

In conclusion, the majority of the work you do right now will be inside the **components** , **containers** and **styles** folder inside **/src.**

<br/><br/>
## Pushing your code to the github repo

**You should not directly commit to master**. Instead, you should create another branch, eg. dev, and then push code there. Here's the workflow we fill follow:

**Push to dev branch -> create pull request (PR) -> get PR approved -> merge PR with master**

**Note:** You can create your own branches if you want and push your code there, as long as you're not directly commiting to master.

To be able to merge your PR with master, your code currently needs to satisfy two criteria:

1) **Pass build tests**: When you create and push to a branch, your code will be automatically tested and checked for build errors. If the checks pass, you&#39;ll get an indication on the pull request. (green tick mark)<br/>
**Note:** Your code shouldn&#39;t fail any tests now, so passing this stage should be very easy.

2) **Get code approved by at least one other member**: The changes you made also needs to be looked over by another member to ensure the code you wrote is relevant and readable.



These may sound very restricting right now if you&#39;re not used to it, but it&#39;ll help us ship better and more maintainable code. Trust me!

Once you merge your code to **master** branch, the website is automatically compiled and deployed onto our hosting (ie. **it goes live!** - this can typically take about a minute).
