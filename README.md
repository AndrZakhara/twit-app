Blog application: 

Pages: 
- Login Page
- Register Page
- Main Page (all posts from all the authors all categories)
- Post Page (with/without comments)
- Author’s page(with posts only from this author)
- My Page(with ability to write new post)

As a layout all pages should have common header component,
which will have two states(whether user is authorized or not)
in first state it will have only 2 navigation links (Login, Register),
in second state we will have 3 navlinks (Main, My Account, Logout)

Main page should display all the categories and posts. By clicking on a
category posts should be filtered to display only posts of a selected category.

Post page should display a full post and all the comments to it + textarea for a new
comment with button ‘post a comment’. If there are any comments left by this user - user should
be able to delete a comment.

On profile page, user should be able to see his info(in our case it’s login) and avatar
(avatar should be a circled colored image with first and last letter of login, color should be
different depending on the letters combination)
+ there should be a form for creating a new post which will have fields :
 title, 
 category (select from existing or create a new one) 
body (textarea/ *texteditor like tinyMCE or any alternative to it) 

 Author’s page should be similar to combination of main and account’s page, where we will see
 author’s info(login and avatar) and posts only from this user. (if user clicks on his avatar he
 should be redirected to profile page, if user clicks on avatar of a different user he gets to the
 author’s page)