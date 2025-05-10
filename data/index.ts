import { NavLink } from "@/types";
  
export const links: NavLink[] = [
    { href: '/', label: 'home' },
    { href: '/about', label: 'about' },
    { href: '/products', label: 'products' },
    { href: '/favorites', label: 'favorites' },
    { href: '/reviews', label: 'reviews' },
    { href: '/cart', label: 'cart' },
    { href: '/orders', label: 'orders' },
];

export const videos: {
    source: string;
    name: string;
    thumbnail: string;
}[] = [
    {
        source: '/videos/v1.mp4',
        name: 'NESCAFÉ BLEND & BREW Rich Aroma',
        thumbnail: 'https://ik.imagekit.io/phkgtl3vm/products/sachet-09.png?updatedAt=1745052483522',
    },
    {
        source: '/videos/v2.mp4',
        name: 'NESCAFÉ Gold Crema Intense',
        thumbnail: 'https://ik.imagekit.io/phkgtl3vm/products/instant-03.png?updatedAt=1745052470768',
    },
    {
        source: '/videos/v3.mp4',
        name: 'NESCAFÉ Classic Instant',
        thumbnail: 'https://ik.imagekit.io/phkgtl3vm/products/instant-06.png?updatedAt=1745052469439',
    },
    {
        source: '/videos/v4.mp4',
        name: 'NESCAFÉ BLEND & BREW Black Roast',
        thumbnail: 'https://ik.imagekit.io/phkgtl3vm/products/sachet-01.png?updatedAt=1745052479243',
    }
];

export const aboutReviews = [
    {
        image: '/images/about-3.jpg',
        username: 'Veasna',
        job: 'Web Developer',
        comments: `I’ve been ordering from ChetraCoffee for months now, and I’m always impressed by the quality. Their mocha is my absolute favorite!`,
    },
    {
        image: '/images/about-5.jpg',
        username: 'Sao SreySros',
        job: 'Printing shop owner',
        comments: `We discovered ChetraCoffee while traveling, and now it’s a must-stop whenever we’re in the area. Great coffee and friendly staff`,
    },
    {
        image: '/images/about-1.jpg',
        username: 'Sathit Kheng',
        job: 'Football Player',
        comments: 'I love the cozy atmosphere at ChetraCoffee. The barista is always friendly, and the coffee is top-notch. Highly recommended!',
    },
    {
        image: '/images/about-2.jpg',
        username: 'Sophea Chab',
        job: 'Chef cooking',
        comments: 'I’m always in a rush, but ChetraCoffee’s sachet coffee is a lifesaver. Great taste and super convenient',
    },
    {
        image: '/images/about-4.jpg',
        username: 'Oudom',
        job: 'Civil Engineer',
        comments: 'I regularly meet my team at ChetraCoffee to discuss project details. The friendly staff and excellent coffee keep our sessions productive.',
    },
];

export const features = [
    {
        icon: "/images/icons/6.png",
        title: "Awesome Aroma",
        description:
        "At ChetraCoffee, every cup begins with a captivating aroma. Our freshly brewed coffee fills the air with an irresistible scent that awakens your senses.",
    },
    {
        icon: "/images/icons/4.png",
        title: "Premium Quality",
        description:
        "We believe in excellence. Our coffee is made from carefully selected beans, expertly roasted to deliver a smooth, rich flavor in every sip.",
    },
    {
        icon: "/images/icons/1.png",
        title: "Pure Ingredients",
        description:
        "We prioritize purity and freshness. Our beans are sourced from trusted farmers, ensuring that every cup is natural, delicious, and free from additives.",
    },
    {
        icon: "/images/icons/3.png",
        title: "Signature Blends",
        description:
        "From classic black coffee to creamy lattes, our signature blends are crafted to suit every taste. Whether you love it strong or smooth, we have the perfect cup for you.",
    },
  ];

// ✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅




