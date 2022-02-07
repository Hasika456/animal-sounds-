function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Quj9UCgOW/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+", "+random_number_g+", "+random_number_b+")";

        img1=document.getElementById('dog');
        img2=document.getElementById('cat');
        img3=document.getElementById('lion');
        img4=document.getElementById('cow');
        img5=document.getElementById('alien');

        if(results[0].label=="barking"){
            img1.src='dog1.png';
            img2.src='cat1.png';
            img3.src='lion1.png';
            img4.src='cow1.png';
            img5.src='alien1.png';
        }
        else if(results[0].label=="cow"){
            img1.src='dog2.png';
            img2.src='cat1.png';
            img3.src='lion1.png';
            img4.src='cow2.png';
            img5.src='alien1.png';
        }
        else if(results[0].label=="meow"){
            img1.src='dog2.png';
            img2.src='cat2.gif';
            img3.src='lion1.png';
            img4.src='cow1.png';
            img5.src='alien1.png';
        }
        else if(results[0].label=="roar"){
            img1.src='dog2.png';
            img2.src='cat1.png';
            img3.src='lion2.png';
            img4.src='cow1.png';
            img5.src='alien1.png';
        }

    else{
        img1.src='dog2.png';
            img2.src='cat1.png';
            img3.src='lion1.png';
            img4.src='cow1.png';
            img5.src='alien2.png';
    }
        
    }

}