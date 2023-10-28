# GeoQuiz

![GeoQuiz](/assets/docs/styling/mockUp.png)

GeoQuiz was created as my second milestone project for the Code Institutes Level 5 Diploma in Web Application Development.

Link to deployed site: [GeoQuiz](https://al-ell.github.io/geoQuiz/)

[GitHub last commit](https://github.com/al-ell/geoQuiz/commits/main)

## CONTENTS

- [GeoQuiz](https://al-ell.github.io/geoQuiz/)
  - [CONTENTS](#contents)
  - [User Experience](#user-experience)
    - [Project Goals](#project-goals)
    - [User Stories](#user-stories)
      - [**Target Audience**](#target-audience)
      - [**First Time Visitor Goals**](#first-time-visitor-goals)
      - [**Returning Visitor Goals**](#returning-visitor-goals)
      - [**Admin User**](#admin-user)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
    - [Wireframes](#wireframes)
  - [Features](#features)
    - [Elements found on each page](#elements-found-on-each-page)
    - [Future Implementations](#future-implementations)
    - [Accessibility](#accessibility)
  - [Technologies Used](#technologies-used)
    - [Languages Used](#languages-used)
    - [Frameworks Used](#frameworks-used)
    - [Libraries \& Packages Used](#libraries--packages-used)
    - [Error Handling](#error-handling)
  - [Deployment \& Local Development](#deployment--local-development)
    - [Deployment](#deployment)
    - [Local Development](#local-development)
      - [How to Fork](#how-to-fork)
      - [How to Clone](#how-to-clone)
  - [Testing](#testing)
  - [Credits](#credits)
    - [Code Used](#code-used)
    - [Content](#content)

---

## User Experience

### Project Goals

To create a geography trivia quiz game which gives the user an end score.

### User Stories

#### **Target Audience**

The target audience includes children and adults who want to test their geography knowledge.

#### **First Time Visitor Goals**

As a first time user of the site I want to:

- Understand the purpose of the site
- Understand how to navigate to different pages
- Complete a gepgraphy quiz
- See my score at the end of the quiz

#### **Returning Visitor Goals**

As a Returning visitor I want to:

- All first time user goals
- See if I can beat my previous score
- Contact the quiz maker to request more quizzes

#### **Admin User**

As an administrator for the site I want to:

- Be able to update the features with ease

---

## Design

### Colour Scheme

![color scheme](/assets/docs/styling/colorPallete.png)
careated using [Coolors](https://coolors.co/) color pallete generator.

I have attempted to make the website gender neutral. I chose a yellow backing for the majority of the quiz as it is easier to read.

### Typography

I have chosen child friendly and easy to read Google Fonts for the logo, headings/movie titles and paragraphs.

##### Logo

Kalam:
![kalam](/assets/docs/styling/kalam.png)

##### Nav

![Itim](/assets/docs/styling/itim.png)

##### Questions, Options & Contact Form

Delius:
![delius](/assets/docs/styling/delius.png)

### Imagery

Favicon:

Favicon created using [favicon.io](https://favicon.io/favicon-generator/)

![Favicon](/assets/favicon/favicon.ico)

### Wireframes

Wireframes for different screen sizes created using Balsamiq.

![Start Screen Wireframes](/assets/docs/wireframes/startScreen.png)

![Quiz Screen Wireframes](/assets/docs/wireframes/quizScreen.png)

![Error Screen Wireframes](/assets/docs/wireframes/errorPage.png)

---

## Features

The website is comprised of 3 pages:

- Index page
- Contact form page
- 404 page

### Elements found on each page

- Navbar
- Footer

##### Index Page

![Start Screen](/assets/docs/screenshots/finalIndexDt.png)

![Mobile Start Screen](/assets/docs/screenshots/finalStartMobile.png)

![Quiz Screen](/assets/docs/screenshots/finalQuestion.png)

![Mobile QuiZ Screen](/assets/docs/screenshots/mobileQuestion.png)

![End Screen](/assets/docs/screenshots/finalEndScreen.png)

![Mobile End Screen](/assets/docs/screenshots/mobileEndScreen.png)

##### Contact Page

![Contact Form](/assets/docs/screenshots/finalContact.png)

##### Error Page

![Error Screen](/assets/docs/screenshots/finalError.png)

![Mobile Error Screen](/assets/docs/screenshots/finalErrorMobile.png)

### Future Implementations

Possible future updates can include:

- Create an account to save their score
- Ability to share score
- A variety of quizes at different levels
- Randomised questions & more than 10 questions in each quiz

### Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been achieved by:

Using semantic HTML.
Using labels for inputs.
Providing information for screen readers where there are icons used and no text.
Adding "current" to navigation for screen reader to inform of page being accessed.
Ensuring that there is a sufficient colour contrast throughout the site.

## Technologies Used

### Languages Used

HTML, CSS, Javascript.

### Frameworks Used

- [Bootstrap v5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [EmailJS](https://www.emailjs.com/)

### Libraries & Packages Used

[Codeanywhere] - Online code editor.

[Balsamiq](https://balsamiq.com/) - Used to create wireframes.

[Github](https://github.com/) - To save and store the files for the website.

[Google Fonts](https://fonts.google.com/) - To import the fonts used on the website.

[Font Awesome](https://fontawesome.com/) - For the icons on the website.

[Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) - To troubleshoot and test features, solve issues with responsiveness, functionality and styling.

[Am I Responsive?](http://ami.responsivedesign.is/) To show the website on a range of devices.

### Error Handling

I have created a 404 page to direct the user back to the home page if a broken link is selected.

---

## Deployment & Local Development

### Deployment

The project was developed using Codeanywhere cloud IDE and pushed to GitHub using the inbuilt command line. To deploy to GitHub Pages from the [Github repository](...) follow these steps:

1. Log in to [GitHub](....)
2. Go to the [repository page](...)
3. Change the name of the respository to "username.github.io" : al-ell.github.io
4. From the menu above the repository menu select **settings**
5. On the left select **pages**
6. Under **source** select **deploy from a branch**
7. Go to "username.github.io" : al-ell.github.io

### Local Development

#### How to Fork

1. On GitHub.com, navigate to the octocat/Spoon-Knife repository
2. In the top-right corner of the page, click **Fork**
3. Under "Owner," select the dropdown menu and click an owner for the forked repository
4. By default, forks are named the same as their upstream repositories. Optionally, to further distinguish your fork, in the "Repository name" field, type a name
5. Optionally, in the "Description" field, type a description of your fork
6. Optionally, select **Copy the DEFAULT branch only**
7. Click **Create fork**

#### How to Clone

1. On GitHub.com, navigate to the main page of the repository 2. Above the list of files, click **<> Code** 3. Copy the URL for the repository
   _To clone the repository using HTTPS, under "HTTPS", click **clipboard icon**
   _ To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click **clipboard icon** \* To clone a repository using GitHub CLI, click GitHub CLI, then click **copy icon** 4. Open Terminal, change the current working directory to the location where you want the cloned directory 5. Type 'git clone', and then paste the URL copied earlier 6. Press **Enter** to create your local clone

---

## Testing

Please see [TESTING.md](TESTING.md) for all testing performed

---

## Credits

### Code Used

Logic inspired by:
[Quiz Tutorial](https://simplestepscode.com/javascript-quiz-tutorial/)
[Alternate Quiz Tutoral](https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/)

[Test tutorial followed before creating own logic](https://www.youtube.com/watch?v=p-2G-7vLuV4)

### Content

Quiz questions from [Trivia Champ](https://www.triviachamp.com/Geography-Trivia.php)

---
