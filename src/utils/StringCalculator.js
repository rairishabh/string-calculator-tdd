export const createStringCalculator = () => {
    const add = (numbers) => {
      if (numbers === "") return 0;
      
      let delimiter = ",";
      let numberString = numbers;
      
      if (numbers.startsWith("//")) {
        const firstNewLine = numbers.indexOf("\n");
        delimiter = numbers.substring(2, firstNewLine);
        numberString = numbers.substring(firstNewLine + 1);
      }
      
      const delimiters = [delimiter, "\n"];
      
      let processedString = numberString;
      delimiters.forEach(d => {
        processedString = processedString.split(d).join(",");
      });
      
      const nums = processedString
        .split(",")
        .map(num => num.trim())
        .map(num => parseInt(num));
      
      const negatives = nums.filter(num => num < 0);
      if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
      }
      
      return nums.reduce((sum, num) => sum + num, 0);
    };
  
    return { add };
  };