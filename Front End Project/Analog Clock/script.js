let hh=document.querySelector(".hour-hand");
let mh=document.querySelector(".min-hand");
let sh=document.querySelector(".sec-hand");
let dh=document.querySelector(".dh");
let dm=document.querySelector(".dm");
let ds=document.querySelector(".ds");
setInterval(()=>{
    let time=new Date();
    let h=time.getHours();
    let m=time.getMinutes();
    let s=time.getSeconds();
    let hrotation=(30*h)+(h/2);
    let mrotation=6*m;
    let srotation=6*s;
    hh.style.transform=`rotate(${hrotation}deg)`
    mh.style.transform=`rotate(${mrotation}deg)`
    sh.style.transform=`rotate(${srotation}deg)`
    dh.innerHTML=(h<10?'0'+h:h)>12?h-=12:h; 
    dm.innerHTML=m<10?'0'+m:m;
    ds.innerHTML=s<10?'0'+s:s;
})