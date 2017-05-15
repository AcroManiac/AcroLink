<?php

return [

    'application' => [
        'title' => 'AcroLink RESTful Server',
        'description' => 'This application provides RESTful api for AcroLink service.',
        'baseUri' => '/',
        'viewsDir' => __DIR__ . '/../views/',
    ],

    'authentication' => [
        'secret' => 'bPMBL5oerj7mFzmkLMX8SDKx',
        'expirationTime' => 86400 * 7, // One week till token expires
    ]
];
