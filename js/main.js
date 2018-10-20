!function(){
  function writeCode(prefix,code,fn){
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0 
    let id = setInterval(()=>{
        n+=1
        container.innerHTML = code.substring(0,n)
        styleTag.innerHTML = code.substring(0,n)
        container.scrollTop = container.scrollHeight
        if(n >=code.length){
          window.clearInterval(id)
          fn && fn.call()
        }
    },20)
  }
  let code = `
  /*
  *
  *首先，需要准备皮卡丘的皮
  */
  .preview{
    height:100%;
    display:flex;
    border:1px solid green;
    justify-content:center;
    align-items:center;
    background:#FEE433;
    
  }
  .wrapper{
    height:165px;
    width:100%;
    position:relative;
  }
  /*
  准备皮卡丘的鼻子
  */
  .nose{
    position:absolute;
    width:0px;
    height:0px;
    border-radius:11px;
    border-width:12px;
    border-color:black transparent transparent transparent;
    border-style:solid;
    left:50%;
    top:28px;
    margin-left:-12px;
    
  }
  /*
  *画个眼睛
  */
  .eye{
    width:49px;
    height:49px;
    background:#2E2E2E;
    position:absolute;
    border-radius:50%;
    border:2px solid #000000
  }
  .eye::before{
    content:'';
    display:block;
    width:24px;
    height:24px;
    background:white;
    border-radius:50%;
    position:absolute;
    left:6px;
    top:-1px;
    border:2px solid #000;
  }
  /*
  *右眼在右边
  */
  .eye.right{
    left:50%;
    margin-left:90px;
  }
  /*
  *左眼在左边
  */
  .eye.left{
    right:50%;
    margin-right:90px;
  }
  /*
  *给皮卡丘画个脸
  */
  .face{
    width:68px;
    height:68px;
    background:#FC0D1C;
    border-radius:50%;
    border:2px solid black;
    position:absolute;
    top:85px;
  }
  .face.left{
    right:50%;
    margin-right:116px;
  }
  .face.right{
    left:50%;
    margin-left:116px;
  }
  /*
  *画个上嘴唇
  */
  .upperLip{
    width:80px;
    height:25px;
    border:2px solid black;
    position:absolute;
    top:50px;
    background:#FEE433;;
    
  }
  .upperLip.left{
    right:50%;
    border-bottom-left-radius:40px 25px;
    border-top:none;
    border-right:none;
    transform:rotate(-20deg);
    
  }
   .upperLip.right{
    left:50%;
    border-bottom-right-radius:40px 25px;
    border-top:none;
    border-left:none;
    transform:rotate(20deg); 
  }
  /*
  *
  *画下嘴唇
  */
  .lowerLip-wrapper{
    overflow:hidden;
    position:absolute;
    bottom:0px;
    left:50%;
    margin-left:-150px; 
    height:110px;
    width:300px;
  }
  .lowerLip{
    width:300px;
    height:3500px;
    background:#990513;
    border-radius:200px/2000px;
    border:2px solid black;
    position:absolute;
    bottom:0px;
    overflow:hidden;
  }
  /*
  *小舌头
  */
  .lowerLip::after{
    content:'';
    position:absolute;
    background:#FC4A62;
    width:100px;
    height:100px;
    bottom:-20px;
    left:50%;
    margin-left:-50px;
    border-radius:50px;  
  }
  /*
  *好了,这只皮卡丘送给你
  */
  `
  writeCode('',code)
}.call()