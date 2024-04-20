function findSmallestPrefix(strings) {
    if (strings.length === 0) return "";

    let prefix = strings[0]; // Initialize prefix with the first string

    for (let i = 1; i < strings.length; i++) {
        const currentString = strings[i];
        let j = 0;
        // Compare characters until a mismatch is found or the end of one of the strings is reached
        while (j < prefix.length && j < currentString.length && prefix[j] === currentString[j]) {
            j++;
        }
        // Update the prefix to the common prefix found so far
        prefix = prefix.slice(0, j);
        // If prefix becomes an empty string, there's no common prefix, so break
        if (prefix === "") break;
    }

    return prefix;
}

// Example usage:
const strings = ["flower", "flow", "flight"];
console.log(findSmallestPrefix(strings)); // Output: "fl"
