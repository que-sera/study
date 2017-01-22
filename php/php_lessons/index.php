<?php

// require: fatal error
// reqire_once


// require "User.class.php";

// include: waring
// include_once

// autoload

spl_autoload_register(function($class){
    require $class. ".class.php";
});

$bob = new User("Bob");
$bob->sayHi();