
let url_string =document.documentURI;
let url = new URL(url_string);
let title = url.searchParams.get("title");
let maintitle = url.searchParams.get("maintitle");
let titlestring=titles[title]

$('#title').html(titlestring)
html_content=""
      
let items=quizes[title] 
var i=0;
var score=0;
set_content(i)
      // for (var i = 0; i < items.length; i++) {
// 	if(i%2==0){divclass="greenDiv"} else {divclass="skyDiv"}
      //     html_content+=`<p class="`+divclass+`">`+items[i]['Que']+`
// 		<br>
// 		<strong>
// 			<em class="ans" id="que`+i+`" >Ans: `+items[i]['Ans']+`</em>
// 		</strong>
// 		<i class="fa fa-eye view-item" data-id='que`+i+`'>Answer</i>
// 	</p>`
// 	}

function set_content(i){
html_content=`<div id="sub"><div class="skyDiv" id="skyDiv"><p id="que">`+items[i]['Que']+`
    </p>
    <p id="ans">
        <form id="form">
        <ul style="list-style-type: none;">
            <li id="ansA">
                <label>
                    <input type="radio" name="item" value="A">
                    `+items[i]['A']+`
                </label>
            </li>
            <li id="ansB">
                <label>
                    <input type="radio" name="item" value="B">
                     `+items[i]['B']+`
                </label>
            </li>
            <li id="ansC">
                <label>
                    <input type="radio" name="item" value="C">
                     `+items[i]['C']+`
                </label>
            </li>
            <li id="ansD">
                <label>
                    <input type="radio" name="item" value="D">
                     `+items[i]['D']+`
                </label>
            </li>
        </ul>
        <div id="buttondiv">
        <button type="button" id="submitans">Submit</button>
        </div>
    </form>
    </p>
  </div></div>`
      
      $('.ListNav').html(html_content);

      if (!("D" in items[i])){
        var element = document.getElementById("ansD");
        if (element) {
            element.remove();
        }
      }

};

/* <p id="que">`+items[i]['Que']+`
        </p> */

function set_score(){
    html_content=`<div id="sub"><div class="skyDiv" style="padding:0%" id="skyDiv">
        <p id="que1" style="font-size:25px">Total Questions: `+items.length+`</p>
        <p id="que2" style="font-size:25px">Correct Answers: `+score+`</p>
        <p id="que3" style="font-size:25px">Score: `+score+`</p>
      </div></div>`
          
          $('.ListNav').html(html_content);
    
          
    
    };


function nextpage()
{
$("#prev").show()
i=i+1;
if(i==items.length){
  $("#next").hide()
}
set_content(i)
    const container = document.getElementById('skyDiv');
    container.style.overflowX = 'auto';
    container.style.wordWrap = 'break-word';
    container.style.wordBreak = 'break-all';

};

function prevpage()
{
$("#next").show()
  i=i-1;
  if(i==0){
    $("#prev").hide()
  }
          set_content(i)
  const container = document.getElementById('skyDiv');
  container.style.overflowX = 'auto';
  container.style.wordWrap = 'break-word';
  container.style.wordBreak = 'break-all';
  const container3 = document.getElementById('skyDiv');
  container3.style.whiteSpace = 'pre-wrap';

  const container2 = document.getElementById(dataid);
  container2.style.wordWrap = 'break-word';
  container2.style.wordBreak = 'break-all';
//   container2.style.whiteSpace = 'pre-wrap';
  container2.style.overflowX = 'auto';
};


$(document).on("click", "#logoshome", function () {
  
  window.location ="logoshome2.html"
  
      }); 

      $(document).on("click", "#submitans", function () {

        if($(this).text()=="Submit"){
            var radios = document.getElementsByName('item');
            var selectedValue;
            
            // Loop through the radio buttons to find the selected one
            for (var j = 0; j < radios.length; j++) {
                if (radios[j].checked) {
                    selectedValue = radios[j].value;
                    break;
                }
            }
            if(selectedValue==null){
                return;
            }
            if (selectedValue!=items[i]['Ans']){
                $('#ans'+selectedValue).addClass('wrongans')
                    
            }else{
                score=score+1;
            }
            $('#ans'+items[i]['Ans']).addClass('rightans')

            var radios = document.getElementsByName('item');
            for (var j = 0; j < radios.length; j++) {
                radios[j].disabled = true;
            }


            $("#submitans").text("Next")

        }

        else{
            i=i+1
            if (i==items.length){
                set_score()
            }else{
                set_content(i)
            }
            
            }
            }); 

// $(document).on("click", ".view-item", function () {
//   let dataid=$(this).data('id')
//           $('.view-item').show()
//           $(this).hide()
//           $(".ans").hide()
//           $('#'+dataid).show()
//   const container = document.getElementById(dataid);
//   container.style.wordWrap = 'break-word';
//   container.style.wordBreak = 'break-all';
//   container.style.whiteSpace = 'pre-wrap';
//   container.style.overflowX = 'auto';
  
//       });


// $(document).on("click", "#next", function () {
//   nextpage();

//       });

// $(document).on("click", "#prev", function () {
//   prevpage();
  
  
//       });

      // var startX, startY, endX, endY;

      // $('#quizdiv').on('touchstart', function(event) {
      //     var touch = event.originalEvent.touches[0];
      //     startX = touch.pageX;
      //     startY = touch.pageY;
      // });

      // $('#quizdiv').on('touchmove', function(event) {
      //     var touch = event.originalEvent.touches[0];
      //     endX = touch.pageX;
      //     endY = touch.pageY;
      // });

      // $('#quizdiv').on('touchend', function(event) {
      //     var deltaX = endX - startX;
      //     var deltaY = endY - startY;

      //     if (Math.abs(deltaX) > Math.abs(deltaY)) {
      //         if (deltaX > 50) { // Threshold for swipe right
      //           if(i==0){
      //             $("#prev").hide()
      //           }
      //           else{
      //             prevpage();
      //           }
                  
      //             // Add your code to handle swipe right action here
      //         } else if (deltaX < -50) { // Threshold for swipe left
                
      //           if(i==items.length){
      //             $("#next").hide()
      //           }
      //           else{
      //             nextpage();
      //           }
      //             // Add your code to handle swipe left action here
      //         }
      //     }
      // });