export const products = [
    // # instant-coffee
    { 
        id: 1, 
        name: "NESCAFÉ Gold Columbia Arabica Blend", 
        category: "instant_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%9A%E0%B8%B4%E0%B8%81%E0%B9%89%E0%B8%B2%20%E0%B9%80%E0%B8%9A%E0%B8%A5%E0%B8%99%E0%B8%94%E0%B9%8C.png",
        short_desc: "",
        long_desc: "Expertly crafted, with a balanced taste - our signature, smooth blend.",
        price: 8.50,
        size: [95,190],
    },
    { 
        id: 2, 
        name: "NESCAFÉ Gold Crema Smooth", 
        category: "instant_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/Gold%20crema.png",
        short_desc: "Smooth and silky",
        long_desc: "Get ready to experience our signature smooth blend with a layer of velvety coffee crema, to uplift any moment you choose.",
        price: 9.50,
        size: [100,200],
    },
    { 
        id: 3, 
        name: "NESCAFÉ Gold Crema Intense", 
        category: "instant_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/Intense.png",
        short_desc: "Rich and full-bodied",
        long_desc: "A full bodied instant coffee, to kickstart your day with a premium dark roast.",
        price: 10.50,
        size: [50,100,200],
    },

    // # Sachet
    { 
        id: 4,
        name: "NESCAFÉ BLEND & BREW Black Roast", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/BB%20Black%20roast_0.png",
        short_desc: "",
        long_desc: "Dark roasted coffee beans for the stronger aroma and more intense and full bodied taste. Enjoy the intensely pleasurable cup of coffee.",
        price: 5.50,
        size: [],
    },
    { 
        id: 5,
        name: "NESCAFÉ REDCUP ESPRESSO ROAST", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/Espresso%20Roast.png",
        short_desc: "",
        long_desc: "NESCAFÉ REDCUP ESPRESSO ROAST… Bold and intense finely ground roasted coffee. NESCAFE Red Cup Espresso Roast promises to deliver a bold and intense coffee experience that will awaken your senses and satisfy your coffee cravings from the first sip till the last drop.",
        price: 5.50,
        size: [],
    },
    { 
        id: 6,
        name: "NESCAFÉ Protect Proslim", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2023-11/Nes_Web3_PSC_BannerMod_StrongCappuccino_Front_960X960%20%281%29_2ccz.png",
        short_desc: "aromatic",
        long_desc: "'NESCAFÉ Protect Proslim is well-rounded aromatic coffee mixes with 3,000 mg of Fiber. It has low fat, no cholesterol and contains White Kidney Bean Extract.",
        price: 5.50,
        size: [],
    },
    { 
        id: 7,
        name: "NESCAFÉ BLEND & BREW Less Sugar", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/BB%20Less%20sugar.png",
        short_desc: "",
        long_desc: "More inviting aroma & a well-balanced cup from 2 types of coffee beans: Arabica, for a more aromatic and smoother finish, and Robusta, for a bolder, full-bodied flavor, bringing you an intense but smooth and aromatic fresh coffee cup. Less Sugar 50%. Less sweet, well-balanced taste",
        price: 5.50,
        size: [],
    },
    { 
        id: 8,
        name: "NESCAFÉ BLEND & BREW Espresso Roast", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/BB%20Espresso%20roast.png",
        short_desc: "",
        long_desc: "Experience the full flavor of espresso, an intense coffee with a well-rounded milk. Roasted coffee from types of coffee beans: Arabica, for a more aromatic and smoother finish, and Robusta, for a bolder, full-bodied flavor bringing you an intense but smooth and aromatic fresh coffee cup with the addition of milk for a delicious taste. Intense coffee flavor with a well-rounded milk.",
        price: 5.50,
        size: [],
    },
    { 
        id: 9,
        name: "NESCAFÉ Americano Zero Sugar", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2023-11/AW_NST052420_B%26B_DigiA_27stick_Resize_960x960px_135D1V1_AmericanoZero133.png",
        short_desc: "",
        long_desc: "NESCAFÉ Americano Zero Sugar Unsweetened Coffee Mix blended with finely ground roasted Arabica coffee to deliver an aromatic and intense coffee cup. Easy to prepare since it's cold soluble, and low calories.",
        price: 5.50,
        size: [],
    },
    { 
        id: 10,
        name: "NESCAFÉ BLEND & BREW No Table Sugar", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/BB%20no%20sugar.png",
        short_desc: "Aromatic",
        long_desc: "More inviting aroma & a well-balanced cup from 2 types of coffee beans: Arabica, for a more aromatic and smoother finish, and Robusta, for a bolder, full-bodied flavor, bringing you an intense but smooth and aromatic fresh coffee cup.",
        price: 5.50,
        size: [],
    },
    { 
        id: 11,
        name: "NESCAFÉ REDCUP BLACKROAST", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/Black%20Roast.png",
        short_desc: "Intense, rich and dark",
        long_desc: "NESCAFÉ REDCUP BLACKROAST, Roasted for the boldest taste. A coffee from dark roasted finely ground coffee beans for a higher intensity taste with roasty aroma to deliver aromatic and intense taste that bold coffee drinkers will love.",
        price: 5.50,
        size: [100],
    },
    { 
        id: 12,
        name: "NESCAFÉ BLEND & BREW Rich Aroma", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/Blend%20and%20Brew.png",
        short_desc: "Smooth and rich with aromatic",
        long_desc: "More inviting well-balanced and delightful aroma of coffee cup from 2 types of coffee beans: Arabica, for a more aromatic and smoother finish, and Robusta, for a bolder, full-bodied flavor bringing you an intense but smooth and aromatic fresh coffee cup.",
        price: 5.50,
        size: [],
    },
    { 
        id: 13,
        name: "NESCAFÉ Americano Original", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/Original.png",
        short_desc: "NESCAFÉ Americano, an easy way to freshen your day",
        long_desc: "NESCAFÉ Americano, Coffee Mix blended with finely ground roasted Arabica coffee to deliver an aromatic and intense coffee cup. Easy to prepare since it's cold soluble and low calories.",
        price: 5.50,
        size: [],
    },
    { 
        id: 14,
        name: "NESCAFÉ REDCUP CLASSIC", 
        category: "sachet_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/RedCup.png",
        short_desc: "Full, bold flavour and rich aroma",
        long_desc: "NESCAFE Red Cup Classic, our signature coffee with its medium roast that offers a delightful taste and aroma, crafted from finely ground roasted coffee beans. NESCAFE Red Cup Classic delivers a smooth and balanced flavor profile along with the aroma captivating of freshly brewed coffee for your eveyday moment.",
        price: 5.50,
        size: [],
    },

    // # Read to Drink
    { 
        id: 15,
        name: "NESCAFE Gold Crema Latte", 
        category: "ready_to_drink_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/New.png",
        short_desc: "",
        long_desc: "NESCAFE Gold Crema Latte is suitable for consumers who like a smooth and well-balanced cup of coffee. The perfect cup is made up off 2 different type of coffee beans ; Arabica Beans for smoothness and aroma, and Robusta Beans to give you the slightly intense, well blended taste.",
        price: 1.50,
        size: [210],
    },
    { 
        id: 16,
        name: "Gold Crema Americano", 
        category: "ready_to_drink_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/23-192_NESCAFE_Gold_MYW_Can_210ml_Americano_Front-with-Ice-%26-Smoke_Packshot_Final.png",
        short_desc: "",
        long_desc: "NESCAFE Gold Crema Americano is suitable for consumers who like a smooth and well-balanced cup of coffee. The perfect cup is made up off 2 different type of coffee beans ; Arabica Beans for smoothness and aroma, and Robusta Beans to give you the slightly intense, well blended taste.",
        price: 1.50,
        size: [210],
    },
    { 
        id: 17,
        name: "NESCAFÉ Ready to Drink Espresso Roast with Arabica Added", 
        category: "ready_to_drink_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/New%20Project_0.png",
        short_desc: "",
        long_desc: "NESCAFÉ Espresso Roast Ready to Drink coffee with a perfect blend of Arabica and Robusta coffee beans offers you an intenese and well-rounded taste of coffee with refreshment and convenient for stretching your best in every day.",
        price: 1.50,
        size: [180],
    },
    { 
        id: 18,
        name: "NESCAFÉ Ready to Drink Latte with Arabica Added", 
        category: "ready_to_drink_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/%E0%B8%A5%E0%B8%B2%E0%B9%80%E0%B8%95%E0%B9%89.png",
        short_desc: "",
        long_desc: "NESCAFÉ Latte Ready to Drink coffee with a perfect blend of Arabica and Robusta coffee beans offers you a smooth coffee with milky taste (real milk 100%) with a refreshment and convenient for stretching your best in every day.",
        price: 1.50,
        size: [180],
    },
    { 
        id: 19,
        name: "NESCAFÉ Ready to Drink Black Ice with Arabic Added", 
        category: "ready_to_drink_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/New%20Project.png",
        short_desc: "",
        long_desc: "NESCAFÉ Black Ice Ready to Drink is a Black coffee with a perfect blend of Arabica and Robusta coffee beans ,low Sugar offers you a refreshment with only 50Kcal per can so you can stretch your best in every day at your convenience",
        price: 1.50,
        size: [180],
    },
    { 
        id: 20,
        name: "NESCAFÉ Triple Espresso Ready to Drink Coffee", 
        category: "ready_to_drink_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2025-02/23-125_NESCAFE_Triple-Espresso_Can_210ml_Packshot_Front_2.png",
        short_desc: "",
        long_desc: "NESCAFE Triple Espresso Ready to Drink Coffee Can is a great innovation with Vitamin B&D in your Coffee! It contains 3 shots of Espresso which means you can definitely do anything throughout your day! NESCAFE Triple Espresso is suitable for our new generation of coffee lovers, or those that want an extra boost in their coffee routine.",
        price: 1.50,
        size: [220],
    },
    { 
        id: 21,
        name: "NESCAFÉ Robusta Black Roast", 
        category: "ready_to_drink_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/%E0%B9%82%E0%B8%A3%E0%B8%9A%E0%B8%B1%E0%B8%AA%E0%B8%95%E0%B9%89%E0%B8%B2.png",
        short_desc: "",
        long_desc: "NESCAFÉ Robusta Black Roast, Dark roasted coffee with high temperature roasting and precise time control that makes the differentiated coffee to be dark roasted and brings out the intense aroma, bitterness and less sour coffee than before.",
        price: 1.50,
        size: [180],
    },
    { 
        id: 22,
        name: "NESCAFÉ Triple Black Ready to Drink Coffee Can", 
        category: "ready_to_drink_coffee",
        image: "https://www.nescafe.com/th/sites/default/files/2024-07/TB.png",
        short_desc: "",
        long_desc: "NESCAFE Triple Black Ready to Drink Coffee Can is a great innovation with Vitamin B&D in your Coffee! It contains 3 shots of Espresso which means you can definitely do anything throughout your day! NESCAFE Triple Black is suitable for consumers who want that extra boost of coffee without milk!",
        price: 1.50,
        size: [220],
    },

    // # roast
    { 
        id: 23,
        name: "Nescafe red cup classic", 
        category: "roasted_and_ground_coffee",
        image: "https://media.makrocambodiaclick.com/PRODUCT_1743566618622.jpeg",
        short_desc: "",
        long_desc: "",
        price: 9.50,
        size: [],
    },
];


