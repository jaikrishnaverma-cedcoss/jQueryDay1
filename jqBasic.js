var flower = ["rose", "lily", "marrygold", "lotus", "Jasmine", "Sunflower", "Daisy", "Tulip", "magnolia", "Lavender", "Balsam", "Flax", "Butterfly Pea", "Crossandra", "Golden Shower", "Forest Ghost", "Pot Marigold"];
$("#input1").keyup(function () {
    var li = [];
    var tmp = "";
    let inpu = $(this).val();
    inpu = inpu.toLowerCase();
    let len = inpu.length;
    for (let i = 0; i < flower.length; i++) {
        flower[i] = flower[i].toLowerCase();
        tmp = flower[i].slice(0, len);
        if (inpu == tmp) {
            li.push(flower[i]);
        }
    }
    console.log(li);
    lipopulate(li);
});
$("ul").on("click", "li", function () {
    let txt = $(this).text();
    $("#input1").val(txt);
})
function lipopulate(arr) {
    let temp = "";
    for (let i = 0; i < arr.length; i++) {
        temp += '<li>' + arr[i] + '</li>';
    }
    $(".suggestion").html(temp);
}


// task 2
var box2=[{company:"Akdsf ds",contact:"465865658",country:"india"},{company:"Sfsfm  dvf",contact:"875484",country:"Australia"},{company:"Mndfshj ",contact:"2541364",country:"Japan"},{company:"Gffgh ",contact:"54664",country:"Pak"},{company:"dfbhdb df",contact:"32535",country:"maraba"},{company:"dfgd v",contact:"36554",country:"Lanka"}];
populatebox2();
function populatebox2()
{
    let tmp="";
for(let i=0;i<box2.length;i++)
{
    tmp+='<tr><td>'+box2[i].company+'</td><td>'+box2[i].contact+'</td><td>'+box2[i].country+'</td></tr>'
}
$("#tb1").html(tmp);
}

$("#evenbtn").click(function ()
{
    $("tr").attr("style","");
    $("tr:even").attr("style","background-color:dodgerblue ");
});
$("#oddbtn").click(function ()
{
    $("tr").attr("style","");
    $("tr:odd").attr("style","background-color:dodgerblue ");
})