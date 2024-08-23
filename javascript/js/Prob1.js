
        function isPrime(num) {
            if (num <= 1) return false;
            if (num <= 3) return true;

            if (num % 2 === 0 || num % 3 === 0) return false;

            for (let i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
            }

            return true;
        }

        function showPrimes() {
            let number;
            while (true) {
                let input = prompt("Please enter a positive integer:");
                number = parseFloat(input);
                if (!isNaN(number) && number > 0 && Number.isInteger(number)) break;
                continue;
            }

            let primes = [];
            for (let i = 2; i <= number; i++) {
                if (isPrime(i)) {
                    primes.push(i);
                }
            }

            const resultDiv = document.getElementById('result');
            alert(`For n = ${number} : Prime numbers are ${primes.join(', ')}`);
            return true;
            
        }

        showPrimes();
            
 

