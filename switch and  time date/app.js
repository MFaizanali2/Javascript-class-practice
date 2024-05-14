var age = prompt("Please enter age");
switch (true){
    case (age >= 15 && age <=20):
    console.log("You are eligible");
    break;

    case (age >= 21 && age <=30):
    console.log("You are not eligible");
    break;

    // case 2:
    // console.log("Today is Wednesday");
    // break;

    // case 3:
    // console.log("Today is Thursday");
    // break;

    // case 4:
    // console.log("Today is Friday");
    // break;

    // case 5:
    // console.log("Today is Saturday");
    // break;

    // case 6:
    // console.log("Today is Sunday");
    // break;

    default:
    console.log("Enter Valid age");

}