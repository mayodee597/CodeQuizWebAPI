
const title = document.getElementById('titleScreen');
        const timer = document.getElementById('timer');
        const failed = document.getElementById('failed');
        

        const q1 = document.getElementById('1');
        const q2 = document.getElementById('2');
        const q3 = document.getElementById('3');
        const q4 = document.getElementById('4');
        const q5 = document.getElementById('5');
        const q6 = document.getElementById('6');
        const q7 = document.getElementById('7');
        const q8 = document.getElementById('8');
        const q9 = document.getElementById('9');
        const q10 = document.getElementById('10');
        var st; 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function startTest(){
        timer.value = 30;
        document.getElementById('success').style.display = 'none';


        title.style.display = 'none';
        timer.style.display = 'block';

        q1.style.display = 'block';

        st = setInterval(myTimer, 1000);

        function myTimer() {
            var currentTime = timer.value;
            
            if(currentTime <= 0){
                clearInterval(st);      
                if(document.getElementById('success').style.display == 'none' && document.getElementById('titleScreen').style.display == 'none'){
                    failed.style.display = 'block';
                    timer.style.display = 'none';
                    clearQuestions();
                    setTimeout(function(){ 
                        failed.style.display = 'none';
                        title.style.display = 'block'; 
                        
                        clearQuestions();
                    }, 2000);
                }  
            }else{
                timer.value = currentTime - 1;
            }
        }

       
    }// end startTest();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    function inc(currentQ){
        var currentTime = timer.value;
            
       
        if(currentTime <= 0){
                clearInterval(st);
                clearQuestions();

                

                failed.style.display = 'block';
                setTimeout(function(){ 
                    failed.style.display = 'none';
                    title.style.display = 'block'; 
                    timer.style.display = 'none';
                    clearQuestions();
                }, 2000);
    }else{
        if(timer.value >= 2){
            timer.value = timer.value - 2;
        }else{
            timer.value = 0;
        }
        
        
    }
    if(currentTime >= 1){
    document.getElementById(currentQ).style.border = '2px solid red';
    document.getElementById(currentQ).style.background = '#440000';
        setTimeout(function(){ 
            document.getElementById(currentQ).style.border = '2px solid white';
            document.getElementById(currentQ).style.background = '#222';
            document.getElementById(currentQ).style.display = 'none';
            var nextQ = currentQ + 1;
            if(nextQ == 11){
                success();
                clearQuestions();
                clearInterval(st);
            }else{
                document.getElementById(nextQ).style.display = 'block'; 
            }
            
            
            
            
        }, 250);
    }else{
        clearQuestions();
        clearInterval(st);
        failed.style.display = 'block';

    }

}// end inc();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function cor(currentQ){
  
    document.getElementById(currentQ).style.border = '2px solid green';
    document.getElementById(currentQ).style.background = '#004400';
        
    
        setTimeout(function(){ 
            document.getElementById(currentQ).style.border = '2px solid white';
            document.getElementById(currentQ).style.background = '#222';
            document.getElementById(currentQ).style.display = 'none';
            var nextQ = currentQ + 1;
            if(timer.value >= 0){
                if(nextQ == 11){
                    success();
                }else{
                    document.getElementById(nextQ).style.display = 'block'; 
                }
                
            }
            
        }, 250);
    

}// end inc();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function clearQuestions(){
    q1.style.display = 'none';
                q2.style.display = 'none';
                q3.style.display = 'none';
                q4.style.display = 'none';
                q5.style.display = 'none';
                q6.style.display = 'none';
                q7.style.display = 'none';
                q8.style.display = 'none';
                q9.style.display = 'none';
                q10.style.display = 'none';
}// end of clearQuestions();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function success(){
    document.getElementById('success').style.display = 'block';
    document.getElementById('score').value = timer.value;
    timer.style.display = 'none';
    clearInterval(st);
    clearQuestions();
    
    
   
                    
                
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function saveTime(){
                    
     
                    title.style.display = 'block'; 
                    timer.style.display = 'none';
                    document.getElementById('success').style.display = 'none';
                    clearQuestions();
                    clearInterval(st); 

                    var score = document.getElementById('score').value;
                    var init = document.getElementById('initials').value;
                    console.log(init + score);
                    document.getElementById('highscores').innerHTML += init + ' ' + score + '<br>';
                    
            
                   
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    function loadScores(){

        //alert('load scores');
    

}   
