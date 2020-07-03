import liff from "@line/liff";

liff.init(
    {
        liffId:"1640064557-P25n2Nd9"
    }
).then(()=>{
    console.log("connect to LINE Server")
}).catch(e=>{
    console.error(e)
})
