const btn = document.createElement('button');
let textnode = document.createTextNode('Sing!');
document.body.appendChild(btn);
btn.appendChild(textnode);

btn.addEventListener("click", myFunction);

function myFunction() {

    let friends = ["David", "Melissa", "Sam", "CJ", "Vic"]

    for (let i = 0; i < friends.length; i++) {
        const friendDiv = document.createElement("div")
        friendDiv.className = "Friend"
        document.body.appendChild(friendDiv)
        const friendName = document.createElement("h3")
        friendName.textContent = friends[i]
        friendDiv.appendChild(friendName)


        for (let j = 99; j > 0; j--) {
            const p = document.createElement("p")


            if (j > 2) {
                p.textContent = (j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file.")
            }
            else if (j == 2) {
                console.log(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " line of code in the file.")
            }
            else if (j == 1) {
                console.log(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file!")
            }


            document.body.appendChild(p);
        }



    }

}