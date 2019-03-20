
$(document).ready(function () {

    //=============== Variable declaration ===============//

    // HP 
    var obiWanHP = 2;
    var lukeHP = 10;
    var darthMaulHP = 10;
    var vaderHP = 10;
    // var displayHealth = [obiWanHP, lukeHP, darthMaulHP, vaderHP];

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

    var counter = 0;


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
                $("#textResults1").text(this.name + " has died. Please try again!");
                $("#textResults2").empty();
            }
        };
    }
    

    function updateEnemySelectCharacteristics(firstPick) {
        this.firstPick = firstPick;
        if (firstPick.attr('id') == "obiwan") {
            $("#enemySelect").append($("#luke"), $("#maul"), $("#vader"));
            $("#luke").css({ 'border-color': 'black', 'background-color': 'red' });
            $("#maul").css({ 'border-color': 'black', 'background-color': 'red' });
            $("#vader").css({ 'border-color': 'black', 'background-color': 'red' });
            movedToEnemies = true;
        }
        else if (firstPick.attr('id') == "luke") {
            $("#enemySelect").append($("#obiwan"), $("#maul"), $("#vader"));
            $("#obiwan").css({ 'border-color': 'black', 'background-color': 'red' });
            $("#maul").css({ 'border-color': 'black', 'background-color': 'red' });
            $("#vader").css({ 'border-color': 'black', 'background-color': 'red' });
            movedToEnemies = true;
        }
        else if (firstPick.attr('id') == "maul") {
            $("#enemySelect").append($("#obiwan"), $("#luke"), $("#vader"));
            $("#obiwan").css({ 'border-color': 'black', 'background-color': 'red' });
            $("#luke").css({ 'border-color': 'black', 'background-color': 'red' });
            $("#vader").css({ 'border-color': 'black', 'background-color': 'red' });
            movedToEnemies = true;
        }
        else if (firstPick.attr('id') == "vader") {
            $("#enemySelect").append($("#obiwan"), $("#luke"), $("#maul"));
            $("#obiwan").css({ 'border-color': 'black', 'background-color': 'red' });
            $("#luke").css({ 'border-color': 'black', 'background-color': 'red' });
            $("#maul").css({ 'border-color': 'black', 'background-color': 'red' });
            movedToEnemies = true;
        }
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
    var character = [obiWan, luke, darthMaul, vader];


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
            var newTextContainer = $("<div>").addClass("textContainer");
            $(newTextContainer).appendTo(newBox);
            $(newTextContainer).append("<p id='" + names[i] + "HP'>" + character[i].hitPoints + "</p>");
            // var healthText = document.getElementById(names[i] + "HP");
            // healthText.textContent = displayHealth;
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
                updateEnemySelectCharacteristics($(this));
            }

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
    // var displayHealth = [obiWan.hitPoints, luke.hitPoints, darthMaul.hitPoints, vader.hitPoints];

    

    // Event handler for the attack button
    $("#attack").on("click", function () {

        // logic for obiwan attacks
        if (selectedCharacter == "obiwan" && obiWan.hitPoints > 0) {
            if (movedToDefender == false) {
                $("#textResults1").text("No enemy selected.");
            }
            else {
                if (selectedDefender == "luke" && luke.hitPoints > 0) {
                    // $(".textResultsContainer").empty();
                    $("#textResults1").text("You attacked " + luke.name + " for " + obiWan.attackPoints + " damage.");
                    $("#textResults2").text(luke.name + " attacked you back for " + luke.counterPoints + ".");
                    obiWan.attack(luke);
                    $("#lukeHP").text(luke.hitPoints);
                    $("#obiwanHP").text(obiWan.hitPoints);
                    if (luke.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + luke.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
                if (selectedDefender == "maul" && darthMaul.hitPoints > 0) {
                    // $(".textResultsContainer").empty();
                    $("#textResults1").text("You attacked " + darthMaul.name + " for " + obiWan.attackPoints + " damage.");
                    $("#textResults2").text(darthMaul.name + " attacked you back for " + darthMaul.counterPoints + ".");
                    obiWan.attack(darthMaul);
                    $("#maulHP").text(darthMaul.hitPoints);
                    $("#obiwanHP").text(obiWan.hitPoints);
                    if (darthMaul.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + darthMaul.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
                if (selectedDefender == "vader" && vader.hitPoints > 0) {
                    $("#textResults1").text("You attacked " + vader.name + " for " + obiWan.attackPoints + " damage.");
                    $("#textResults2").text(vader.name + " attacked you back for " + vader.counterPoints + ".");
                    obiWan.attack(vader);
                    $("#vaderHP").text(vader.hitPoints);
                    $("#obiwanHP").text(obiWan.hitPoints);
                    if (vader.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + vader.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
            }
        }

        // logic for luke attacks
        else if (selectedCharacter == "luke" && luke.hitPoints > 0) {
            if (movedToDefender == false) {
                $("#textResults1").text("No enemy selected.");
            }
            else {
                if (selectedDefender == "obiwan" && obiWan.hitPoints > 0) {
                    $("#textResults1").text("You attacked " + obiWan.name + " for " + luke.attackPoints + " damage.");
                    $("#textResults2").text(obiWan.name + " attacked you back for " + obiWan.counterPoints + ".");
                    luke.attack(obiWan);
                    $("#obiwanHP").text(obiWan.hitPoints);
                    $("#lukeHP").text(luke.hitPoints);
                    if (obiWan.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + obiWan.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
                if (selectedDefender == "maul" && darthMaul.hitPoints > 0) {
                    $("#textResults1").text("You attacked " + darthMaul.name + " for " + luke.attackPoints + " damage.");
                    $("#textResults2").text(darthMaul.name + " attacked you back for " + darthMaul.counterPoints + ".");
                    luke.attack(darthMaul);
                    $("#maulHP").text(darthMaul.hitPoints);
                    $("#lukeHP").text(luke.hitPoints);
                    if (darthMaul.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + darthMaul.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
                if (selectedDefender == "vader" && vader.hitPoints > 0) {
                    $("#textResults1").text("You attacked " + vader.name + " for " + luke.attackPoints + " damage.");
                    $("#textResults2").text(vader.name + " attacked you back for " + vader.counterPoints + ".");
                    luke.attack(vader);
                    $("#vaderHP").text(vader.hitPoints);
                    $("#lukeHP").text(luke.hitPoints);
                    if (vader.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + vader.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
            }
        }

        // logic for maul attacks
        else if (selectedCharacter == "maul" && darthMaul.hitPoints > 0) {
            if (movedToDefender == false) {
                $("#textResults1").text("No enemy selected.");
            }
            else {
                if (selectedDefender == "obiwan" && obiWan.hitPoints > 0) {
                    $("#textResults1").text("You attacked " + obiWan.name + " for " + darthMaul.attackPoints + " damage.");
                    $("#textResults2").text(obiWan.name + " attacked you back for " + obiWan.counterPoints + ".");
                    darthMaul.attack(obiWan);
                    $("#obiwanHP").text(obiWan.hitPoints);
                    $("#maulHP").text(darthMaul.hitPoints);
                    if (obiWan.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + obiWan.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
                if (selectedDefender == "luke" && luke.hitPoints > 0) {
                    $("#textResults1").text("You attacked " + luke.name + " for " + darthMaul.attackPoints + " damage.");
                    $("#textResults2").text(luke.name + " attacked you back for " + luke.counterPoints + ".");
                    darthMaul.attack(luke);
                    $("#lukeHP").text(luke.hitPoints);
                    $("#maulHP").text(darthMaul.hitPoints);
                    if (luke.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + luke.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
                if (selectedDefender == "vader" && vader.hitPoints > 0) {
                    $("#textResults1").text("You attacked " + vader.name + " for " + darthMaul.attackPoints + " damage.");
                    $("#textResults2").text(vader.name + " attacked you back for " + vader.counterPoints + ".");
                    darthMaul.attack(vader);
                    $("#vaderHP").text(vader.hitPoints);
                    $("#maulHP").text(darthMaul.hitPoints);
                    if (vader.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + vader.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
            }
        }

        // logic for vader attacks
        else if (selectedCharacter == "vader" && vader.hitPoints > 0) {
            if (movedToDefender == false) {
                $("#textResults1").text("No enemy selected.");
            }
            else {
                if (selectedDefender == "obiwan" && obiWan.hitPoints > 0) {
                    $("#textResults1").text("You attacked " + obiWan.name + " for " + vader.attackPoints + " damage.");
                    $("#textResults2").text(obiWan.name + " attacked you back for " + obiWan.counterPoints + ".");
                    vader.attack(obiWan);
                    $("#obiwanHP").text(obiWan.hitPoints);
                    $("#vaderHP").text(vader.hitPoints);
                    if (obiWan.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + obiWan.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
                if (selectedDefender == "luke" && luke.hitPoints > 0) {
                    $("#textResults1").text("You attacked " + luke.name + " for " + vader.attackPoints + " damage.");
                    $("#textResults2").text(luke.name + " attacked you back for " + luke.counterPoints + ".");
                    vader.attack(luke);
                    $("#lukeHP").text(luke.hitPoints);
                    $("#vaderHP").text(vader.hitPoints);
                    if (luke.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + luke.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
                if (selectedDefender == "maul" && darthMaul.hitPoints > 0) {
                    $("#textResults1").text("You attacked " + darthMaul.name + " for " + vader.attackPoints + " damage.");
                    $("#textResults2").text(darthMaul.name + " attacked you back for " + darthMaul.counterPoints + ".");
                    vader.attack(darthMaul);
                    $("#maulHP").text(darthMaul.hitPoints);
                    $("#vaderHP").text(vader.hitPoints);
                    if (darthMaul.hitPoints < 1) {
                        counter++;
                        $("#defender").empty();
                        $("#textResults1").text("You have defeated " + darthMaul.name);
                        $("#textResults2").empty();
                        movedToDefender = false;
                    }
                }
            }
        }

        if (counter == 3) {
            $("#textResults1").text("You won! Please press 'Reset' to play again!");
            $("#textResults2").empty();
        }
    })

    // Event handler for the reset button
    $("#reset").on("click", function () {
        location.reload();
        generateCharacterBox();
    })

});