let a = "console.log(Online)"
const TunicsPic =  `<img class="bots" src="/asset/tunics.png" alt="Tunics Png">`
const AcleronPic = `<img class="bots" src="/asset/acleron.jpg" alt="acleron Png">`
  
function change(name){
    console.log('Acleron!');
    const docbb = document.querySelector('.bot_info');
    const maindocac = document.getElementById('acleronname');
    const maintun =  document.getElementById('tunicsname');
    scrollTo(0,369.0909118652344);

    if(name === 'acleron'){
        console.log("Yes");
        docbb.innerHTML =`<p class="bots_card">${AcleronPic}<br><span>Acleron#4880</span></p>    <p><a href="https://discord.com/api/oauth2/authorize?client_id=999680649483006062&permissions=1342597176&scope=bot%20applications.commands">Invite</a>  <a href="https://discord.gg/ghYeD3Vxyh">Support Server</a><a href="https://top.gg/bot/999680649483006062/vote">Vote</a></p>`;
        maindocac.style.color = "rgb(85, 138, 207)";maindocac.style.borderBottom = "1px solid red";maintun.style.color = "antiquewhite"; maintun.style.borderBottom = "none";

    }else if(name === 'tunics'){
        console.log("Tunics!");
        docbb.innerHTML = ` <p class="bots_card">${TunicsPic}<br><span>Tunics#4462</span>    </p><p> <a href="https://discord.com/api/oauth2/authorize?client_id=994648042680635514&permissions=8&scope=bot%20applications.commands">Invite</a> <a href="https://discord.gg/ghYeD3Vxyh">Support Server</a> <a href="https://top.gg/bot/994648042680635514/vote">Vote</a><br></p>`;

        maintun.style.color = "rgb(85, 138, 207)";maintun.style.borderBottom = "1px solid red";maindocac.style.color = "antiquewhite";maindocac.style.borderBottom = "none";
    }else docbb.innerHTML = "Error";

};

