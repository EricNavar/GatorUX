# Gator UX Website
- This is a static React web-app that will become Society of Software Developer's website in the future (Right now, this is the website: ufssd.org)
- This project will use Material-UI just to make pretty components quicker to build: https://material-ui.com/

# Contribution Guide
This is a guide for contributing to a GitHub repository. Follow these steps for contributing and you'll be good to go.

Downloading a Local Codebase
---
* Navigate to the repository on GitHub
* Click on the green button that says "Clone" and copy the HTTPS link
* Open terminal and navigate to the directory where you want your project to be located
* Run this command in terminal `git clone <the https link you just copied>`
* *That's it! Now you have a local copy of the code base*

Creating a Branch
---
* By default, you'll have the master branch. If you ever want to get the latest code, you can run the command `git pull origin master`

* To create your own branch, run this command `git checkout -b <branch name>`. The standard for naming your branch is *initials-shortIssueDescription*. You're now on the new branch.

* Now, all the changes you make will only be made to your specific branch. If you ever need to switch branches, you can always run `git checkout <branch name>`

* If you ever want to check what branch you're currently on, run `git branch`

Adding changes to your branch
---

* Once you have hit a good stopping point and want to add the changes to your branch, run this command `git add .`
* Then, to commit the changes to your branch, run `git commit -m "your message here"`. Try to make the commit message somewhat descriptive just in case you need to revert back to it.
* Once you think you're done, you can run `git push origin <your branch name>` to push your branch upstream so that GitHub can see it.
* Almost there! Now, all you need to do is make the merge request.

Creating a Merge Request
---
* Navigate to the 'Merge Requests' tab on the side bar on GitHub
* In the top right corner, select 'New Merge Request'
* Select your branch and the branch you want to merge into from the dropdowns displayed, so in our case, it will always be your branch for the source branch and master for the target branch
* Add a good title add a description for what you've changed
* Make sure to reference the number of the completed issue in the description
* Submit! :triumph:
* Navigate to the board where your issue lives
* Move your issue to the 'dev testing' list
* ***That's it!*** :confetti_ball:

After Creating a Merge Request
---
* to move back to the master branch, run the command `git checkout master`
* The master branch might have changed by the last time you created your branch. To get the new changes of the master branch, run the command `git pull origin master`
* Let a maintainer of the repository that you made a merge request
