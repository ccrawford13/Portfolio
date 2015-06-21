---
layout: post
title: Blocitoff
thumbnail-path: "/img/done_homepage_thumb.png"
short-description: Self Destructing To-Do list Application

---

{:.center}
![]({{ site.baseurl }}/img/done_todo_items.png)

{:.center}
<a href="https://github.com/ccrawford13/get_it_done" target="_blank" class="button">View the Repository
  <i class="fa fa-fw fa-github"></i>
</a>

## Overview

"Done" was a rebuild of the second project "Blocitoff", which I created after completing the "Foundation Phase" of Bloc's "Rails Web Development Track". This is a self-destructing to-do list application. The purpose of creating a self-destructing to-do list is to add urgency to reinforce "Getting things Done". Users are able to create, edit, and destroy to-do lists, while also being able to create, edit, destroy and mark to-do items as complete.

## Personal Learning Objectives

The main purpose for rebuilding this application was to focus on Behavior Driven Development(BDD), utilizing RSpec, Capybara, and Factory Girl. BDD is a widely respected and utilized concept in the development world as it helps produce documentation and a more reliable codebase.

## User Stories

* As a User, I want to be able to sign up by providing user name, email, and password.
* As a User, I want to be able to sign in and out of Done.
* As a User, I want a profile page with all of my To-Do Lists.
* As a User, I want to Create, Read, Update, and Destroy to-do lists and items.
* As a Developer, I want to seed the development database with users, to-do lists, and items.
* As a User, I want to mark to-do items as completed.
* As a User, I want to see how many days remain before a to-do item is automatically deleted.
* As a User, my to-do items should be automatically deleted after seven days.

##### Extra Credit
* As a Developer, I want to rebuild Blocitoff using behavior-driven development.
* As a Developer, I want to generate views using HAML, instead of ERB.

## Tools

* <a href="https://github.com/rspec/rspec-rails" target="_blank">RSpec</a> - Testing Framework
* <a href="https://github.com/jnicklas/capybara" target="_blank">Capybara</a> - Simulating User Interactions with App
* <a href="https://github.com/thoughtbot/factory_girl_rails" target="_blank">Factory Girl</a> - Generates Test Factories(Users, Lists, Items, etc.)
* <a href="https://github.com/plataformatec/devise" target="_blank">Devise</a> - User Authentication
* <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> - Front-end Framework(HTML, CSS/Sass, Javascript)
* <a href="http://haml.info/" target="_blank">HAML</a> - HTML Abstraction Markup Language - Beautify HTML
* <a href="https://github.com/charliesome/better_errors" target="_blank">Better Errors & Binding of Caller</a> - Improved Rails Error Page

## Resources

* <a href="https://www.codeschool.com/courses/testing-with-rspec" target="_blank">Testing With RSpec</a> - Code School
* <a href="http://betterspecs.org/" target="_blank">Better Specs</a> - RSpec Guidlines with Ruby
* <a href="http://everydayrails.com/2012/03/12/testing-series-intro.html" target="_blank">How I Learned to Test My Rails Applications</a> - Everyday Rails


## Conclusion

Learning test-first development helped me to better understand every line of code in my application. Utilizing the "Red-Green-Refactor" process, helped me to reduce writing extra lines of code to solve a simple problem, and better yet, return to that code once passing to refactor further. I feel confident that my first journey into test-first development was a success, however, there is still plenty to learn going forward.

#### Next Steps
1. Improve Edge Case Testing
2. Build Custom RSpec Matchers
3. Utilize Cucumber to Provide Documentation & Specs

{:.center}
<a href="{{ site.baseurl }}/portfolio/blocmarks" class="button">
Explore Blocmarks
</a>
<a href="{{ site.baseurl }}/portfolio/blocipedia" class="button">
Explore Blocipedia
</a>
