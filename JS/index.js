function isArmstrong(n) {
    var order = 0;
    var sum = 0;
    var temp = n;

    if (n === 0) {
        order = 1;
    } else {
        while (temp > 0) {
            order++;
            temp = Math.floor(temp / 10);
        }
    }

    temp = n;

    while (temp > 0) {
        var rem = temp % 10;
        var res = 1;

        for (var j = 0; j < order; j++) {
            res *= rem;
        }

        sum += res;
        temp = Math.floor(temp / 10);
    }

    return sum === n;
}

function check() {
    var n = Number(document.getElementById("num").value);

    if (document.getElementById("num").value.trim() === "" ||
        n < 0 || !Number.isInteger(n)) {
        return "Please enter a valid non-negative integer.";
    }

    if (isArmstrong(n)) {
        return n + " is an Armstrong number";
    } else {
        return n + " is not an Armstrong number";
    }
}

function show() {
    document.getElementById("result").innerText = check();
}