<?php

// 関数

$lang ="ruby";

function sayHi($name){
    $lang = "php";
    echo "hi! $name from $lang";
}

sayHi("Tom");
var_dump($lang); //ruby
