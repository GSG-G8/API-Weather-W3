const UrlWeather="";
const UrlUnsplash="";

const apiFunc = (url,callback) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
           callback(JSON.parse(xhr.responseText))
        }
    };
    
    xhr.open("GET", url, true);
    xhr.send();
}
apiFunc(urlUser,(responseText)=>{

    //// put your Dom here with responseText like a.textcontent=responseText.objectkey
});