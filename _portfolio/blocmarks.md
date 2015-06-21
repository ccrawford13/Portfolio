---
layout: post
title: BlocMarks
thumbnail-path: "/img/blocmarks_topics_thumb.png"
short-description: Social Bookmarking Application
---

{:.center}
![]({{ site.baseurl }}/img/blocmarks_profile.png)

{:.center}
<a href="https://github.com/ccrawford13/blocmarks" target="_blank" class="button">View the Repository
  <i class="fa fa-fw fa-github"></i>
</a>

## Overview

"Blocmarks" was the third project I created after completing the "Foundation Phase" of Bloc's "Rails Web Development Track". This is a social bookmarking site that allows users to browse topics and bookmarks created by others. Users are also able to add bookmarks to topics they've created or add on to topics created by others. Users are also able to favorite bookmarks created by others and have them added to their profile.

## Personal Learning Objectives

The major learning objective for this app was to continue to build off of my introduction to test-first development in <a href="{{ site.baseurl }}/portfolio/blocipedia" target="_blank">Blocipedia</a>. I also wanted to focus more on Front-end development to create an improved user experience. To do this I challenged myself to implement a new Front-end framework, Zurb Foundation, and also utilize Sass(CSS pre-proccessor) for cleaner more modular stylesheets.

## User Stories

* As a User, I want to be able to sign up by providing user name, email, and password.
* As a User, I want to be able to sign in and out of Blocmarks.
* As a User, I want to email a URL to Blocmarks and have it stored to the database.
* As a User, I want to see an index of all topics and their bookmarks.
* As a User, I want to Create, Read, Update, and Destroy topics and bookmarks.
* As a User, I want to be the only one able to update or destroy the bookmarks or topics I created.
* As a User, I want to favorite bookmarks created by others.
* As a User, I want a profile page to display all topics and bookmarks I've created as well as those I've favorited.

##### Extra Credit
* As a User, I want to see URL previews for each bookmark.
* As a Developer, I want to generate views using HAML, instead of ERB.

## Tools

* <a href="https://github.com/rspec/rspec-rails" target="_blank">RSpec</a> - Testing Framework
* <a href="https://github.com/jnicklas/capybara" target="_blank">Capybara</a> - Simulating User Interactions with Application
* <a href="https://github.com/thoughtbot/factory_girl_rails" target="_blank">Factory Girl</a> - Generates Test Factories(Users, Topics, Bookmarks, etc.)
* <a href="https://github.com/plataformatec/devise" target="_blank">Devise</a> - User Authentication
* <a href="http://foundation.zurb.com/docs/" target="_blank">Zurb Foundation</a> - Front-end Framework(HTML, Sass, Javascript)
* <a href="https://github.com/indirect/haml-rails" target="_blank">Haml-Rails</a> - Enable Haml as Default Templating Engine
* <a href="http://embed.ly/" target="_blank">Embed.ly</a> - Clean Responsive Cards (URL Previews)
* <a href="https://github.com/drapergem/draper" target="_blank">Draper</a> - Decorators to Extract View Specific Logic Out of Model

## Resources

* <a href="https://www.codeschool.com/courses/assembling-sass" target="_blank">Assembling Sass</a> - Code School
* <a href="http://sass-lang.com/documentation/" target="_blank">Sass Documentation</a> - Go to for Syntax and Nesting Reference
* <a href="http://sudheerdev.github.io/Foundation5CheatSheet/" target="_blank">Foundation 5 Cheat Sheet</a> - Class & Variable Reference Sheet


## Conclusion

This application was a great experience as it challenged me to learn and utilize new technologies, such as Sass, the Embed.ly API, and a New Front-end Framework. Learning new technologies has it's challenges, but may be the thing I find most rewarding and exciting about the world of web-development. In web development, there is a never ending desire to improve our current tool-set, build things that make development faster and more enjoyable, and push the limits of what we think is possible.

{:.center}
<a href="{{ site.baseurl }}/portfolio/blocitoff" class="button">
Explore Blocitoff
</a>
<a href="{{ site.baseurl }}/portfolio/blocipedia" class="button">
Explore Blocipedia
</a>
