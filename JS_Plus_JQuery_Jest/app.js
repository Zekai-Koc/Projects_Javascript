// $("p").hide();


// ---------- syntax and selectors ------------ //
// ---------- 1 ------------ //
// how to find an element on the page.
// first, lets create 3 different paragraphs on our page, with id, class and without any attribute.

// $ is the primary sign for accesing or addressing the elements on the page. and we are using css selectors with $ sign.


// for accessing all the paragraphs on the page:
// document.querySelectorAll("p").forEach( (item) => item.hidden = true );
// $("p").hide();


// for accessing an element with its id:
// document.querySelector("#p1").hidden = true;
// $("#p1").hide();


// for accessing an element with its id:
// document.querySelector(".paraf").hidden = true;
// $(".paraf").hide();



// ---------- 2 ------------ //
// let's add some unordered lists to our html page then find the second list's elements.

// $(".list li").hide();

// for finding all the elements on the page:
// $("*").hide();
// let's find the paragraph(s) which have a class named paraf:
// $("p.paraf").hide();
// for finding the first paragraph:
// $("p:first").hide();
// first ul's first element
// $("ul li:first").hide();
// all ul's first element
// $("ul li:first-child").hide();

// find elements which have href attribute.
// $("[href]").hide();
// find links, which target attribute is blank:
// $("a[target='_blank']").hide();
// find all lis and hide the evenths.
// $("li:even").hide();
// $("li:odd").hide();



// ---------- events ------------ //

// $("#p1").click(function() {
//     alert("p1 element has been clicked!");
// });


// $("#p1").on("click", function() {
//     $("#p1").hide();
// });
// however, instead of using "$("#p1")" we can use "this" keyword.
// $("#p1").on("click", function() {
//     $(this).hide();
// });


// find all p elements on the page and add click event for all of them:
// $("p").on("click", function() {
//     $(this).hide();
// });


// for attaching multiple event handlers to a <p> element:
// $("#p1").on({
//     mouseenter: function(){
//         $(this).css("background-color", "lightgray");
//       },
//       mouseleave: function(){
//         $(this).css("background-color", "blue");
//       },
//       click: function(){
//         $(this).css("background-color", "yellow");
//       }
// });


// $("li").dblclick( function() {
//     $(this).fadeOut();
// });


// $("li").on("dblclick mouseleave", function() {
//     $(this).fadeOut();
// });



// ---------- OnReady ------------ //
// önce head kısmında bir script tagı açıp: alert(document.getElementById("p1").innerHTML); komutunu yazıyoruz ve hatayı görüyoruz.
// çözüm için yukarıdaki satırı body sonuna bir script tagı ekleyerek içine yazıyoruz.
// ardından body elementine "onload" eventi bağlıyoruz ve aşağıdaki fonksiyonu ekliyoruz. bu fonksiyonu sayfa içinde istediğimiz yere yazabiliriz artık.

// function pageOnLoad() {
//     alert(document.getElementById("p1").innerHTML);
// }

// // with jQuery, there are two methods:
// // 1. old style:
// $(document).ready( function() {
//     alert(document.getElementById("p1").innerHTML);
// });

// 2. new style:
// $(function() {
//     // alert(document.getElementById("p1").innerHTML);

//     $("#p1").hide();

//     $("p").on("click", function() {
//         $(this).hide();
//     });

// })



// ---------- Effects ------------ //
// ---------- 1 ------------ //

// $(function() {

//     // $("#hide").on("click", function() {
//     //     $("p").hide();
//     // });

//     // $("#show").on("click", function() {
//     //     $("p").show();
//     // });


//     // we can add animation effect by giving milisecs.
//     $("#hide").on("click", function() {
//         $("p").hide(3000);
//     });

//     $("#show").on("click", function() {
//         $("p").show(3000);
//     });


// });


// ---------- 2 ------------ //

// $(function() {

//     // $("#hide").on("click", function() {
//     //     $("p").hide();
//     // });

//     // $("#show").on("click", function() {
//     //     $("p").show();
//     // });


