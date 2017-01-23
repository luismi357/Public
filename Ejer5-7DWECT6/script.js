function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;";
}

onload = function ()
{
    if (getCookie("nombre") === "")
    {
        var nombre = prompt("Bienvenido, introduce tu nombre");
        setCookie("nombre", nombre, 90);
    }
    name = getCookie("nombre");
    document.body.innerHTML = "Bienvenido " + name;
    if (getCookie("hora") !== "")
    {
        var dat = new Date();
        dat.setTime(getCookie("hora"));
        var fecha = dat.getDate() + "/" + dat.getMonth() + "/" + dat.getFullYear() + " " + dat.getHours() + ":" + dat.getMinutes() + ":" + dat.getSeconds();
        document.body.innerHTML += "<br>Ultimo acceso " + fecha;
    }
    var d = new Date();
    setCookie("hora", d.getTime(), 90);
}