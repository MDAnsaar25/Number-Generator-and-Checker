 function checkNumberSeries() {
            var number = parseInt(document.getElementById("number").value);

            var armstrongNumbers = [];
            var primeNumbers = [];
            var fibonacciSeries = [];

            for (var i = 1; i <= number; i++) {
                // Check for Armstrong number
                var sumOfDigits = 0;
                var temp = i;
                var numDigits = String(i).length;
                while (temp > 0) {
                    var digit = temp % 10;
                    sumOfDigits += Math.pow(digit, numDigits);
                    temp = Math.floor(temp / 10);
                }
                if (sumOfDigits === i) {
                    armstrongNumbers.push(i);
                }

                // Check for prime number
                var isPrime = true;
                if (i <= 1) {
                    isPrime = false;
                } else {
                    for (var j = 2; j <= Math.sqrt(i); j++) {
                        if (i % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                }
                if (isPrime) {
                    primeNumbers.push(i);
                }

                // Generate Fibonacci series
                if (i === 1) {
                    fibonacciSeries.push(0);
                    fibonacciSeries.push(1);
                } else {
                    var fibo = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
                    fibonacciSeries.push(fibo);
                }
            }

            var result = document.getElementById("result");
            result.innerHTML = "<strong>Armstrong Numbers:</strong> " + armstrongNumbers.join(", ") + "<br>" +
                               "<strong>Prime Numbers:</strong> " + primeNumbers.join(", ") + "<br>" +
                               "<strong>Fibonacci Series:</strong> " + fibonacciSeries.join(", ");
        }