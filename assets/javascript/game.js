
$(document).ready(function () {

    // HP 
    var obiWanHP = 2;
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

    // Variable declaration
    var movedToEnemies = false;
    var selectedCharacter;
    var selectedDefender;
    var movedToDefender = false;

    

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
                console.log(this.name + " has died.");
            }
        };
    }

    // function selectDefender (defender) {
    //     this.defender = defender;
    //     if (this.defender != x) {

    //     }
    // }


    // instantiate each character
    var obiWan = new Character(obiWanHP, obiWanAP, obiWanCP, obiWanName);
    var luke = new Character(lukeHP, lukeAP, lukeCP, lukeName);
    var darthMaul = new Character(darthMaulHP, darthMaulAP, darthMaulCP, darthMaulName);
    var vader = new Character(vaderHP, vaderAP, vaderCP, vaderName);


    // obiWan.attack(luke);
    // obiWan.attack(luke);


    // generate the boxes surrounding each character
    function generateCharacterBox(character) {
        for (i = 0; i < names.length; i++) {
            var newBox = $("<div>").addClass("characterBox");
            $(newBox).attr("id", names[i]);
            $(newBox).append("<p class='characterName'>" + names[i] + "</p>");
            newBox.css('background-color', 'blue');
            $("#characterSelect").append(newBox);
        }

        $(".characterBox").on("click", function() {
        
            console.log($(this));

            if (selectedCharacter == null) {
                selectedCharacter = $(this).attr("id");
                // $(".characterBox").off("click", this);
            }
            
            console.log("Selected character: " + selectedCharacter);

            if (movedToEnemies === false) {

                if ($(this).attr('id') == "obiwan") {
                    $("#enemySelect").append($("#luke"), $("#maul"), $("#vader"));
                    movedToEnemies = true;
                }
                else if ($(this).attr('id') == "luke") {
                    $("#enemySelect").append($("#obiwan"), $("#maul"), $("#vader"));
                    movedToEnemies = true;
                }
                else if ($(this).attr('id') == "maul") {
                    $("#enemySelect").append($("#obiwan"), $("#luke"), $("#vader"));
                    movedToEnemies = true;
                }
                else if ($(this).attr('id') == "vader") {
                    $("#enemySelect").append($("#obiwan"), $("#luke"), $("#maul"));
                    movedToEnemies = true;
                }

                // debugger;
                if (movedToDefender == true) {

                    if (selectedCharacter == "obiwan") {

                        if ($(this).attr('id') == "luke") {
                            $("#defender").append($("#luke"))
                            console.log("Defender: " + this);
                            // movedToDefener = false;
                        }
                        else if ($(this).attr('id') == "maul") {
                            $("#defender").append($("#maul"))
                        }
                        else if ($(this).attr('id') == "vader") {
                            $("#defender").append($("#vader"))
                        }
    
                    }

                }
                movedToDefender = true;
                
                // if ($(this).attr('id') == "obiwan") {
                //     $("#defender").append($("#obiwan"))
                // }
                // else if ($(this).attr('id') == "luke") {
                //     $("#defender").append($("#luke"))
                // }
                // else if ($(this).attr('id') == "maul") {
                //     $("#defender").append($("#maul"))
                // }
                // else if ($(this).attr('id') == "vader") {
                //     $("#defender").append($("#vader"))
                // }

            }
        })
        


        // move characters to defender 
        $("#obiwan").on("click", function() {
            if (movedToDefender == true) {

                if (selectedCharacter != "obiwan") {
                    $("#defender").append($(this));
                    selectedDefender = "obiwan";
                    console.log("Selected Defender: " + selectedDefender);
                    movedToDefender = false;

                }
            }
        })
        $("#luke").on("click", function() {
            if (movedToDefender == true) {

                if (selectedCharacter != "luke") {
                    $("#defender").append($(this));
                    selectedDefender = "luke";
                    console.log("Selected Defender: " + selectedDefender);
                    movedToDefender = false;

                }
            }
        })
        $("#maul").on("click", function() {
            if (movedToDefender == true) {

                if (selectedCharacter != "maul") {
                    $("#defender").append($(this));
                    selectedDefender = "maul";
                    console.log("Selected Defender: " + selectedDefender);
                    movedToDefender = false;

                }
            }
        })
        $("#vader").on("click", function() {
            if (movedToDefender == true) {

                if (selectedCharacter != "vader") {
                    $("#defender").append($(this));
                    selectedDefender = "vader";
                    console.log("Selected Defender: " + selectedDefender);
                    movedToDefender = false;

                }
            }
        })
        






















        // $("#luke").on("click", function() {
        //     if (movedToDefender == true) {

        //         if (selectedCharacter == "obiwan") {

        //             if ($(this).attr('id') == "luke") {
        //                 $("#defender").append($("#luke"))
        //                 selectedDefender = "luke";
        //                 console.log("Defender: " + selectedDefender);


        //             }
        //         }
        //     }
        // })
        // $("#luke").on("click", function() {
        //     if (movedToDefender == true) {

        //         if (selectedCharacter == "obiwan") {

        //             if ($(this).attr('id') == "luke") {
        //                 $("#defender").append($("#luke"))
        //                 selectedDefender = "luke";
        //                 console.log("Defender: " + selectedDefender);


        //             }
        //         }
        //     }
        // })
        // $("#luke").on("click", function() {
        //     if (movedToDefender == true) {

        //         if (selectedCharacter == "obiwan") {

        //             if ($(this).attr('id') == "luke") {
        //                 $("#defender").append($("#luke"))
        //                 selectedDefender = "luke";
        //                 console.log("Defender: " + selectedDefender);


        //             }
        //         }
        //     }
        // })
    }

    generateCharacterBox();

});