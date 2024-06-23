<!-- In a php file, write a program to perform a GET request on a route which contains a data key and the value is a string
which contains a data key and the value is a string which contains items in the format: key = STRING, age = INTEGER your goal
is to count how many items exist that have an age equal to or greater than 50, and print final value The php file is like:  -->

<?php
    $ch = curl_init('https://coderbyte.com/api/challenges/json/age_counting');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    $data = curl_exec($ch);
    curl_close($ch);

    // Decode the JSON response
    $response = json_decode($data, true);

    // Get the value of the 'data' key from the response
    $dataString = $response['data'];

    // Initialize a counter for items with age >= 50
    $count = 0;

    // Split the data string into individual key-value pairs
    $items = explode(",", $dataString);

    // Iterate through eachn item
    foreach($items as $item) {

    // Extract key and value from the item
    list($key, $value) = explode("=", $item);

    // Trim any extra spaces
    $key = trim($key);
    $value = trim($value);

    // Check if the key is "age" and value is >= 50
    if($key === "age" && (int)$value >= 50){
        $count++;
    }
}

// Print the final count 
echo "Count of items with age  >= 50 :" . $count . PHP_EOL;

?>
