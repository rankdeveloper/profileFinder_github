let div=document.getElementById("div");


let userId=document.getElementById("input");

function find(){

  

    fetch(`https://api.github.com/users/${userId.value}`)
    .then(res => res.json())
    .then(data => {
     console.log(`${data.followers} ${data.following} ${data.avatar_url}`);

    //    div.innerHTML=`
    //    <img src="${data.avatar_url}">
    //    <h3>${data.followers}</h3>
    //     <h3>${data.following}</h3>
    //    `;

        div.innerHTML=`
        <div class="div-container">
        <div class="img">
        <a href="${data.html_url}">
            <img src="${data.avatar_url}">
            </a> 
        </div>
        
        <div class="bio">
        <div class="bio-inner">
        <h2> Hi am ${data.name} *<span>${data.location}</span>*</h2>
        <p>${data.bio}</p>
        </div>
        </div>

       
        <div class="content">
            <div class="followers">
                <h4>Followers</h4>
                <h3>${data.followers}</h3>
            </div>

            <div class="following">
                <h4>Following </h4>
                <h3>${data.following}</h3>

            </div>

            <div class="following">
            <h4>Repos </h4>
            <h3>${data.public_repos}</h3>

        </div>

        </div>


    </div>`;

    })

}
