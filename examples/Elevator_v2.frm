#Elevator

    -interface-

    start @(|>>|)
    Stop
    Up
    Down

    -machine-

	$SetUpElevator
    	|>>| init() -> $Stopped ^

    $Stopped
        |>| stopped() ^
        |Up| log("Going Up") -> "Up" $GoingUp ^
        |Down| log("Going Down") -> "Down" $GoingDown ^
        |Stop| ^
        

    $GoingUp
    	|>| goingUp() ^
        |Stop| log("Elevator stopped") -> "Stop" $Stopped ^
        |Up| log("First stop the elevator") ^
        |Down| log("First stop the elevator") ^
        
    $GoingDown
        |>| goingDown() ^
        |Stop|log("Elevator stopped") ->  "Stop" $Stopped ^
        |Up| log("First stop the elevator") ^
        |Down| log("First stop the elevator") ^
        
    -actions-
    
    init
    stopped
    goingUp
    goingDown
    log [msg]

##