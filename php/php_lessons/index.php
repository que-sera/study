<?php

// 配列
// key value

$sales = array(
    "taguchi" => 200,
    "fkoji" => 800,
    "dotinstall" => 600,
);

var_dump($sales["fkoji"]); // 800
$sales["fkoji"] = 900;
var_dump($sales["fkoji"]); //900

$colors = ["red", "blue", "pink"];
var_dump($colors[1]); // blue