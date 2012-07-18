#Vacation Time
An app where you choose where you want to go on vacation!

##Usage
Click on a country link. The info on the right will tell you how many times you hit a link vs. missed a link.

Links will be highlighted regardless if you actually click on a link. If you don't click on the link, the closest link relative to the click will be highlighted.

##F.A.Q.
Clicking in the sidebar on the right is not going to trigger the anchor tags, as the sidebar is designed as a visual aid and I didn't want to get all recursive..

##Project Tech Info.
If you want to be able to build the project or run tests, you'll need Node 0.8.1 or greater installed. Make sure to run

	npm install

to make sure you have the project's dependencies for building & tests.

##Running
If you have node

	npm install
	serve

Now the project is available at [http://localhost:3000](http://localhost:3000)

Otherwise, just run the index.html file

##Building
From the project's root run:

	./build

##Testing

##My thoughts on this project

###Assumptions
 - In this project, I assumed that the Javascript that analyzes the click is treated like a Javascript file that the end-user adds to their page for analysis, and therefore the highlight was performed via Javascript.

###Space is relative
Space is just like time - it is relative, and it is possible for two points in space to be the same distance from one another. That means while the original expectation is to get the nearest link, you might actually get two links that are the same distance - so you have to consider both.

###jQuery gets you started, but not quite there
You could be lazy and use multiple event handlers and accomplish the same goal, but if you optimize you can reduce the process down to a single click handler and analyze the node type that was clicked. Then you provide the necessary logic (if needed).

###Don't assume that documentation is 100% accurate/up to date
Pretty self explanatory