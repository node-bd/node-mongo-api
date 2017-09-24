<?php
//extract data from the post
//set POST variables
$url = 'http://localhost/contact';
$fields = array(
    'firstname' => 'amran',
    'lastname' => 'khan',
    'country' => 'Australia',
    'subject' => 'NodeJS'
);

$fields_string = '';

//url-ify the data for the POST
foreach ($fields as $key => $value) {
    $fields_string .= $key . '=' . $value . '&';
}
$fields_string = rtrim($fields_string, '&');

//open connection
$ch = curl_init();

//set the url, number of POST vars, POST data
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_POST, count($fields));
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string);

//execute post
$result = curl_exec($ch);

//close connection
curl_close($ch);