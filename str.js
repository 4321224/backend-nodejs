function printStrings() {
    for (let i = 0; i <= 100; i++) {
        let output = "";

        if (i % 99 === 0) {
            output += "KIOSTIX";
        } else {
            if (i % 25 === 0) {
                output += "KI";
            }
            if (i % 40 === 0) {
                output += "OS";
            }
            if (i % 60 === 0) {
                output += "TIK";
            }
        }

        if (!output) {
            output = i.toString();
        }

        console.log(output);
    }
}

printStrings();
