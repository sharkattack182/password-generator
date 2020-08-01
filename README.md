# password-generator
<p>This is my third homework assignment for UNC Charlottes bootcamp. I was tasked with writting the logic for a random number generator. I had to follow a few specifications.
The first spec was that the user is required to make a series of selections based of prompts such as length and various characters that can be used.
</p>
<P>I started off by declaring all the variables I thought I would need. I labled all of my variables that would be confirms with a YN at the end (yes or no). Since length was able 
to be any number between 8-126 i made that an open ended prompt. I then set up all of the arrays I would need. 
</p>
<p>Now it was time to start writting the function> some of the javascript was provded such as the query selectors and the event listener. So once since GeneratePAssword was already a called function I began to write the function. I took a very long winded way and I hope to learn the easier way soon but the basic idea was a few conditional statements regarding the 
requierments for the password. Once the password was handled I directed a few confirms to sort out what types of characters to use. after that I wrote out each possible combination of array selections and stored them in a variable called "selections. 
</p>
<p>
After this was all done I had to write a for loop that would repeat for the length of digits the user had input at the very beggining. I then generated a variable called randomSelection that would generate a random number and then assign that number to an index of the array of "selections". I then pushed each result of the for loop into an array called "randomPW". I then joined this to create a string which i set as the return value of the function. 
</p>
<p>Like I mentioned earlier, from here most of the heavy lifting was done the queary selector had already been place on the correct id tag and the function had already been called in the event handler. Over all the project was the perfect level of difficulty to not be too overwhelming. I look forward to getting started on my next project soon!
</p>

<p>below I'll PRovide a quick screen grab of the generator working and pleasse feel free to check out the link to my gitHub for the project <a href = "https://github.com/sharkattack182/password-generator">here.<a></p>