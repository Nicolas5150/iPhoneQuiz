function ComputeAnswers(){
  // phone model
  var iphoneSixS = 0, iphoneSix = 0, iphoneFiveS = 0;
  // phone capacity
  var sixteenGB = 0, sixtyfourGB = 0, hundredTwentyEightGB = 0;
  // device screen size
  var plusSize = 0, regularSize = 0;
  // phone color
  var silver = 0, gold = 0, rose = 0, gray = 0;
  // flag to confrim the user does not have even values in the model counter
  var flag = 0;
  // winning model, size, color, and screen
  var winningModel = '', winningSize = '', winningColor = '', winningScreen = '';

  // puts the answers from the form into an array called answers to calulate in a loop
  // answer is the class and from the HTML - this runs 10 times
  var answers= document.getElementsByClassName("answer");

  //for loop running x times according to amount of answers - 31 times
  for (i=0; i<answers.length; i++)
  {
    // goes into if statment when question has a checkmark for its answer
    if (answers[i].checked)
    {
      // checking to see if the value (set in the html form) is equal to which phone model
      // checking the new array that is storing the data from the form in the HTML
      // add to a running total of each model, storage, and color to select right choice
      if (answers[i].value === 'sixS')
          iphoneSixS++ ;
      else if (answers[i].value === 'six')
          iphoneSix++;
      else if (answers[i].value === 'fiveS')
          iphoneFiveS++;
      // check for storage size
      else if (answers[i].value === 'largeStorage')
          hundredTwentyEightGB++;
      else if (answers[i].value === 'mediumStorage')
          sixtyfourGB++;
      else if (answers[i].value === 'smallStorage')
          sixteenGB++;
      // check for plus or regular sized screen
      // if neither was chosen in html form it defaults a point the the 5s device
      else if (answers[i].value === 'plus')
          plusSize++;
      else if (answers[i].value === 'regular')
          regularSize++;
      // check for color
      else if (answers[i].value === 'silverColor')
          winningColor = 'Silver';
      else if (answers[i].value === 'goldColor')
          winningColor = 'Gold';
      else if (answers[i].value === 'roseColor')
          winningColor = 'Rose Gold';
      else if (answers[i].value === 'grayColor')
          winningColor = 'Space Gray';
    }//end of if answers[i]
  }//end of for loop answers.length

  // first find winning model
  // iphone 6S won
  if (iphoneSixS >= iphoneSix && iphoneSixS >= iphoneFiveS)
  {
      if (iphoneSixS == iphoneSix || iphoneSixS == iphoneFiveS)
      {
        equalCount()
      }
      else {
        winningModel = 'iPhone 6S';
        getStorageAndSize()
      }
  }
  // iPhone 6 won
  else if (iphoneSix >= iphoneSixS && iphoneSix >= iphoneFiveS)
  {
      if (iphoneSix == iphoneSixS || iphoneSix == iphoneFiveS)
      {
        equalCount()
      }
      else
      {
        winningModel = 'iPhone 6';
        getStorageAndSize()
      }
  }
  // iPhone 5S won
  else {
      if (iphoneFiveS == iphoneSixS || iphoneFiveS == iphoneSix)
      {
        equalCount()
      }
      else
      {
        winningModel = 'iPhone 5S';
        getStorageAndSize()
      }
  }
  // function to alert equal count of two models
  // alert the user that he has answered in a way that causes a tie on the devices
  // set flag so that printing of the winning device so far wont show
  function equalCount()
  {
    alert("Your answers for questions 1-7 has created two different model results, please reevaluate those questions so we can select just one device.");
    flag = 1;
  }//end of equal count function

  // function to find storage and screen size
  function getStorageAndSize()
  {
    // check storage size
    if (hundredTwentyEightGB >= sixtyfourGB && hundredTwentyEightGB >= sixteenGB )
        winningSize = '128GB';
    else if (sixtyfourGB >= hundredTwentyEightGB && sixtyfourGB >= sixteenGB )
        winningSize = '64GB';
    else
        winningSize = '16GB';
    // check screen size - only if not 5s since it only has one screen size
    if (winningModel != iphoneFiveS){
      if (plusSize > regularSize)
          winningScreen = 'Plus Model';
      else
          winningScreen = 'Regular Model';
    }
  }//end of getStorageAndSize function

  // HTML output only changes if the a model has a percise leader
  if (flag != 1)
  {
    document.body.removeChild(document.getElementById( 'formQuestions'));
    document.getElementById('results').innerHTML = "Your perfect device is:<br>";
    document.getElementById('results').innerHTML += 'Model: '
    +winningModel+  '<br>Storage Size: ' +winningSize+ '<br>Color: '
    +winningColor;
    // if 6 or higher, show regular or plus size model description and its image
    if (winningModel != 'iPhone 5S')
    {
      document.getElementById('results').innerHTML += '<br>Screen: ' +winningScreen;
      // add image to the screen
      var filename = "images/iPhoneSix.png";
      document.getElementById('imageResult').innerHTML += "<img src='" + filename + "'>";
    }
    // show iphone 5s image
    else
    {
      var filename = "images/iPhoneFive.png";
      document.getElementById('imageResult').innerHTML += "<img src='" + filename + "'>";
    }
  }//end of if for changing HTML text
}
