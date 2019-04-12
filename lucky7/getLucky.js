function luckySeven() {
	var attempts = 0;
	var maxMonAttempt = 0;
	var money = 0;
	var init = document.getElementById("startBet").value;
	var maxMoney = Number(init);
	money = Number(init);
	
	function rollDice(numSides) {
		return Math.floor(Math.random() * numSides) + 1;
	}
	
	 while (money >= 1) {
		attempts++;
		if (rollDice(6) + rollDice(6) == 7) {
			money += 4;
			if (money > maxMoney) {
				maxMonAttempt = attempts;
				maxMoney = money;
			}
		} 
		else {
			money--;
		}
	}

function createTable(tableData) {
      var table = document.createElement('table');
      var row = {};
      var cell = {};
    
      tableData.forEach(function(rowData) {
        row = table.insertRow(-1);
        rowData.forEach(function(cellData) {
          cell = row.insertCell();
    			cell.textContent = cellData;
        });
      });
      document.body.appendChild(table);
    }
    
createTable([["Starting Bet", "$" + Number(init)],["Total Rolls Before Going Broke", attempts], 
["Highest Amount Won", maxMoney], ["Roll Count at Highest Amount Won", maxMonAttempt]]);
document.getElementById("btn").innerHTML="Play Again";

}