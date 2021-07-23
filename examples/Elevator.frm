#Elevator

    -interface-
    start @(|>>|)
    Stop
    Up
    Down

    -machine-

    $Stopped
     	|>| stopped() ^
        |Up| -> "Up" $GoingUp ^
        |Down| -> "Down" $GoingDown ^
        

    $GoingUp
    	|>| goingUp() ^
        |Stop|-> "Stop" $Stopped ^
        
    $GoingDown
        |>| goingDown() ^
        |Stop|->  "Stop" $Stopped ^

##