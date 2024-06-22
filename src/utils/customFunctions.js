export var CommaNumberFormat = (value) => {
    var val = value.toString();

    var first_part = val.includes(".")? val.slice(0, val.indexOf(".")) : val;//if its a decimal number, seperate the characters before the dot "." and after the dot, else just pass the value straight up
    var last_part = val.includes(".")? val.slice(val.indexOf("."), val.length) : "";//if its not a decimal number, pass an empty string for this one since we are only working on the first part

    var split_first_part_chars = first_part.split("");

    //assign the values of the "split_first_part_chars" array in the "commalised_char_array" by starting from the last cell "split_first_part_chars" array. On every 3 iterations, add comma before the value
    for(var c = 1; c <= split_first_part_chars.length; c++){
        if(c < split_first_part_chars.length && c %3 === 0 && split_first_part_chars[split_first_part_chars.length - c - 1] !== "-"){//if this is not the last iteration and this value of c is a multiple of 3 and the character before this is not the "-" sign
            var char_at_c_from_back = split_first_part_chars[split_first_part_chars.length - c];//get the character from the back of the array in the index given
            split_first_part_chars.splice(split_first_part_chars.length - c, 1, "," + char_at_c_from_back);//replace the value of the cell at the back (in the index given) with the same value but has "," attached before it
        }
    }

    //combine all the values of the "commalised_char_array" array into one variable
    var combined_first_part = split_first_part_chars.reduce((accumulator, item)=>{
        return accumulator += item;
    }, "");

    return combined_first_part + last_part;
}