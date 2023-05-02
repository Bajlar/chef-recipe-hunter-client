/**
* Main Requirements
* --------------------
// Create a website that shows the recipes of all available chefs. The website must be exclusively dedicated to one cuisine(Bangladeshi, Chinese, Indian, Mediterranean, Thai, Japanese, Italian, African, Vietnamese, Srilankan, Nepalese, American, Korean, Mexican, Australian, Afgan, French, etc.). For example, if you give Chinese Chef and Chinese food recipes, it will only have Chinese Chef and Chinese food recipes. You cannot add recipes from other countries—only one country chef and recipe. ----> ok

// 1. Make sure your design is unique.
// First, select the cuisine type. Google the site design or visit ThemeForest to get your website idea. However, your website cannot relate to your previous assignments or any demo project displayed in the course or our conceptual sessions. ----> ok

// 2. Give your website a name. The name should appear on the website and be displayed on the website's title. ----> ok
 
// 3. Your website should have a navbar.
// with the Website name, Home, Blog and User profile picture. The user profile picture on the navbar is conditional. If the user is signed in, the navbar will show the profile picture; otherwise, it will show the Login button. If the user name is available, the user's name will be visible when the mouse hovers over the profile picture.

// 4. Create a reasonable and meaningful footer.
// Make sure that the navbar and footer are present on all pages: ----> ok

// 5. When a user clicks on the login button, they will be redirected to the login page having the following:
// Email/Password
// Google Sign-in
// GitHub Sign-in
// A link that will redirect to the registration page ----> ok

// 6. The Registration page will have the Email/Password form having the following fields:
// Name
// Email
// Password
// Photo URL
// Note: Do not enforce the email verification method, as it will inconvenience the examiner. If you want, you can add email verification after receiving the assignment result. ---- ok

7. On the Registration page, display errors when:
update: If a user's email address or password doesn't match, display error. This error will be displayed on the Login page.
The password is less than 6 characters
A user cannot submit empty email and password fields

// 8. On the Homepage: There will be a banner section. You can make it a reasonable banner. That be text on one side, and picture in another side. Or it could be text with background pictures. It could be a slider or a carousel. You can make it the way you want. ----> ok

9. The home page will have a Chef section with at least six cards. Each card will have the following information:
Chef Picture
Chef Name
Years of experience
Numbers of recipes
Likes
View Recipes Button

10. Add at least two extra sections on the home page. Make sure the sections are meaningful for the website you are building.

11. When a user clicks on a chef's View Recipes button, he/she will be redirected to the Chef Recipes page. The Chef Recipes page will have the following :
Banner - chef picture, chef name, a short bio/description, likes, number of recipes, and years of experience.
Think about a section displaying the information of the selected chef's recipes in a tabular form or in a card group.
Each recipe info should contain the recipe name, ingredients (at least 5), cooking method, rating, and a Favorite button. Show at least 3 recipes. for each chef. If needed, you can have duplicate recipes for each chef

12. When clicking the Favorite button, show a toast message showing the recipe is your favorite and disable the button.

13. Show a spinner when the data is in a loading state

// 14. Create a 404 page. Add a picture on the 404 page.

15. Use the Environment variable to hide the Firebase config keys.

16. Add "active route" to indicate the route which you are visiting.
*/

/**
 * Bonus
 * --------------
1. Minimum 12 meaningful git commits on the client-side repository and minimum of 5 meaningful commits on the server-side repository.

2. Create a readme for client-side and write about your project (at least 5 bullet points) .Do not forget to add your live site link of your website here.

3. Make your website home page mobile & desktop responsive (tablet responsive is optional)

4. Create a blogs page route where you will have to answer the following questions
Tell us the differences between uncontrolled and controlled components.
How to validate React props using PropTypes
Tell us the difference between nodejs and express js.
What is a custom hook, and why will you create a custom hook?

5. The Chef Recipe page will be a private/protected page. If you reload the protected/private route (after login), this page will not redirect the user to the login page. Instead, it will keep the logged-in user on the protected route.

6. Apply lazy load to the chef picture either on the banner of Chef Recipes or on the chef pictures of the six cards on the Homepage.
Hint: Google React Awesome components, go to the GitHub repo, find react-lazy-load, and try it. Alternatively, you can try any other package as well.

7. FUN: The blog page, Create a heading and add an icon/ button. When you click on that button, it will create a pdf and will be downloaded ( This will give you some fun. Try out this after completing all of your tasks. Hint: Explore react-to-pdf package). Your pdf should contain some information about the blog page.

8. Make sure your site looks reasonable. The design and color selection is meaningful.

9. Clean and organized Code (folder structure). Organize components with meaningful names, and add comments when needed.
*/

/**
 * What to submit:
 * -----------------
 * 1. Your client-side code GitHub repository
 * 2. Your server-side code GitHub repository
 * 3. Your live website link
*/