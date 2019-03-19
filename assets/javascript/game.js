
$(document).ready(function () {

    //=============== Variable declaration ===============//

    // HP 
    var obiWanHP = 10;
    var lukeHP = 10;
    var darthMaulHP = 10;
    var vaderHP = 10;

    // Attack Points
    var obiWanAP = 2;
    var lukeAP = 2;
    var darthMaulAP = 2;
    var vaderAP = 2;

    // Counter Attack Points
    var obiWanCP = 1;
    var lukeCP = 1;
    var darthMaulCP = 1;
    var vaderCP = 1;

    // Names of each character
    var obiWanName = "Obi Wan";
    var lukeName = "Luke Skywalker";
    var darthMaulName = "Darth Maul";
    var vaderName = "Darth Vader";
    var names = ["obiwan", "luke", "maul", "vader"];

    // Flags for event handling selection
    var movedToEnemies = false;
    var movedToDefender = false;

    // Placeholders for characters/defenders selected
    var selectedCharacter;
    var selectedDefender;



    // function that creates each character's HP, AP, CP and name
    function Character(hitPoints, attackPoints, counterPoints, name) {
        this.hitPoints = hitPoints;
        this.attackPoints = attackPoints;
        this.counterPoints = counterPoints;
        this.name = name;
        this.attack = function (enemy) {
            console.log(this.name + " is attacking " + enemy.name + "!");
            console.log(this.name + "'s HP before attack: " + this.hitPoints);
            console.log(this.name + "'s AP before attack: " + this.attackPoints)
            enemy.hitPoints -= this.attackPoints
            console.log(enemy.name + "'s HP after attack: " + enemy.hitPoints)
            this.attackPoints += obiWanAP;
            console.log(this.name + "'s AP after attack: " + this.attackPoints)
            if (enemy.hitPoints > 0) {
                this.hitPoints -= enemy.counterPoints;
                console.log(this.name + "'s HP after counter: " + this.hitPoints);
            }
            if (this.hitPoints < 1) {
                console.log(this.name + " has died. Please try again!");
            }
        };
    }

    function updateDefenderCharacteristics(secondPick) {
        this.secondPick = secondPick;
        if (secondPick.attr('id') == "obiwan") {
            $("#defender").append($("#obiwan"));
            $("#obiwan").css({ 'border-color': 'red', 'background-color': 'black', 'color': 'white' });
            selectedDefender = "obiwan";
            console.log("Defender: " + selectedDefender);
            movedToDefender = true;
        }
        else if (secondPick.attr('id') == "luke") {
            $("#defender").append($("#luke"));
            $("#luke").css({ 'border-color': 'red', 'background-color': 'black', 'color': 'white' });
            selectedDefender = "luke";
            console.log("Defender: " + selectedDefender);
            movedToDefender = true;
        }
        else if (secondPick.attr('id') == "maul") {
            $("#defender").append($("#maul"));
            $("#maul").css({ 'border-color': 'red', 'background-color': 'black', 'color': 'white' });
            selectedDefender = "maul";
            console.log("Defender: " + selectedDefender);
            movedToDefender = true;
        }
        else if (secondPick.attr('id') == "vader") {
            $("#defender").append($("#vader"));
            $("#vader").css({ 'border-color': 'red', 'background-color': 'black', 'color': 'white' });
            selectedDefender = "vader";
            console.log("Defender: " + selectedDefender);
            movedToDefender = true;
        }
    }


    // instantiate each character
    var obiWan = new Character(obiWanHP, obiWanAP, obiWanCP, obiWanName);
    var luke = new Character(lukeHP, lukeAP, lukeCP, lukeName);
    var darthMaul = new Character(darthMaulHP, darthMaulAP, darthMaulCP, darthMaulName);
    var vader = new Character(vaderHP, vaderAP, vaderCP, vaderName);


    // generate the boxes surrounding each character
    function generateCharacterBox() {
        for (i = 0; i < names.length; i++) {
            var newBox = $("<div>").addClass("characterBox");
            $(newBox).attr("id", names[i]);
            $(newBox).append("<p class='characterName'>" + names[i] + "</p>");
            var newPictureContainer = $("<div>").addClass("pictureContainer");
            $(newPictureContainer).appendTo(newBox);
            var newPicture = $("<div id='" + names[i] + "Picture'>");
            $(newPicture).appendTo(newPictureContainer);
            $(newBox).append("<div id='" + names[i] + "HP'>");
            newBox.css('background-color', 'blue');
            $("#characterSelect").append(newBox);
        }

        // Event handler for clicking on a character's box
        $(".characterBox").on("click", function () {

            // populate selected character
            if (selectedCharacter == null) {
                selectedCharacter = $(this).attr("id");
                console.log("Selected character: " + selectedCharacter);
            }

            // move all other characters to the enemy selection row
            if (movedToEnemies === false) {

                if ($(this).attr('id') == "obiwan") {
                    $("#enemySelect").append($("#luke"), $("#maul"), $("#vader"));
                    $("#luke").css({ 'border-color': 'black', 'background-color': 'red' });
                    $("#maul").css({ 'border-color': 'black', 'background-color': 'red' });
                    $("#vader").css({ 'border-color': 'black', 'background-color': 'red' });
                    movedToEnemies = true;
                }
                else if ($(this).attr('id') == "luke") {
                    $("#enemySelect").append($("#obiwan"), $("#maul"), $("#vader"));
                    $("#obiwan").css({ 'border-color': 'black', 'background-color': 'red' });
                    $("#maul").css({ 'border-color': 'black', 'background-color': 'red' });
                    $("#vader").css({ 'border-color': 'black', 'background-color': 'red' });
                    movedToEnemies = true;
                }
                else if ($(this).attr('id') == "maul") {
                    $("#enemySelect").append($("#obiwan"), $("#luke"), $("#vader"));
                    $("#obiwan").css({ 'border-color': 'black', 'background-color': 'red' });
                    $("#luke").css({ 'border-color': 'black', 'background-color': 'red' });
                    $("#vader").css({ 'border-color': 'black', 'background-color': 'red' });
                    movedToEnemies = true;
                }
                else if ($(this).attr('id') == "vader") {
                    $("#enemySelect").append($("#obiwan"), $("#luke"), $("#maul"));
                    $("#obiwan").css({ 'border-color': 'black', 'background-color': 'red' });
                    $("#luke").css({ 'border-color': 'black', 'background-color': 'red' });
                    $("#maul").css({ 'border-color': 'black', 'background-color': 'red' });
                    movedToEnemies = true;
                }
            }

            // debugger;
            // move the second selected character to the defender row
            if (movedToDefender == false) {

                // Defender logic if Obi Wan is selected character
                if (selectedCharacter == "obiwan") {

                    if ($(this).attr('id') == "luke") {
                        updateDefenderCharacteristics($(this));
                    }
                    else if ($(this).attr('id') == "maul") {
                        updateDefenderCharacteristics($(this));
                    }
                    else if ($(this).attr('id') == "vader") {
                        updateDefenderCharacteristics($(this));
                    }

                }

                // Defender logic if Luke is selected character
                else if (selectedCharacter == "luke") {

                    if ($(this).attr('id') == "obiwan") {
                        updateDefenderCharacteristics($(this));
                    }
                    else if ($(this).attr('id') == "maul") {
                        updateDefenderCharacteristics($(this));
                    }
                    else if ($(this).attr('id') == "vader") {
                        updateDefenderCharacteristics($(this));
                    }
                }

                // Defender logic if Maul is selected character
                else if (selectedCharacter == "maul") {

                    if ($(this).attr('id') == "obiwan") {
                        updateDefenderCharacteristics($(this));
                    }
                    else if ($(this).attr('id') == "luke") {
                        updateDefenderCharacteristics($(this));
                    }
                    else if ($(this).attr('id') == "vader") {
                        updateDefenderCharacteristics($(this));
                    }
                }

                // Defender logic if Vader is selected character
                else if (selectedCharacter == "vader") {

                    if ($(this).attr('id') == "obiwan") {
                        updateDefenderCharacteristics($(this));
                    }
                    else if ($(this).attr('id') == "luke") {
                        updateDefenderCharacteristics($(this));
                    }
                    else if ($(this).attr('id') == "maul") {
                        updateDefenderCharacteristics($(this));
                    }
                }
            }
        })

    }

    generateCharacterBox();

    // Event handler for the attack button
    $("#attack").on("click", function () {

        // logic for obiwan attacks
        if (selectedCharacter == "obiwan" && obiWan.hitPoints > 0) {
            if (selectedDefender == "luke") {
                console.log("attacking");
                obiWan.attack(luke);
            }
            if (selectedDefender == "maul") {
                console.log("attacking");
                obiWan.attack(darthMaul);
            }
            if (selectedDefender == "vader") {
                console.log("attacking");
                obiWan.attack(vader);
            }
        }

        // logic for luke attacks
        else if (selectedCharacter == "luke" && luke.hitPoints > 0) {
            if (selectedDefender == "obiwan") {
                console.log("attacking");
                luke.attack(obiWan);
            }
            if (selectedDefender == "maul") {
                console.log("attacking");
                luke.attack(darthMaul);
            }
            if (selectedDefender == "vader") {
                console.log("attacking");
                luke.attack(vader);
            }
        }

        // logic for maul attacks
        else if (selectedCharacter == "maul" && darthMaul.hitPoints > 0) {
            if (selectedDefender == "obiwan") {
                console.log("attacking");
                darthMaul.attack(obiWan);
            }
            if (selectedDefender == "luke") {
                console.log("attacking");
                darthMaul.attack(luke);
            }
            if (selectedDefender == "vader") {
                console.log("attacking");
                darthMaul.attack(vader);
            }
        }

        // logic for vader attacks
        else if (selectedCharacter == "vader" && vader.hitPoints > 0) {
            if (selectedDefender == "obiwan") {
                console.log("attacking");
                vader.attack(obiWan);
            }
            if (selectedDefender == "luke") {
                console.log("attacking");
                vader.attack(luke);
            }
            if (selectedDefender == "maul") {
                console.log("attacking");
                vader.attack(darthMaul);
            }
        }
    })

    // Event handler for the reset button
    $("#reset").on("click", function () {
        // HP 
        obiWanHP = 10;
        lukeHP = 10;
        darthMaulHP = 10;
        vaderHP = 10;

        //Attack Points
        obiWanAP = 2;
        lukeAP = 2;
        darthMaulAP = 2;
        vaderAP = 2;

        //Counter Attack Points
        obiWanCP = 1;
        lukeCP = 1;
        darthMaulCP = 1;
        vaderCP = 1;

        //Variable declaration
        selectedCharacter = null;
        selectedDefender = null;
        movedToEnemies = false;
        movedToDefender = false;

        $(".characterBox").empty();
        $("#characterSelect").empty();
        $("#enemySelect").empty();
        $("#defender").empty();

        generateCharacterBox();
    })

});