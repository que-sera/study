<?php

// 関数

$x = 5.6;
//echo ceil($x); //6
//echo floor($x); // 5
//echo round($x); // 6
//echo rand(1, 10);

$s1 = "hello";
$s2 = "Cat";
//echo strlen($s1); //s
//echo mb_strlen($s2); //2
//printf("%s - %s -%.3f", $s1, $s2, $x);

$colors = ["red", "blue", "pink"];
echo count($colors);
echo implode("@",$colors);