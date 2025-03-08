document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("voteForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.getElementById("name").value.trim();
        let age = parseInt(document.getElementById("age").value);

        if (!name || isNaN(age)) {
            alert("Please enter valid details.");
            return;
        }

        let votingPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                age > 18 ? resolve(`Welcome, ${name}. You can vote.`) : reject(`Oh sorry ${name}. You aren't old enough.`);
            }, 4000);
        });

        votingPromise
            .then(message => alert(message))
            .catch(error => alert(error));
    });
});

