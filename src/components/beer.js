
function beer() {
    const beers = [
        {
            name: 'Corona Light',
            image: 'https://decrescente.net/images/suppliers/constellation-brands/corona/corona-light/corona-light-bottle-lg.png',
        },

        {
            name: 'Natty Ice',
            image: 'https://i5.walmartimages.com/asr/81454be6-c708-4e89-8b22-3b412f42c76d_1.376ce05eacfc4e313847776dd84dd36c.jpeg',
        },

        {
            name: 'Modelo',
            image: 'https://target.scene7.com/is/image/Target/GUEST_0e1e5566-f4d0-4f63-a28f-035232e2b388?wid=488&hei=488&fmt=pjpeg',
        }
    ]

    const selection = beers[Math.floor(Math.random() * beers.length)]
    return selection
}

export default beer;




