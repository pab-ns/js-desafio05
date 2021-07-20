//columnas: hora de atención, médico especialista, nombre del paciente, Rut del paciente y previsión (Fonasa o Isapre).

// Desplegar en HTML

// Utilizar documen write

// Crear un arreglo por cada listado

// Mostrar por pantalla


// Arreglo por cada listado. 1 Objeto por cada fila
let fichaRadiologias = [
    {hora: "11:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA"},
    {hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE"},
    {hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE"},
    {hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA"},
    {hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA"},
];

let fichaTraumatologias = [
    {hora: "08:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA"},
    {hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE"},
    {hora: "10:30", especialista: "MARIA ARRIAGADA", paciente: "ANA KLAPP", rut: "17879423-9", prevision: "ISAPRE"},
    {hora: "11:00", especialista: "ALEJANDRO BADILLA", paciente: "FELIPE MARDONESY", rut: "1547423-6", prevision: "ISAPRE"},
    {hora: "11:30", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARRE", rut: "16554741-K", prevision: "FONASA"},
    {hora: "12:00", especialista: "ARTURO CAVAGNARO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE"},
    {hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE"},
];

let fichaDentales = [
    {hora: "8:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE"},
    {hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE"},
    {hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA"},
    {hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA"},
    {hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA"},
    {hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "ISAPRE"},
];


// Mensaje Primera / Última atención según especialidad
let msjFicharadiologia = (`Primera atención: ${fichaRadiologias[0].paciente} - ${fichaRadiologias[0].prevision} | Última atención: ${fichaRadiologias[fichaRadiologias.length-1].paciente} - ${fichaRadiologias[fichaRadiologias.length-1].prevision}`);

let msjFichatraumatologia = (`Primera atención: ${fichaTraumatologias[0].paciente} - ${fichaTraumatologias[0].prevision} | Última atención: ${fichaTraumatologias[fichaTraumatologias.length-1].paciente} - ${fichaTraumatologias[fichaTraumatologias.length-1].prevision}`);

let msjFichadental = (`Primera atención: ${fichaDentales[0].paciente} - ${fichaDentales[0].prevision} | Última atención: ${fichaDentales[fichaDentales.length-1].paciente} - ${fichaDentales[fichaDentales.length-1].prevision}`);


// Imprimir Msj por cada especialidad
document.write(`
<strong>Radiología</strong> <br>
${msjFicharadiologia}
<br><br>
<strong>Traumatología</strong><br>
${msjFichatraumatologia}
<br><br>
<strong>Dental</strong><br>
${msjFichadental}
`)


// TABLA - Cabeceras de las tablas: Hora, Especialista, Paciente, Rut, Prevision

// TABLA RADIOLOGIA
let tablaRadiologia = 
`<tr>
<th>Hora</th>
<th>Especialista</th>
<th>Paciente</th>
<th>Rut</th>
<th>Prevision</th>
</tr>`
;

for (let i = 0; i < fichaRadiologias.length; i++){
    tablaRadiologia += `<tr>
            <td> ${fichaRadiologias[i].hora} </td>
            <td> ${fichaRadiologias[i].especialista} </td>
            <td> ${fichaRadiologias[i].paciente} </td>
            <td> ${fichaRadiologias[i].rut} </td>
            <td> ${fichaRadiologias[i].prevision} </td>
            `
}

document.getElementById("tablaradiologia").innerHTML = tablaRadiologia;




// TABLA TRAUMATOLOGIA
let tablaTraumatologia = 
`<tr>
<th>Hora</th>
<th>Especialista</th>
<th>Paciente</th>
<th>Rut</th>
<th>Prevision</th>
</tr>`
;

for (let i = 0; i < fichaTraumatologias.length; i++){
    tablaTraumatologia += `<tr>
            <td> ${fichaTraumatologias[i].hora} </td>
            <td> ${fichaTraumatologias[i].especialista} </td>
            <td> ${fichaTraumatologias[i].paciente} </td>
            <td> ${fichaTraumatologias[i].rut} </td>
            <td> ${fichaTraumatologias[i].prevision} </td>
            `
}

document.getElementById("tablatraumatologia").innerHTML = tablaTraumatologia;




// TABLA DENTAL
let tablaDental = 
`<tr>
<th>Hora</th>
<th>Especialista</th>
<th>Paciente</th>
<th>Rut</th>
<th>Prevision</th>
</tr>`
;

for (let i = 0; i < fichaDentales.length; i++){
    tablaDental += `<tr>
            <td> ${fichaDentales[i].hora} </td>
            <td> ${fichaDentales[i].especialista} </td>
            <td> ${fichaDentales[i].paciente} </td>
            <td> ${fichaDentales[i].rut} </td>
            <td> ${fichaDentales[i].prevision} </td>
            `
}

document.getElementById("tabladental").innerHTML = tablaDental;