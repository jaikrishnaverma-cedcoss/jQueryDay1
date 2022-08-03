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
        temp += '<li class="li">' + arr[i] + '</li>';
    }
    $(".suggestion").html(temp);
}


// task 2 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

var box2 = [{ company: "Akdsf ds", contact: "465865658", country: "india" }, { company: "Sfsfm  dvf", contact: "875484", country: "Australia" }, { company: "Mndfshj ", contact: "2541364", country: "Japan" }, { company: "Gffgh ", contact: "54664", country: "Pak" }, { company: "dfbhdb df", contact: "32535", country: "maraba" }, { company: "dfgd v", contact: "36554", country: "Lanka" }];
populatebox2();
function populatebox2() {
    let tmp = "";
    for (let i = 0; i < box2.length; i++) {
        tmp += '<tr><td>' + box2[i].company + '</td><td>' + box2[i].contact + '</td><td>' + box2[i].country + '</td></tr>'
    }
    $("#tb1").html(tmp);
}

$("#evenbtn").click(function () {
    $("tr").attr("style", "");
    $("tr:odd").attr("style", "background-color:dodgerblue ");
});
$("#oddbtn").click(function () {
    $("tr").attr("style", "");
    $("tr:even").attr("style", "background-color:dodgerblue ");
});



// task 3 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


var cat = ["Cloths", "Electronics"];
var subcat = [["T-shirt", "Trousers"], ["mobile", "tabs"]];
popProdCat();
function popProdCat() {
    $(".box3").html("");
    var temp = "";
    for (let i = 0; i < cat.length; i++) {
        temp = '<li>' + cat[i] + '<button id="add" index="' + i + '" class="button">+</button></li><ul id="' + cat[i] + '"></ul>';
        $(".box3").html($(".box3").html() + temp);
        popSubCat(i);
    }
}
function popSubCat(index) {
    let tempc = "";
    if (subcat[index].length < 1)
        return false;
    for (let ic = 0; ic < subcat[index].length; ic++) {
        tempc += '<li>' + subcat[index][ic] + '<button id="add" catindex="' + index + '" index="' + ic + '" class="subutton">+</button></li>';

    }
    $("#" + cat[index]).html(tempc);
}

$(".box3").on("click", ".button", function () {
    // debugger;
    let id = $(this).attr("index");
    let cate = prompt("Please enter new Category");
    if (cate != null) {
        id = parseInt(id);
        cat.splice(id + 1, 0, cate);
        var arr = [];
        subcat.splice(id + 1, 0, arr);
        popProdCat();
        // console.log(cat);
        // console.log(subcat);


    }
});

$(".box3").on("click", ".subutton", function () {
    let id = $(this).attr("index");
    let index = $(this).attr("catindex");
    let cate = prompt("Please enter new SubCategory");
    if (cate != null) {
        id = parseInt(id);
        subcat[index].splice(id + 1, 0, cate);
        popProdCat();
        // console.log(cat);
        // console.log(subcat);


    }
});

//  Task 4 &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