//     // we can add animation effect by giving milisecs.
//     $("#hide").on("click", function() {
//         $("p").hide(3000);
//     });

//     $("#show").on("click", function() {
//         $("p").show(3000);
//     });

//     $("#toggle").on("click", function() {
//         $("p").toggle(2000);
//     });

// });


// // ---------- 3 ------------ //

// $(function() {

//     $("#fadein").on("click", function() {
//         $("p").fadeIn(1000);
//     });

//     $("#fadeout").on("click", function() {
//         $("p").fadeOut(1000);
//     });

//     $("#fadetoggle").on("click", function() {
//         $("p").fadeToggle(1000);
//     });

// });



// // ---------- 4 ------------ //

// $(function() {

//     $("#slideup").on("click", function() {
//         $("p").slideUp(1000);
//     });

//     $("#slidedown").on("click", function() {
//         $("p").slideDown(1000);
//     });

//     $("#slidetoggle").on("click", function() {
//         $("p").slideToggle(1000);
//     });

// });



// ---------- 5 animate ------------ //

// $(function () {

//     $("#animate").on("click", function () {
//         // we can add animate effects in json format like in css:
//         // $("p").animate({  
//         //     "opacity": "0",
//         //     "width": "0",
//         //     "height": "0"
//         // });


//         // // we can add duration for our animation effects.
//         // $("p").animate({
//         //     "opacity": "0",
//         //     "width": "0",
//         //     "height": "0"
//         // }, 5000);


//         // we can add functions after our animation effects.
//         $("p").animate({
//             "opacity": "0",
//             "width": "0",
//             "height": "0"
//         }, 2000, function() {
//             alert("animation has finished.")
//         });

//     });
// });






// // ---------- 6 ------------ //
// // you can stop the current animation.
// $(function() {

//     $("#hide").on("click", function() {
//         $("p").hide(5000);
//     });

//     $("#show").on("click", function() {
//         $("p").show(5000);
//     });

//     $("#toggle").on("click", function() {
//         $("p").toggle(5000);
//     });

//     $("#stop").on("click", function() {
//         $("p").stop();
//     });

// });




// // ---------- Get/Set methods ------------ //
// // we can get or set the values of our elements.

// // ---------- 1 Get Methods ------------ //

// $("#btnGetHtml").on("click", function() {
//     let val = $("p").html();
//     console.log(val);
// });


// $("#btnGetText").on("click", function() {
//     let val = $("p").text();
//     console.log(val);
// });


// $("#btnGetValue").on("click", function() {
//     // let val = $("input").val();
//     // console.log(val);

//     // we can use a different selector: find the input element, which has text type:
//     let val = $("input[type='text']").val();
//     console.log(val);

// });



// // ---------- 2 Set Methods ------------ //

// $("#btnGetHtml").on("click", function() {
//     let val = $("p").html();
//     console.log(val);
// });


// $("#btnGetText").on("click", function() {
//     let val = $("p").text();
//     console.log(val);
// });


// $("#btnGetValue").on("click", function() {
//     // let val = $("input").val();
//     // console.log(val);

//     // we can use a different selector: find the input element, which has text type:
//     let val = $("input[type='text']").val();
//     console.log(val);
// });



// // set methods:
// $("#btnSetHtml").on("click", function() {
//     $("p").html("<b>Michael</b> <mark>Adams</mark>");
// });

// $("#btnSetText").on("click", function() {
//     $("p").text("Michael Adams - html tags <b>will</b> be discarded.");
// });


// $("#btnSetValue").on("click", function() {
//     // let val = $("input").val();

//     let val = $("input[type='text']").val("Michael Adams");
// });



// $("#btnGetCity").on("click", function() {
//     let val = $("#cities").val();
//     console.log(val);
// });


// $("#btnGetGender").on("click", function() {
//     let val = $("input[name='gender']:checked").val();
//     console.log(val);
// });



// // ---------- Add/Remove Methods ------------ //
// // now, let's add some new elements to our page. (html file.)


