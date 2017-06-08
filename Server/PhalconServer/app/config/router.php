<?php

$router = $di->getRouter();

// Define your routes here

$router->handle();

$router->addGet(
	"/api/persons/search/{id:[0-9]+}",
    [
        "controller" => "persons",
        "action"     => "search",
        "id"	 	 => 1
    ]
);

$router->addGet(
	"/api/persons/list/{limit:[0-9]+}",
    [
        "controller" => "persons",
        "action"     => "list",
        "limit"	 	 => 1
    ]
);