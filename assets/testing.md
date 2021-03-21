# Testing

I have organized the testing.md file by first testing the HTML file, followed by the CSS file, and finally the JavaScript files. 

I spilt the JavaScript testing into two sections. One for each JavaScript file; mail.js and map.js.
The map.js was tested in full, however after the intial testing was complete, I choose to remove the arrays, and place them in another JavaScript file titled 'data.js'. 

Finally, I have a general testing section where I tested each component of the website across on desktop, tablet, and mobile. 

## HTML 

I passed the HTML code through the W3C Markup Validation Service. 

1. I received two warnings stating "The type attribute is unnecessary for JavaScript resources." This was concerning my two script tags for the EmailJS API at the head of my HTML file. The type attribute was removed, and I reloaded the page, sent a test email, and watched the console for any errors. The email was received, and there were no errors logged to the console. Upon further research, I learned that the type attribute is not required in HTML5. This cemented my choice to remove it. 



2. I had an error relating to the hidden div where a message is displayed to users if they correctly send an email via the contact form. The error stated that "Attribute classs not allowed on element div at this point." At first, I wasn't sure why this error was present, thinking it may relate to the use of a hidden div. However, upon inspection, I realized it was a typo on my part. I used "classs" rather than "class". Once corrected, the error was no longer present. Upon running through the code through the validator again, the error was no longer present. 


3. I had an error relating to my navigation bar, specifically that the aria-controls attribute must point to an element in the same document. This error was because of a typo in my document and was quickly fixed. 


## CSS

I tested my CSS code via W3C CSS Validator. No errors were found here. 


## JavaScript 



### Map.js - The Interactive Map


#### JSHint Testing 

I passed the map.js code through JSHint to see if there were any errors or warnings.  

1. I had missed a semi-colon and the end of each array, which was quickly corrected. 

2. I had received the following message: "template literal syntax' is only available in ES6. However, I realized that I had not clicked to include ES6 in the JSHINT configure settings. Once clicked, and passing the code through again, the message was no longer present. 

