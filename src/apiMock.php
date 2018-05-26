<?php 

$postcode = htmlspecialchars($_POST["location"]);

$response = [
    [
        "name" => "Company A",
        "postcode" => $postcode,
        "description" => "Lorum Ipsum",
        "short" => "NB: Lorum Ipsum"
    ], 
    [
        "name" => "Company B",
        "postcode" => $postcode,
        "description" => "Lorum Ipsum",
        "short" => "NB: Lorum Ipsum"
    ],
    [
        "name" => "Company C",
        "postcode" => $postcode,
        "description" => "Lorum Ipsum",
        "short" => "NB: Lorum Ipsum"
    ]
];

echo json_encode($response);