// // ------------------ Append/Prepend ------------------ //

// // we now add eventlisteners to our buttons.
// $("#btnAppend").on("click", function () {
//     // for creating an element in jQuery you can directly write inside of the paranthesis.
//     var li = $("<li></li>");
//     // if you like, you can add properties inside.
//     // var li = $("<li class="item" id="jjj"><li/>");
//     li.text($("#todoText").val());

//     console.log(li);

//     $("#todoList").append(li);
// });


// $("#btnPrepend").on("click", function () {
//     var li = $("<li></li>");
//     li.text($("#todoText").val());
//     $("#todoList").prepend(li);
// });


// // ------------------ Before/After ------------------ //


// $("#btnAddBefore").on("click", function () {
//     var li = $("<li></li>");
//     li.text($("#todoText").val());
//     $("#todoList #item2").before(li); // here we select a specific item.
// });

// $("#btnAddAfter").on("click", function () {
//     var li = $("<li></li>");
//     li.text($("#todoText").val());
//     $("#todoList #item2").after(li); // here we select a specific item.
// });



// // ------------------ Class&CSS Addings ------------------ //

// $("#btnAddClass").on("click", function() {
//     $("p").addClass("green red");
// });

// $("#btnRemoveClass").on("click", function() {
//     $("p").removeClass("green red");
// });

// $("#btnToggleClass").on("click", function() {
//     $("p").toggleClass("green red");
// });

// $("#btnCss").on("click", function() {
//     // tek özellik ekleme.
//     // $("p").css("color", "green");

//     // multiple attribute...
//     $("p").css({
//         "color": "green",
//         "fontStyle": "italic"
//     });
// });



// // ------------------ Traversing ------------------ //

// // here, we can access all the child of our list.
// var ulChildren = $("#options").children();
// // we can check what we have.
// console.log(ulChildren);

// // now, we will iterate through each element and ad "list-item" class one by one.
// ulChildren.each(function (i, e) {
//     $(e).addClass("list-item");
// });

// // here, we will catch "li" elements of "#options" id and ad click event for the first one.
// $("#options li").eq(0).on("click", function() {
//     $(this).toggleClass("bold");
// });

// $("#options li").eq(1).on("click", function() {
//     $(this).toggleClass("italic");
// });

// $("#options li").eq(2).on("click", function() {
//     $(this).toggleClass("underline");
// });

// $("#options li").eq(3).on("click", function() {
//     $(this).toggleClass("color");
// });

// $("#options li").eq(4).on("click", function() {
//     $(this).toggleClass("bg");
// });

// // find element with id "options", then go to its parent and find the first button on the parent element (in our case, body) then add click event...
// $("#options").parent().find("button:first").on("click", function() {
//     $("#options").find("li").attr("class", "list-item");
// });

// let elementAfterHr = $("hr").next();
// console.log(elementAfterHr);

// let allElementsAfterHr = $("hr").nextAll();
// console.log(allElementsAfterHr);

// let findBeforeBtn = $("hr").prev();
// console.log(findBeforeBtn);

// let findAllBeforeBtn = $("hr").prevAll();
// console.log(findAllBeforeBtn);



// // ------------------ Ajax Calls ------------------ //


let dataLink = "https://jsonplaceholder.typicode.com/posts";

// let ul = $("#list");

// $("#btnLoadData").on("click", function () {

//     $.ajax({
//         method: "GET",
//         url: dataLink
//     }).done(function (data) {
//         console.log(data);

//         for (let index = 0; index < data.length; index++) {
//             const elementLi = $("<li></li>");
//             elementLi.text(data[index].title);
//             ul.append(elementLi);
//         }

//     }).fail(function () {
//         console.log("hata");
//     })

// });


// now, the last thing that i will show you is: 
// what will be the output if i execute the following code?

console.log("before ajax call.");

$.ajax({
    method: "GET",
    url: dataLink,
    async: false
}).done(function (data) {
    console.log(data);
}).fail(function () {
    console.log("hata");
});

console.log("after ajax call.")








