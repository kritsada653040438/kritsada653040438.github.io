    function readInput() {
        let list = [];
        let input;
        do {
            input = prompt("Enter an integer (A negative integer to quit):");
            input = parseInt(input);
            if (!isNaN(input) && input > 0) {
                list.push(input);
            } else if (input < 0) {
                break;
            } else {
                alert("Invalid input. Please enter a valid integer.");
            }
        } while (true);
        return list;
    }

    function displayStats(list) {
        let average = list.length ? (list.reduce((a, b) => a + b, 0) / list.length).toFixed(2) : 0;
        let min = list.length ? Math.min(...list) : 0;
        let max = list.length ? Math.max(...list) : 0;
        alert(`For the list : ${list}\n The Average is : ${average}\n The Minimum is : ${min}\n The Maximum is : ${max}`);
    }

    function main() {
        let list = readInput();
        displayStats(list);
    }
    main();
