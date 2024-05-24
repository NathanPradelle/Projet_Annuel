<style>

body{
    height: 600px;
}

.container{
    margin: auto;
    margin-top: 30px;
    width: 95%;
}

table {
    width: 100%;
    height: 400px;
}

table, tr, th, td {

    border: solid;
    border-width: 1px;
    border-collapse: collapse;
}

.info_client{
    margin-bottom: 30px;
}

.liste_service{
    height: 100%;
}

</style>
<div class="container">
    <div class="info_client">
        <strong>NOM Prenom</strong> <br>
        address <br>
        Ville <br>
    </div>
    <table >
        <thead>
        <tr>
            <th style="width:80%">Service</th>
            <th>Prix</th>
        </tr>
        </thead>
        <tbody>
            <tr class="liste_service">
                <td>Service 1</td>
                <td>Prix 1</td>
            </tr>
            <tr class="liste_service">
                <td>Service 2</td>
                <td>Prix 2</td>
            </tr>
        </tbody>

      </table>
</div>
