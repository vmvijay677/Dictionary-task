async function getdata(){
    let word = document.getElementById("input").value;
    try {
        let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let result = await res.json();
        console.log(result);
        const myjson = JSON.stringify(result);
        localStorage.setItem("testJSON",myjson);

        let text  = localStorage.getItem("testJSON");
        let obj = JSON.parse(text);
        for(var i in obj){
            console.log(obj[i].meanings);
            document.getElementById("td1").innerHTML = obj[i].origin;
            document.getElementById("td2").innerHTML = obj[i].meanings[i].partOfSpeech;
            document.getElementById("td3").innerHTML = obj[i].meanings[i].definitions[i].definition;
            document.getElementById("td4").innerHTML = obj[i].meanings[i].definitions[i].example;
            document.getElementById("td5").innerHTML = obj[i].phonetics[i].audio;
            document.getElementById("td6").innerHTML = `${obj[i].meanings[i].definitions[i].synonyms[0]}, ${obj[i].meanings[i].definitions[i].synonyms[1]}, ${obj[i].meanings[i].definitions[i].synonyms[2]}, ${obj[i].meanings[i].definitions[i].synonyms[3]}, ${obj[i].meanings[i].definitions[i].synonyms[4]}`;
        }
        
        document.getElementById("keyword2").innerHTML = `Phonetic in text: [${obj[0].phonetic}]`;
        
    } catch (error) {
        console.log(error);
    }

    document.getElementById("keyword1").innerHTML = `Results for: ${word}`;
    
}