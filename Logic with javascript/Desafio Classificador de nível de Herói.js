let nomes = ["Jefferson" , "Marlene" , 
    "Patrick" , "Nick" , "Ken" , "Ryu" , "Chunli" , "Bison"]
    let time = [
      ["Jefferson", 165, 35],
      ["Marlene"  , 150, 50],
      ["Patrick"  , 158, 75],
      ["Nick"     , 146, 54],
      ["Ken"      , 137, 65],
      ["Ryu"      , 112, 98],
      ["Chunli"   , 115, 90],
      ["Bison"    , 109, 99]
      ]
    
        let jogador = "Ryu"
        let vitorias = ""
        let derrotas = ""
        
    switch (jogador){
        case "Jefferson":
            vitorias = time [0][1]
            derrotas = time [0][2];
    break;
       case "Marlene":
            vitorias = time [1][1]
            derrotas = time [1][2];
    break;        
        case "Patrick":
            vitorias = time [2][1]
            derrotas = time [2][2];
    break;        
       case "Nick":
            vitorias = time [3][1]
            derrotas = time [3][2];
    break;
        case "Ken":
            vitorias = time [4][1]
            derrotas = time [4][2];
    break;    
        case "Ryu":
            vitorias = time [5][1]
            derrotas = time [5][2];
    break;        
        case "Chunli":
            vitorias = time [6][1]
            derrotas = time [6][2];
    break;  
        case "Bison":
            vitorias = time [7][1]
            derrotas = time [7][2];
    break;
        
    }
    let ranking = vitorias - derrotas
    let saldo = vitorias - derrotas
        //let ranking
    
    if (saldo <=10){ranking = "ferro"
     }else if (saldo >=10 && saldo <= 20){ranking = "Bronze"
      }else if (saldo >=21 && saldo <= 51){ranking = "Prata"
       }else if (saldo >51 && saldo <= 80){ranking = "Ouro"
        }else if (saldo >80 && saldo <= 90){ranking = "Diamante"
         }else if (saldo >90 && saldo <= 100){ranking = "Lendário"
          }else if (saldo >100 ){ranking = "Imortal"}
    
    console.log("NOME DO HERÓI:" + jogador + "\nVÍTORIAS:" + vitorias + "\nDERROTAS:" + derrotas + "\nSALDO:" + saldo + "\nO Herói " + jogador + " está no Nível " + ranking)