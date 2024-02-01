// Function for number
function addTwo(num: number): number {
    return num + 2;
    // return "hello"
}

// Function for string
function getUpper(val: string) {
    return val.toUpperCase()
}

// normal function
function signUpUser(name: string, email: string, isPaid: boolean) {

}

// Arrow function 
let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

// "Any" is a problem in typescript.

addTwo(5);

getUpper("tanvir");

signUpUser("Tanvir", "tanviranjum046@gmail.com", false);

loginUser("Tanvir", "tanviranjum046@gmail.com")

export { }