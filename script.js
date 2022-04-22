/**
 * Function that computes the interest gain on the provided infos by the user.
 */
function compute()
{
    // Getting the principal amount
    let principal = document.getElementById("principal").value;

    // Checking that the input is not less than or equal to 0.
    if (principal <= 0 || typeof principal === 'undefined') {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    let rate = document.getElementById("rate").value; // Getting the rate
    let years = document.getElementById("years").value; // Getting the period

    // Calculating the interest
    let interest = principal * years * rate / 100;

    // Calculating the final year
    let year = new Date().getFullYear() + parseInt(years);

    // Grabbing a reference to the "result" tag to manipulate it afterwards.
    let result = document.getElementById("result");

    // Setting the content of the "result" to the calculation result.
    result.innerHTML =
        `If you deposit <mark>${principal}</mark>,<br>` +
        `at an interest rate of <mark>${rate}%</mark>.<br>` +
        `You will receive an amount of <mark>${interest}</mark>,<br>` +
        `in the year <mark>${year}</mark>`;
    
}

/**
 * Function that updates the rate value on the range input to a textual representation
 * for the user.
 */
const updateRate = () => {
    // Getting the rate value from the range input
    let rateval = document.getElementById("rate").value;

    // Setting the inner content of the span to display the actual rate value.
    document.getElementById("rate_val").innerText = rateval + "%";
}