<?php

class User {
    public $name;
    public function __construction($name) {
        $this->name = $name;
    }
    public function sayHi(){
        echo "hi, i am $this->name!";
    }
}