const productsJson = [
    // # 1- ✅ instant-coffee / 06
    {
        "name": "NESCAFÉ Gold Columbia Arabica Blend",
        "shortDesc": "",
        "longDesc": "Expertly crafted, with a balanced taste - our signature, smooth blend.",
        "imageUrl": "/img/products/instant-01.png",
        "price": 12,
        "stockQuantity": 10,
        "size": [95,190],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "instant-coffee",
        "brand": "nescafe-gold",
        "type": "black-coffee"
    },
    {
        "name": "NESCAFÉ Gold Crema Smooth",
        "shortDesc": "Smooth and silky",
        "longDesc": "Get ready to experience our signature smooth blend with a layer of velvety coffee crema, to uplift any moment you choose.",
        "imageUrl": "/img/products/instant-02.png",
        "price": 14,
        "stockQuantity": 14,
        "size": [100,200],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "instant-coffee",
        "brand": "nescafe-gold",
        "type": "black-coffee"
    },
    {
        "name": "NESCAFÉ Gold Crema Intense",
        "shortDesc": "Rich and full-bodied",
        "longDesc": "A full bodied instant coffee, to kickstart your day with a premium dark roast.",
        "imageUrl": "/img/products/instant-03.png",
        "price": 14,
        "stockQuantity": 12,
        "size": [50,100,200],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "instant-coffee",
        "brand": "nescafe-gold",
        "type": "black-coffee"
    },
    {
        "name": "Black Roast",
        "shortDesc": "Intense, rich and dark",
        "longDesc": "Discover our darkest roast in - an intense taste - only for the bold.",
        "imageUrl": "/img/products/instant-04.png",
        "price": 15,
        "stockQuantity": 15,
        "size": [200],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "instant-coffee",
        "brand": "nescafe-blend-brew",
        "type": "black-coffee"
    },
    {
        "name": "Classic Decaf",
        "shortDesc": "Full, bold flavour and rich aroma",
        "longDesc": "All of the signature, full-bodied flavour - but without the caffiene.",
        "imageUrl": "/img/products/instant-05.png",
        "price": 12,
        "stockQuantity": 12,
        "size": [100],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "instant-coffee",
        "brand": "nescafe-blend-brew",
        "type": "black-coffee"
    },
    {
        "name": "Classic",
        "shortDesc": "Full, bold flavour and rich aroma",
        "longDesc": "Our signature coffee with its medium roast, unmistakeable aroma, & full flavour.",
        "imageUrl": "/img/products/instant-06.png",
        "price": 12,
        "stockQuantity": 10,
        "size": [200,300],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "instant-coffee",
        "brand": "nescafe-blend-brew",
        "type": "black-coffee"
    },

    // # 2- ✅ sachet-coffee / 11
    {
        "name": "NESCAFÉ BLEND & BREW Black Roast",
        "shortDesc": "",
        "longDesc": "Dark roasted coffee beans for the stronger aroma and more intense and full bodied taste. Enjoy the intensely pleasurable cup of coffee.",
        "imageUrl": "/img/products/sachet-01.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-blend-brew",
        "type": "black-coffee"
    },
    {
        "name": "NESCAFÉ REDCUP ESPRESSO ROAST",
        "shortDesc": "",
        "longDesc": "NESCAFÉ REDCUP ESPRESSO ROAST… Bold and intense finely ground roasted coffee. NESCAFE Red Cup Espresso Roast promises to deliver a bold and intense coffee experience that will awaken your senses and satisfy your coffee cravings from the first sip till the last drop.",
        "imageUrl": "/public/img/products/sachet-02.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-red-cup",
        "type": "espressos"
    },
    {
        "name": "NESCAFÉ Protect Proslim",
        "shortDesc": "",
        "longDesc": "NESCAFÉ Protect Proslim is well-rounded aromatic coffee mixes with 3,000 mg of Fiber. It has low fat, no cholesterol and contains White Kidney Bean Extract.",
        "imageUrl": "/img/products/sachet-03.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": false,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-blend-brew",
        "type": "frothy-coffee"
    },
    {
        "name": "NESCAFÉ BLEND & BREW Less Sugar",
        "shortDesc": "",
        "longDesc": "More inviting aroma & a well-balanced cup from 2 types of coffee beans: Arabica, for a more aromatic and smoother finish, and Robusta, for a bolder, full-bodied flavor, bringing you an intense but smooth and aromatic fresh coffee cup. Less Sugar 50%. Less sweet, well-balanced taste",
        "imageUrl": "/img/products/sachet-04.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-blend-brew",
        "type": "black-coffee"
    },
    {
        "name": "NESCAFÉ BLEND & BREW Espresso Roast",
        "shortDesc": "",
        "longDesc": "Experience the full flavor of espresso, an intense coffee with a well-rounded milk. Roasted coffee from types of coffee beans: Arabica, for a more aromatic and smoother finish, and Robusta, for a bolder, full-bodied flavor bringing you an intense but smooth and aromatic fresh coffee cup with the addition of milk for a delicious taste. Intense coffee flavor with a well-rounded milk.",
        "imageUrl": "/img/products/sachet-05.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-blend-brew",
        "type": "frothy-coffee"
    },
    {
        "name": "NESCAFÉ Americano Zero Sugar",
        "shortDesc": "",
        "longDesc": "NESCAFÉ Americano Zero Sugar Unsweetened Coffee Mix blended with finely ground roasted Arabica coffee to deliver an aromatic and intense coffee cup. Easy to prepare since it's cold soluble, and low calories.",
        "imageUrl": "/img/products/sachet-06.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-americano",
        "type": "black-coffee"
    },
    {
        "name": "NESCAFÉ BLEND & BREW No Table Suga",
        "shortDesc": "",
        "longDesc": "More inviting aroma & a well-balanced cup from 2 types of coffee beans: Arabica, for a more aromatic and smoother finish, and Robusta, for a bolder, full-bodied flavor, bringing you an intense but smooth and aromatic fresh coffee cup.",
        "imageUrl": "/img/products/sachet-07.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": false,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-blend-brew",
        "type": "frothy-coffee"
    },
    {
        "name": "NESCAFÉ REDCUP BLACKROAST",
        "shortDesc": "",
        "longDesc": "NESCAFÉ REDCUP BLACKROAST, Roasted for the boldest taste. A coffee from dark roasted finely ground coffee beans for a higher intensity taste with roasty aroma to deliver aromatic and intense taste that bold coffee drinkers will love.",
        "imageUrl": "/img/products/sachet-08.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-red-cup",
        "type": "black-coffee"
    },
    {
        "name": "NESCAFÉ BLEND & BREW Rich Aroma",
        "shortDesc": "",
        "longDesc": "More inviting well-balanced and delightful aroma of coffee cup from 2 types of coffee beans: Arabica, for a more aromatic and smoother finish, and Robusta, for a bolder, full-bodied flavor bringing you an intense but smooth and aromatic fresh coffee cup.",
        "imageUrl": "/img/products/sachet-09.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-blend-brew",
        "type": "frothy-coffee"
    },
    {
        "name": "NESCAFÉ REDCUP CLASSIC",
        "shortDesc": "",
        "longDesc": "NESCAFE Red Cup Classic, our signature coffee with its medium roast that offers a delightful taste and aroma, crafted from finely ground roasted coffee beans. NESCAFE Red Cup Classic delivers a smooth and balanced flavor profile along with the aroma captivating of freshly brewed coffee for your eveyday moment.",
        "imageUrl": "/img/products/sachet-10.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": false,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-red-cup",
        "type": "black-coffee"
    },
    {
        "name": "NESCAFÉ Americano Original",
        "shortDesc": "",
        "longDesc": "NESCAFÉ Americano, Coffee Mix blended with finely ground roasted Arabica coffee to deliver an aromatic and intense coffee cup. Easy to prepare since it's cold soluble and low calories.",
        "imageUrl": "/img/products/sachet-11.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "sachet-coffee",
        "brand": "nescafe-americano",
        "type": "black-coffee"
    },

    // # 3- ✅ ready-to-drink / 08
    {
        "name": "NESCAFE Gold Crema Latte",
        "shortDesc": "",
        "longDesc": "NESCAFE Gold Crema Latte is suitable for consumers who like a smooth and well-balanced cup of coffee. The perfect cup is made up off 2 different type of coffee beans ; Arabica Beans for smoothness and aroma, and Robusta Beans to give you the slightly intense, well blended taste.",
        "imageUrl": "/img/products/rd-01.png",
        "price": 10,
        "stockQuantity": 10,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "ready-to-drink-coffee",
        "brand": "nescafe-ready-to-drink",
        "type": "latte"
    },
    {
        "name": "Gold Crema Americano",
        "shortDesc": "",
        "longDesc": "NESCAFE Gold Crema Americano is suitable for consumers who like a smooth and well-balanced cup of coffee. The perfect cup is made up off 2 different type of coffee beans ; Arabica Beans for smoothness and aroma, and Robusta Beans to give you the slightly intense, well blended taste.",
        "imageUrl": "/img/products/rd-02.png",
        "price": 5,
        "stockQuantity": 12,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "ready-to-drink-coffee",
        "brand": "nescafe-ready-to-drink",
        "type": "black-coffee"
    },
    {
        "name": "NESCAFÉ Ready to Drink Espresso Roast with Arabica Added",
        "shortDesc": "",
        "longDesc": "NESCAFÉ Espresso Roast Ready to Drink coffee with a perfect blend of Arabica and Robusta coffee beans offers you an intenese and well-rounded taste of coffee with refreshment and convenient for stretching your best in every day.",
        "imageUrl": "/img/products/rd-03.png",
        "price": 5,
        "stockQuantity": 12,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "ready-to-drink-coffee",
        "brand": "nescafe-ready-to-drink",
        "type": "espresso"
    },
    {
        "name": "NESCAFÉ Ready to Drink Latte with Arabica Added",
        "shortDesc": "",
        "longDesc": "NESCAFÉ Latte Ready to Drink coffee with a perfect blend of Arabica and Robusta coffee beans offers you a smooth coffee with milky taste (real milk 100%) with a refreshment and convenient for stretching your best in every day.",
        "imageUrl": "/img/products/rd-04.png",
        "price": 5,
        "stockQuantity": 12,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "ready-to-drink-coffee",
        "brand": "nescafe-ready-to-drink",
        "type": "frothy-coffee"
    },
    {
        "name": "NESCAFÉ Ready to Drink Black Ice with Arabic Added",
        "shortDesc": "",
        "longDesc": "NESCAFÉ Black Ice Ready to Drink is a Black coffee with a perfect blend of Arabica and Robusta coffee beans ,low Sugar offers you a refreshment with only 50Kcal per can so you can stretch your best in every day at your convenience.",
        "imageUrl": "/img/products/rd-05.png",
        "price": 5,
        "stockQuantity": 12,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "ready-to-drink-coffee",
        "brand": "nescafe-ready-to-drink",
        "type": "black-coffee"
    },
    {
        "name": "NESCAFÉ Triple Espresso Ready to Drink Coffee",
        "shortDesc": "",
        "longDesc": "NESCAFE Triple Espresso Ready to Drink Coffee Can is a great innovation with Vitamin B&D in your Coffee! It contains 3 shots of Espresso which means you can definitely do anything throughout your day! NESCAFE Triple Espresso is suitable for our new generation of coffee lovers, or those that want an extra boost in their coffee routine.",
        "imageUrl": "/img/products/rd-06.png",
        "price": 5,
        "stockQuantity": 12,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "ready-to-drink-coffee",
        "brand": "nescafe-ready-to-drink",
        "type": "espresso"
    },
    {
        "name": "NESCAFÉ Robusta Black Roast",
        "shortDesc": "",
        "longDesc": "NESCAFÉ Robusta Black Roast, Dark roasted coffee with high temperature roasting and precise time control that makes the differentiated coffee to be dark roasted and brings out the intense aroma, bitterness and less sour coffee than before.",
        "imageUrl": "/img/products/rd-07.png",
        "price": 5,
        "stockQuantity": 12,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "ready-to-drink-coffee",
        "brand": "nescafe-ready-to-drink",
        "type": "black-coffee"
    },
    {
        "name": "NESCAFÉ Triple Black Ready to Drink Coffee Can",
        "shortDesc": "",
        "longDesc": "NESCAFE Triple Black Ready to Drink Coffee Can is a great innovation with Vitamin B&D in your Coffee! It contains 3 shots of Espresso which means you can definitely do anything throughout your day! NESCAFE Triple Black is suitable for consumers who want that extra boost of coffee without milk!",
        "imageUrl": "/img/products/rd-08.png",
        "price": 5,
        "stockQuantity": 12,
        "size": [],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "ready-to-drink-coffee",
        "brand": "nescafe-ready-to-drink",
        "type": "black-coffee"
    },
    

    // # 4- ✅ drinks - 30

    // # Popular
    // - NES-AMERICANO ✅
    // - NES-LATTE ✅
    // - NES-MOCHA ✅
    // - MILO ✅
    // - Mt.MILO

    {
        "name": "NES MOCHA COFFEE",
        "shortDesc": "",
        "longDesc": "Indulge in the simplicity of our delicious cold brew coffee",
        "imageUrl": "/img/drinks/popular/popular-coffee-1.png",
        "price": 1.80,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "nescafe-blend-brew",
        "type": "mocha"
    },
    {
        "name": "NES VANILLA LATTE",
        "shortDesc": "",
        "longDesc": "Indulge in the simplicity of our delicious cold brew coffee",
        "imageUrl": "/img/drinks/popular/popular-coffee-2.png",
        "price": 1.80,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "nescafe-gold",
        "type": "latte"
    },
    {
        "name": "NES MILO",
        "shortDesc": "",
        "longDesc": "Indulge in the simplicity of our delicious cold brew coffee",
        "imageUrl": "/img/drinks/popular/popular-coffee-3.png",
        "price": 1.75,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "nescafe-gold",
        "type": "flavoured"
    },
    {
        "name": "NES AMERICANO COFFEE",
        "shortDesc": "",
        "longDesc": "Indulge in the simplicity of our delicious cold brew coffee",
        "imageUrl": "/img/drinks/popular/products-coffee-5.png",
        "price": 1.50,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "nescafe-americano",
        "type": "black-coffee"
    },
    {
        "name": "NES Mountain Milo",
        "shortDesc": "",
        "longDesc": "Indulge in the simplicity of our delicious cold brew coffee",
        "imageUrl": "/img/drinks/popular/products-coffee-5.png",
        "price": 1.50,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "nescafe-americano",
        "type": "black-coffee"
    },
    

    // # BLACK-COFFEE
    {
        "name": "",
        "shortDesc": "",
        "longDesc": "",
        "imageUrl": "",
        "price": 5,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "",
        "type": "black-coffee"
    },
    // # FROTHY COFFEE
    {
        "name": "Iced NES LATTE CLOUD FOAM",
        "shortDesc": "",
        "longDesc": "Iced NES LATTE CLOUD FOAM",
        "imageUrl": "/img/drinks/popular/products-coffee-2.png",
        "price": 5,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "nescafe-gold",
        "type": "frothy-coffee"
    },
    {
        "name": "",
        "shortDesc": "",
        "longDesc": "",
        "imageUrl": "",
        "price": 5,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "nescafe-gold",
        "type": "frothy-coffee"
    },
    // # LATTE
    {
        "name": "",
        "shortDesc": "",
        "longDesc": "",
        "imageUrl": "",
        "price": 5,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "",
        "type": "latte"
    },
    // # ESPRESSO
    {
        "name": "",
        "shortDesc": "",
        "longDesc": "",
        "imageUrl": "",
        "price": 5,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "",
        "type": "espresso"
    },
    // # MOCHA
    {
        "name": "Iced Nes Mocha Coffee",
        "shortDesc": "",
        "longDesc": "",
        "imageUrl": "",
        "price": 5,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "",
        "type": "mocha"
    },
    {
        "name": "",
        "shortDesc": "",
        "longDesc": "",
        "imageUrl": "",
        "price": 5,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "",
        "type": "mocha"
    },
    // # CAPPUCCINO
    {
        "name": "",
        "shortDesc": "",
        "longDesc": "",
        "imageUrl": "",
        "price": 5,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "",
        "type": "cappuccino"
    },
    // # FLAVOURED
    {
        "name": "",
        "shortDesc": "",
        "longDesc": "",
        "imageUrl": "",
        "price": 5,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "",
        "type": "flavoured"
    },
    // # ICED COFFEE
    {
        "name": "Iced Nes MOCHA",
        "shortDesc": "",
        "longDesc": "Iced Nes MOCHA",
        "imageUrl": "/img/drinks/popular/products-coffee-1.png",
        "price": 1.50,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "nescafe-gold",
        "type": "iced-coffee"
    },
    {
        "name": "",
        "shortDesc": "",
        "longDesc": "",
        "imageUrl": "",
        "price": 5,
        "stockQuantity": 60,
        "size": [50],
        // #
        "bestSeller": true,
        "clerkId": "clerkId",
        "category": "drinks",
        "brand": "",
        "type": "iced-coffee"
    },
];