let cmd = [
    "Connecting to server...",
    "Initializing Hacking...",
    "Reading your Files...",
    "Password files Detected...",
    "Sending all passwords and personal files to server...",
    "Cleaning up..."
]

const run = async (text)=>{
    await randomdelay()
    let span  = document.createElement('span')
    span.innerText = text;
    document.body.append(span)
}

const randomdelay = ()=>{
    return new promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove()
        }, (1 + 6 * Math.random()) * 1000);
    })
}


for (const item of cmd){
    run(item)
}
