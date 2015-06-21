---
layout: post
title: Blocitoff
thumbnail-path: "/img/done_homepage_thumb.png"
short-description: Self Destructing To-Do list Application

---

{:.center}
![]({{ site.baseurl }}/img/done_todo_items.png)

## Overview

"Done" was a rebuild of the second project "Blocitoff", which I created after completing the "Foundation" phase of Bloc's "Rails Web Development Track". This is a self-destructing to-do list application. The purpose of creating a self-destructing to-do list is to add urgency to reinforce "Getting things Done". Users are able to create, edit, and destroy to-do lists, while also being able to create, edit, destroy and mark to-do items as complete.

## Personal Learning Objectives

The main purpose for rebuilding this application was that I wanted to focus on Behavior Driven Development(BDD), using RSpec, Capybara, and Factory Girl. BDD is a widely respected and utilized concept in the development world to help produce a more reliable code-base.

## User Stories

* As a User, I want to be able to sign up by providing user name, email, and password.
* As a User, I want to be able to sign in and out of Done.
* As a User, I want a profile page with all of my To-Do Lists.
* As a User, I want to create, edit, and destroy to-do lists and items.
* As a Developer, I want to seed the development database with users, to-do lists, and items.
* As a User, I want to mark to-do items as completed.
* As a User, I want to see how many days remain before a to-do item is automatically deleted.
* As a User, my to-do items shoudl be automatically deleted after seven days.

##### Extra Credit
* As a Developer, I want to rebuild Blocitoff using behavior-driven development.
* As a Developer, I want to generate views using HAML, instead of ERB.

## Conclusion

Learning test-first development helped me to better understand every line of code in my application. Utilizing "Red-Green-Refactor", helped me to reduce writing extra lines of code to solve a simple problem, and better yet, return to that code once passing to refactor further. I feel confident that my first journey into test-first development was a success, however, there is still plenty to learn in that regard.

#### Next Steps
1. Improve Edge Case Testing
2. Build Custom RSpec Matchers
3. Utilize Cucumber to Provide Documentation & Specs
