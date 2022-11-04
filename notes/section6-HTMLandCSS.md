# HTML & CSS
## HTML
````

<html>
  <head>
    <link href="style.css" rel="stylesheet" /> <!-- link to css -->
    <title>Learning HTML & CSS</title>
  </head>
  <body>
    <h1>Main heading</h1>
    <p class="first">
      We use an anchor element to describe the href attribute (URL). Link:<a
        href="https://www.udemy.com/user/jonasschmedtmann/">
        Standard blue link underlined</a>.
    </p>
    <h2>Another heading</h2>
    <p class="second">Just another paragraph. Image below:</p>
    <img
      id="course-image"
      src="https://img-a.udemycdn.com/course/480x270/437398_46c3_9.jpg"/>
    <form id="your-name">
      <h2>Your name here</h2>
      <p class="first">Please fill in this form :)</p>
      <input type="text" placeholder="Your name" />
      <button>OK!</button>
    </form>
  </body>
</html>
````
## CSS
````

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
````
## CSS Box Model

margin|     border|   padding|content|padding   |border     |margin

