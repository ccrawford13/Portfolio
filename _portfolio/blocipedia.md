---
layout: post
title: Blocipedia
thumbnail-path: "/img/blocipedia_new_thumb.png"
short-description: Wiki Collaboration Application

---

{:.center}
![]({{ collections.permalink }}/img/blocipedia_profile.png)

{:.center}
<a href="https://github.com/ccrawford13/blocipedia" target="_blank" class="button">View the Repository
  <i class="fa fa-fw fa-github"></i>
</a>

## Overview

"Blocipedia" was the first project I created after completing the "Foundation Phase" of Bloc's "Rails Web Development Track". This is a Wiki application, in which users can browse, create, and edit public Wikis. Users are also able to upgrade to a Premium account using, Stripe Checkout, if they would like the opportunity to create private Wikis, and invite others to collaborate on wikis.

## Personal Learning Objectives

My main focus for this app was to continue to improve my understanding of routes, database relationships, and controller actions of CRUD applications, while continuing to improve the overall consistency and modularity of my code.

## User Stories

* As a User, I want to be able to sign up for a free account by providing user name, email, and password.
* As a User, I want to be able to sign in and out of Blocipedia.
* As a User with a standard account, I want to be able to Create, Read, Update, and Destroy Public Wikis.
* As a User, I want a User Profile to display and edit personal Wikis.
* As a Developer, I want to offer three user roles: Admin, Standard, or Premium.
* As a Developer, I want to seed the development database with users and wikis.
* As a User, I want to create wikis using Markdown syntax.
* As a User, I want to upgrade my account from a Standard to Premium plan.
* As a Premium User, I want to create private wikis.
* As a Premium User, I want to add and remove collaborators from my private wikis.

##### Extra Credit
* As a Developer, I want to generate views using HAML, instead of ERB.

## Tools

* <a href="https://github.com/plataformatec/devise" target="_blank">Devise</a> - User Authentication
* <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a> - Front-end Framework(HTML,CSS/Sass, Javascript)
* <a href="http://html2haml.herokuapp.com/" target="_blank">Html2Haml</a> - Convert Html Snippets to Haml Snippets
* <a href="https://stripe.com/docs/checkout/guides/rails" target="_blank">Stripe</a> - Cross-Device Payment Form
* <a href="https://github.com/elabs/pundit" target="_blank">Pundit</a> - Simple Authorization System Utilizing Ruby Classes
* <a href="https://github.com/vmg/redcarpet" target="_blank">Redcarpet</a> - Markdown Parser
* <a href="https://github.com/amatsuda/kaminari" target="_blank">Kaminari</a> - Pagination
* <a href="https://github.com/charliesome/better_errors" target="_blank">Better Errors & Binding of Caller</a> - Improved Rails Error Page

## Conclusion

This application was a great learning experience as it was the first full application I've built without following "Step by Step" tutorials. The most important thing I took away from building my first complete application was learning how to ask myself the right questions when working through an error.

#### Initial Problem Solving Process

1. Hmm.. Something isn't right?
2. Quickly check for syntax error -> Refresh Browser
3. Still not working? Google Error -> Try Result
4. Start Back at 1 - This process would find solutions, but not understanding



#### Improved Problem Solving Process

1. Hmm.. Something isn't right?
2. Do I understand every line I just wrote?
3. Why am I writing this code?
4. What is the error message really telling me? What is causing the error?
5. If I don't know the root of the error, Google it. Are others running into a similar error?
6. What scenarios are causing similar errors in other's code?
7. Is there anything in the answer explanation that applies to my situation?
8. If there is enough to help me understand my error, great! If not, refactor the question and search for additional solution explanations to understand the problem.

> Learning why and how the problem occurred is much more beneficial than simply solving the problem.

{:.center}
<a href="{{ site.baseurl }}/portfolio/blocitoff" class="button">
Explore Blocitoff
</a>
<a href="{{ site.baseurl }}/portfolio/blocmarks" class="button">
Explore Blocmarks
</a>
