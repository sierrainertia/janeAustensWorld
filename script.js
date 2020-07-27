const myApp = {};

// define lists of first names
myApp.prideAndPrejudiceFirstNames = [
  "Elizabeth",
  "Charles",
  "Fitzwilliam",
  "Lydia",
  "George",
  "Jane",
];

// prettier-ignore
myApp.emmmaFirstNames = [
    "Emma",
    "Harriet",
    "Frank",
    "Jane",
    "Henry",
    "George",
  ];

myApp.senseAndSensibilityFirstNames = [
  "Elinor",
  "Fanny",
  "Marianne",
  "John",
  "Edward",
  "Christopher",
];

myApp.firstNamesByBook = {
  senseAndSensibility: myApp.senseAndSensibilityFirstNames,
  emma: myApp.emmmaFirstNames,
  prideAndPrejudice: myApp.prideAndPrejudiceFirstNames,
};

// define a list of tea last names
// prettier-ignore
myApp.tea = [
    "Earl Grey", 
    "Chamomile", 
    "Green", 
    "Hibiscus", 
    "Black", 
    "Mint",
  ];

// define a list of old english last names
myApp.oldEnglish = [
  "Rawgabbit",
  "Snollygoster",
  "Brabble",
  "Bedward",
  "Grubble",
];

myApp.lastNamesByChoice = {
  tea: myApp.tea,
  oldEnglish: myApp.oldEnglish,
};

myApp.init = function () {
  myApp.eventListener();
  myApp.refresh();
};

myApp.getName = function (list) {
  const i = Math.floor(Math.random() * list.length);
  return list[i];
};

myApp.eventListener = function () {
  $("form").on("submit", function (event) {
    event.preventDefault();

    // collect honorific selected
    const honorificSelectedDD = $("input[list=honorific").val();
    console.log(honorificSelectedDD);
    // get which book they selected
    const fnSelectedRadioButton = $("input[name=novel]:checked");
    const book = fnSelectedRadioButton.val();

    // get the list names for the book
    const firstNameList = myApp.firstNamesByBook[book];

    // choose a character name from the list based on users choice
    const chosenFirstName = myApp.getName(firstNameList);

    // take users choice of tea or old english
    const lnSelectedRadioButton = $("input[name=lastname]:checked");

    const teaOrOldEnglish = lnSelectedRadioButton.val();

    // Get the list of random words for their choice
    const lastNameList = myApp.lastNamesByChoice[teaOrOldEnglish];

    // choose random tea or old english word based on users choice
    const chosenLastName = myApp.getName(lastNameList);

    // return to user random first name + tea/old english word when randomize button is clicked

    $(".results").html(
      `${honorificSelectedDD} ${chosenFirstName} ${chosenLastName}`
    );
  });
};

// reset page when user clicks try again
myApp.refresh = function () {
  $("#refresh").click(function () {
    // got help from https://stackoverflow.com/questions/32178646/uncheck-radio-button-on-click-using-jquery
    $("input[name=novel]:checked").prop("checked", false);
    $("input[name=lastname]:checked").prop("checked", false);
    $("input[list=honorific").val("");
    // reload to top of screen
    window.scrollTo(0, 0);
  });
};

$(function () {
  myApp.init();
});
