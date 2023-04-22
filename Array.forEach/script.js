const socials = ['Twitter', 'Linkedin' , 'Facebook' , 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach((item , index ,arr) => console.log( `${index} --  ${item}`))


function logSocial(socials){
    console.log(socials);
}

// socials.forEach(logSocial)


const socialObj = [
    { name:'Twitter', url: 'https://twitter.com'},
    { name:'Facebook', url: 'https://facobook.com'},
    { name:'Instagram', url: 'https://instagram.com'},
    { name:'Linkedin', url: 'https://linkedin.com'},
]

socialObj.forEach((item) => console.log(item));