3. I received a message that there were undefined variables; namely 'google'. However, I chose to ignore this, as the google maps API documentation requires its use. For example; 

	google.maps.Map(document.getElementById("map")


4. I received a message that there was an unused variable called "MapButton";

	I initially had this variable equal to a jQuery class selector, however, I have since removed the MapButton variable as it was not necessary. 


5. I received a warning that "Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (currentInfoWindow, map)"

	Upon further inspection and testing, moving the function outside of the loop, no longer allows the map to function as intended. The info window does not close when a new one is clicked. As it is not an error, I have chosen to keep the code as it is. 

6. Due to the large amount of data stored in the location arrays, I created a new JavaScript file to story this information. I titled it 'data.js', and placed all the arrays into this file. 

    This was done so the map.js file could be easily read, and the data could be easily updated in the future. 

#### General Testing

1. I clicked on every button to ensure that the different types of locations populated on the map, and to make sure that only the correct markers would show. 

2. I clicked on each marker for each type of attraction, to ensure that there were no issues with the info window pop-up, images, and content. 

3. I clicked on a new attraction button to ensure that the new markers would populate, and the old markers would vanish. 

4. I create console logs for each variable to see if there were any errors.

5. I created console logs for each array which stored locations, to ensure that the information was being logged.

On all instances, there were no errors present, and each array of locations would rest when a new button was clicked.  


### Mail.js - The Contact Form and Newsletter Sign Up


#### JSHint Testing 

I passed the mail.js code through JSHint to see if there were any errors or warnings.  

1. There were no errors or warnings. 

2. There is one undefined variable namely; emailjs. 

	I chose to ignore this as this relates to the EmailJS API referenced in the HTML page. 


3. There are two unused variables; sendMail and newsLetter. 

	I chose to ignore this message as these variables are related to the function to send the relevant information via the newsletter sign-up input and contact form. 


#### Contact form 

1. I tested the modal trigger button to ensure that the contact form would populate. 

2. I completed the form, and submit it correctly.

3. I attached a console log to the form to log a success message and to display a success message to the user once the form was submitted.

4. When submitting the form the console logged 'success' and the message displayed to the user correctly, and I receive the email. 

5. I also ensured that the fields were reset upon submission. 

I have attached a screenshot of an email that was received from the contact form. This can be viewed [here](images/email-testing.png)

#### Newsletter

1. I tested the newsletter sign-up button by inputting an email address.

2. I applied the same process as I did with the contact form; creating a success message for users, and consoling logging a success or an error message, depending on the result. 

3. When submitting an email to the newsletter sign-up; the console log reports success, the user thank you message is displayed, and I receive the correct email.

I have attached a screenshot of an email that was received from the newsletter input. This can be viewed [here](images/newsletter-testing.png)



## Site General Testing


Once the project was deployed to GitHub Pages, I once again tested the website, to ensure that there were no oversights or unknown bugs. 

### Navigation

* I clicked on the navigation link 'Home' and confirmed it returns to the home page. 
* I clicked on the navigation link 'Contact' and confirmed it populates a modal with a contact form inside of it. 
* I clicked on the navigation link 'Explore' and confirmed that it leads to the correct section of the website.
* I clicked on every button to make sure that they led the user to the correct section of the website. 
* I clicked on each social media icon in the footer and confirmed that it directed users to a new tab with the correct website opening.
* I clicked on each section of the site map in the footer to confirm it re-directed the user to the correct section. 
* I created a 404.html page which helps re-direct users to the main page, if a 404 error occurs. This can be seen [here](images/hidden-gems-404.png)

### Map

* I once again clicked on every map button to ensure the correct locations populated. 
* I clicked on each marker to ensure the info window content was correct. 
* I clicked on a new map button to ensure the previous locations vanished and the new locations populated. 

### Contact

* I tested both the contact form and the newsletter input to ensure that the form was submitted correctly. 
* I checked my emails to confirm I have received the content from the submitted form.
* I also tested sending a form without the required information. The form directs the user to input the required information, and will not send without it.

### Responsiveness 

* I tested the responsiveness of the website across all three major devices; desktop, tablet, and mobile phone. The website keeps the correct structure. 

* I tested the website across several browsers, with no issues to report. The browsers tested are Google Chrome, Firefox, and Safari. 


## Testing User Stories 

* I want a website that shows me lesser-known tourist attractions in Ireland. 

	 * This is evident in the interactive map which shows several tourist attractions that are not well-known to people both domestically and internationally.
	 	
		* You can see this [here](images/user-story-attractions.png)

* I want a website that is easily accessed on my mobile phone and tablet. 

	 * The website is responsive for both mobile phones and tablets. I have taken steps to ensure a smooth experience across all devices. This is achieved by utilizing bootstrap classes as well as custom media queries. 
	 	
		* You can see this [here](images/user-story-mobile-device.png)

	* The navigation bar also changes to a hamburger-style icon on smaller devices. The dropdown navigation bar frees up screen space on mobile and tablet devices.

* I want a website that is easy to understand and navigate. 

	* The main purpose of the website is quickly outlined to the user, and it is easy to navigate as there are visual cues such as buttons, relevant navigation links, and images. 
	* Each navigation link is clearly stated and directs users to the relevant sections. 
	* The footer is populated with a site map to allows users to move through the website without scrolling too much. 
		* You see this [here](images/user-story-site-map.png)
	* The social media links are clearly outlined, and open a new tab once clicked. 
	* The links in both the navigation menu and footer site map have subtle hover effects which show the user what they are clicking on. 
	* The buttons also have hover and active effects which show the user which button they are going to click on and which button is currently active. 
		* You can see this [here](images/user-story-map-buttons.png)

* I want to be able to contact the site owner if I have any questions or suggestions. 

	* There is a contact form linked at the top of the website via the navigation heading 'Contact'. 
	* There is another link to the contact form below the interactive map
	* There is a final contact form linked in the footer.
	* This allows the user to quickly contact the site owner with questions or suggestions. 
		* An example of the contact form can be seen [here](images/user-story-contact-button.png)

* I want to be able to filter the tourist attractions I am interested in. 

	 * In the interactive map section, 6 buttons filter the main type of tourist attractions. This allows users to only see the type of attractions which they are interested in. 

		* The map buttons to filter locations can be seen [here](images/user-story-map.png)

* I would like to be able to follow the website's social media accounts.

	* In the footer section of the website, there are five social media links that direct users to the website's social media channels. 
	* The social media links open a new tab, so the users can continue to use the website without having to use their browser to navigate. 

* I would like to be updated on any new features.

	* In the footer section of the website, there is an input form for a Newsletter that allows users to sign up, and be updated on new features, news, or any updates regarding the website. 
		* The newsletter input can be seen [here](images/user-story-newsletter.png)