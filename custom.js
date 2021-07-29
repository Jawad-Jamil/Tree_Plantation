let pics = ["https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/221375546_366366058382153_9069157772836638240_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=b9115d&_nc_ohc=vB55TMAFL1kAX8PAUEW&_nc_ht=scontent.fdac24-1.fna&oh=32875a3890fffdd710b3b75c4c33f072&oe=61073C5F",
"https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/214178367_125349199763828_1109416553323997682_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=825194&_nc_ohc=O-zNoaRnLAMAX9YvzWq&tn=VPPlbKR4tA6pUkBn&_nc_ht=scontent.fdac24-1.fna&oh=30b37fb73412aab7cd52c918c444afcb&oe=6126EF66",
"https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/217401277_906557363408971_3434539602172341983_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=aoY68tsQ8RMAX_W28Fc&_nc_ht=scontent.fdac24-1.fna&oh=264d635d309f7b890659396d0efd9e34&oe=61280B47",
"https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/216932431_906557593408948_6555395122945525096_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=gakFX1MDpGAAX8wbDM3&_nc_ht=scontent.fdac24-1.fna&oh=904df3c20a398fb12ddcfaf305ea0723&oe=6129E8BD",
"https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/216925689_613127872993831_8635635250288980471_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=b9115d&_nc_ohc=q0wj2Wgtwj4AX9EE0s1&_nc_ht=scontent.fdac24-1.fna&oh=39c39099882fa891c74c80dbd0c29fd6&oe=612A57DD",
"https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/217528394_513744733070922_6310917353633238623_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=kZCBdm7MZT0AX9Rm9kn&_nc_ht=scontent.fdac24-1.fna&oh=4574fedbbaf000fa2696702120990437&oe=6128FB68",
"https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/217177809_513745009737561_5355815836402679109_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=s8PAgGlWXvwAX-CJtdm&tn=VPPlbKR4tA6pUkBn&_nc_ht=scontent.fdac24-1.fna&oh=3f6982da533ad20cdf60a016fce821c4&oe=612A87C7",
"https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/s600x600/218910653_343410433983002_8289283323136445119_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=2eCKMx7GE24AX-J903G&_nc_ht=scontent.fdac24-1.fna&oh=a11558e024085fc9c4f406e6a5930e43&oe=61297688",
"https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/216927211_2096540147165480_7186495189619214026_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=_VHSmkhFH14AX9a_3kp&_nc_ht=scontent.fdac24-1.fna&oh=0b18237ffebb684f89d04f720679c653&oe=61284366",
"https://scontent.fdac24-1.fna.fbcdn.net/v/t1.6435-9/217392440_915185172370016_473466245833352411_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=7wc2gDCEF_cAX814zyP&_nc_ht=scontent.fdac24-1.fna&oh=a25d0f3b9f19b3f4c441b6fd14bdf4e8&oe=61279429"]

let imgTag = document.querySelector('img');

let number = 0;

function next() {
    number++

    if (number>=pics.length) {
        number = 0;
    }

    imgTag.src = pics[number];
}


function prev() {
    number--

    if (number<0) {
        number = pics.length-1;
    }

    imgTag.src = pics[number];
}