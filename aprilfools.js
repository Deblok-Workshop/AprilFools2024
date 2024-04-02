function payload() {
            alert('Happy April Fools!')
            setInterval(() => {document.querySelector("video").play();document.querySelector("video").volume = 0.5;document.body.click();},20)
        setTimeout(()=>{
            // 
            let payload1 = setInterval(()=>{
                document.body.style.transform = ` rotateZ(${Math.random() * 360}deg)`
            },1000)
            setTimeout(()=>{
                clearInterval(payload1)
            let payload2 = setInterval(()=>{
                document.body.style.transform = `scaleX(${Math.random() * 2.11}) rotateZ(${Math.random() * 360}deg)`
            },800)
            setTimeout(()=>{
                clearInterval(payload2)
                let payload3 = setInterval(()=>{
                    document.body.style.transform = `scaleY(${Math.random() * 1.11 + 0.5})  scaleX(${Math.random() * 2.11}) rotateZ(${Math.random() * 360}deg)`
                },300)
                setTimeout(()=>{
                    clearInterval(payload3)
                    setInterval(()=>{
document.body.style.filter = `hue-rotate(${Math.random() * 360}deg)` 
document.body.style.transform = `scaleY(${Math.random() * 1.11 + 1})  scaleX(${Math.random() * 2.11 + 1}) rotateZ(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg) rotateX(${Math.random() * 360}deg)`
},120)
setInterval(()=>{let rick = window.open("popup.html","april fools","height=160,width=360,popup=1")},2000)
                },3000)
            },5000)
            },6000)
        },10000)
        }
        
