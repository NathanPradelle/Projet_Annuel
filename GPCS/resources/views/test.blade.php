<h1>Changement tarrification : </h1>
<form methode='POST' action='/service/provider/price'>
<input type="hidden" id="id" name="id" value="1" />
<label for="start">date changement de prix:</label>
<input type="date" id="start" name="start" /> <br>
<label for="PrixRegulier">prix régulier:</label>
<input type="number" id="PrixRegulier" name="PrixRegulier" min="10" max="100" /> <br>
<label for="PrixSemaine">prix semaine:</label>
<input type="number" id="PrixSemaine" name="PrixSemaine" min="10" max="100" /> <br>
<label for="PrixWeekend">prix weekend:</label>
<input type="number" id="PrixWeekend" name="PrixWeekend" min="10" max="100" /> <br>
<label for="PrixFerie">prix jour férié:</label>
<input type="number" id="PrixFerie" name="PrixFerie" min="10" max="100" /> <br>
<input type="submit" value="Send Request" />
</form>