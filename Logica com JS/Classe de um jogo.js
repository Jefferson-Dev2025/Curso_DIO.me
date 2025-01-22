let names = ["Jordan" , "Pippen" , 
    "Rodman" , "Longley"]
    let play = [
      ["Jordan", "Ninja", "Shuriken"],
      ["Pippen"  , "Guerreiro", "Espada"],
      ["Rodman", "Mago", "Magia"],
      ["Longley", "Monge", "Artes Maciais"]
      ]
    
        let hero = "Jordan"
        let type = ""
        let power = ""
        
    switch (hero){
        case "Jordan":
            type = play [0][1]
            power = play [0][2];
    break;
       case "Pippen":
            type = play [1][1]
            power = play [1][2];
    break;
     case "Rodman":
            type = play [2][1]
            power = play [2][2];
    break;
       case "Longley":
            type = play [3][1]
            power = play [3][2];
    break;        
    }
    console.log("NOME DO HERÓI:\n" + hero)
    console.log("------------------------")
    console.log("É UM TIPO DE: \n" + type)
    console.log("-----------------------")
    console.log("E TEM O PODER: \n" + power)
        console.log("-----------------------")

    console.log("O " + type + " atacou usando " + power)
    
    