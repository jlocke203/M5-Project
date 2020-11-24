# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all 
Jewelry.destroy_all 


users = [
  {name: "Michael Jackson", size: 21 },
  {name:"Elvis Presley", size: 32 },
  {name: "Dennis Roadman", size: 25 }, 
  {name: "Michael Jackman", size: 16 },
  {name: "Zooey Saychannel", size: 41 },
  {name: "Lulu Rancor", size:33},
  {name: "Kanye East", size: 16 },
  {name: "The Weekday", size: 12  },
  {name: "The Pebble", size: 11 },
  {name: "Chocolate Ice", size: 24 },
  {name: "X  A-12", size: 29} 
]

jewelrys = [
    {
       name: "12MM 14K White Gold Diamond Miami Cuban Link Chain",
       description: "This hand set 12mm white gold prong link diamond Miami Cuban link chain is iconic in the jewelry world. Known to be durable and stylish. Each link is expertly set with brilliant round white VS diamonds. Our unique clasp is known to be the safest in the industry.",
       price: 3500, 
       image:  "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/170/602/C-126-1__41275.1581354800.jpg?c=2"
    },
    {
        name: "12MM 14K Rose Gold Diamond Miami Cuban Link Chain",
        description: "This hand set 12mm rose gold prong link diamond Miami Cuban link chain is iconic in the jewelry world. Known to be durable and stylish. Each link is expertly set with brilliant round white VS diamonds. Our unique clasp is known to be the safest in the industry.",
        price: 35000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/174/625/C-125-1__76080.1581957929.jpg?c=2"
    },
    {
        name: "13MM 14K Two Tone White & Rose Gold Diamond Miami Cuban Link Chain",
        description: "This diamond pave set Miami Cuban link chain is iconic in the jewelry world. Known to be durable and stylish. Each link is expertly set with brilliant round white VS diamonds. Our unique clasp is known to be the safest in the industry.",
        price: 40250,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/171/605/C-124-3__63403.1581460534.jpg?c=2"
    },
    {
        name: "14k Rose Gold Customizable Block Name Diamond Chain",
        description: "This customizable block letter chain is an Eliantte original design. This chain features solid gold letter blocks hand set with diamonds accented with solid gold ball beads. You can choose the option to customize the block letters to any name of your choosing between 4-8 characters. This chain is 8.5MM thick.",
        price: 27000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/169/601/CH-151_2_1__41164.1581109637.jpg?c=2"
    },
    {
        name: "14K White Gold Diamond Tennis Chain 7.88 CTW",
        description: "A classic diamond tennis chain is always a go-to option! This gorgeous diamond necklace is absolutely stunning. Featuring over 7 carats of shimmering round brilliant cut diamonds perfectly handset in a timeless three-prong setting. The premium VS grade diamonds define class and elegance. Designed in high polish 14k white gold. Whether worn with a pendant or alone this elegant chain is a must-have!",
        price: 10000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/136/468/CH-116-00012-for-web__09014.1576003754.jpg?c=2"
    },
    {
        name: "14K Yellow Gold Diamond Tennis Chain 7.88 CTW",
        description: "A classic diamond tennis chain is always a go-to option! This gorgeous diamond necklace is absolutely stunning. Featuring over 7 carats of shimmering round brilliant cut diamonds perfectly handset in a timeless three-prong setting. The premium VS grade diamonds define class and elegance. Designed in high polish 14k white gold. Whether worn with a pendant or alone this elegant chain is a must-have! ",
        price: 10000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/135/457/Gold-Tennis-Chain-00003-for-web__30636.1576001475.jpg?c=2"
    }, 
    {
        name: "14MM 14K Rose Gold Diamond Miami Cuban Link Chain",
        description: "This hand set prong link diamond Miami Cuban link chain is iconic in the jewelry world. Known to be durable and stylish. Each link is expertly set with brilliant round white VS diamonds. Our unique triple lock clasp is known to be the safest in the industry.",
        price: 50000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/173/614/ch-076-2__63523.1581954010.jpg?c=2"
    },
    {
        name: "15MM 14K Two Tone White & Rose Gold Diamond Miami Cuban Lin",
        description: "This hand set diamond Miami Cuban link chain is iconic in the jewelry world. Known to be durable and stylish. Each link is expertly set with brilliant round white VS diamonds. Our unique clasp is known to be the safest in the industry.",
        price: 55000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/172/613/C-129-3__86202.1581548164.jpg?c=2"
    },
    {
        name: "18k Rose Gold Diamond Odin Link Chain 33.30CTW",
        description: "This classic link has been modernized by Eliantte. Hand set with brilliant cut diamonds in beautiful rose gold. This design is elegant and can be worn on its own or with a pendant. If the length you require isn't listed please contact us. A custom specialist will be more than happy to personally assist you.",
        price: 45000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/185/666/CH-143-1__58181.1583179747.jpg?c=2"
    },
    {
        name: "18k White Gold Diamond Odin Link Chain 43.35CTW",
        description: "This classic link has been modernized by Eliantte. Hand set with brilliant cut diamonds. This design is elegant and can be worn on its own or with a pendant. If the length you require isn't listed please contact us. A custom specialist will be more than happy to personally assist you.",
        price: 55000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/151/521/CH-142-2__87717.1578594631.jpg?c=2"
    },
    {
        name: "18MM 14K Rose Gold Diamond Miami Cuban Link Chain",
        description: "This pave diamond Miami Cuban link chain is iconic in the jewelry world. Known to be durable and stylish. Each link is expertly set with brilliant round white VS diamonds. Our unique clasp is known to be the safest in the industry.",
        price: 75000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/187/675/ch-009-1__10505.1583182451.jpg?c=2"
    },
    {
        name: "19MM 14K White Gold Diamond Miami Cuban Link Chain",
        description: "This pave diamond Miami Cuban link chain is iconic in the jewelry world. Known to be durable and stylish. Each link is expertly set with brilliant round white VS diamonds. Our unique clasp is known to be the safest in the industry.",
        price: 70000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/166/588/C-122-3__55064.1580832613.jpg?c=2"
    }, 
    {
        name: "6MM 14k Rose Gold Diamond Ball Bead Chain",
        description: "This Eliantte designed 14k rose gold diamond ball chain is very unique. It features over 10 carats of round cut diamonds pavé set on the surface area of the 3D ball design. It is super stylish and is the ultimate accessory for everyday wear. This piece is 40 inches in length, its meant to be worn wrapped having a 18 inch drop as pictured in the images above.",
        price: 22000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/168/594/CH-135-2_1__52046.1581031614.jpg?c=2"
    }, 
    {
        name: "Eliantte Infinity Collection Diamond Chain 18mm",
        description: "An Eliantte original design, this diamond set infinity link chain showcases our VS1 diamonds. Featuring a unique setting style focusing on brilliant round cut diamonds pushing out towards the edge of the link. This is a true statement piece. Show off your style and class with this elegant chain.",
        price: 80000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/205/752/CH-086-3__26821.1584379467.jpg?c=2"

    }, 
    {
        name: "5pt Miracle Set Necklace 14k 7.88ctw",
        description: "This Icebox 5pt Miracle Set Necklace is made of solid 14K White gold and is 5Ptr thick.",
        price: 10009,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/d2fbd85c3d8f9f078e0c32304d9f4e59.jpg"
    }, 
    {
        name: "Eternity Round Bezel Set Necklace 14k 3.75ctw",
        description: "This Icebox Eternity Round Bezel Set is made of 14K White gold with 3.75ctw of diamonds. This piece is handcrafted and manufactured by Icebox. ",
        price: 4575,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/ad4203f1708c90f132cbafc8aa5790d0.jpg"
    },
    {
        name: "Diamond Mariner Link Chain 45.5mm Necklace 14k 95.67ctw",
        description: "This Icebox Mariner Link Necklace is made of solid 14K Yellow gold and is 45.5mm thick.",
        price: 143505,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/41be64b6a34baaba220fed721ec3235d.jpg"
    },
    {
        name: "Diamond 12pt Miracle Chain 12ptr Necklace 14k 12.14ctw",
        description: "This Icebox 12pt Miracle Necklace is made of 14K Yellow gold with 12.14ctw of diamonds.

        This piece is handcrafted and manufactured by Icebox.",
        price: 16385,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/c07306c678e72ca90e854891eee30bc6.jpg"
    },
    {
        name: "Diamond Rosary Bead Chain Necklace 14k 2.87ctw",
        description: "This Icebox Rosary Bead Necklace is made of solid 14K Yellow gold and is thick.",
        price: 6595,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/a7fc851bacd8a6bd9c27f6b6fb4b70ee.jpg"
    },
    {
        name: "Diamond Mariner Link Chain 25.8mm Necklace 14k 40.40ctw",
        description: "This Icebox Mariner Link Necklace is made of solid 14K White gold and is 25.8mm thick.",
        price: 64500,
image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/8aea154de7651b0ff3eb8d4635452b46.jpg"
    },
    {
        name: "Ak47 Gun Pendant 14k 0.15ctw",
        description: " This Icebox AK47 Gun Pendant is made of 14K Yellow gold with 0.15ctw of diamonds.",
        price: 670,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/226d6985f5e4a61dd6deb9f54aeb176a.jpg"
    },
    {
        name: "Butterfly Pendant 14k 0.40ctw",
        description: "This Icebox Butterfly Pendant is made of 14K Yellow gold with 0.40ctw of diamonds.",
        price: 970,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/ae00b51d69a83a89974e624afa1a0f1d.jpg"
    }, 
    {
        name: "Prayer Hands Pendant 14k 8.80ctw",
        description: "This Icebox Prayer Hands Pendant is made of 14K Yellow gold with 8.80ctw of diamonds.",
        price: 12000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/2496cfaef9f10afcffafb939b65f3a61.jpg"
    },
    {
        name: "Saturn Pendant 14k 0.38ctw",
        description: "This Icebox Saturn Pendant is made of 14K White gold with 0.38ctw of diamonds.",
        price: 890,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/21513df69e8c7893a7cd3c1c854edd6b.jpg"
    },
    {
        name: "Ice Cream Pendant 14K 0.15ctw",
        description: "This Icebox Ice Cream Pendant is made of 14K Yellow gold with 0.15ctw of diamonds",
        price: 905,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/d9b55dd5b19ecbc76720cdc4025a1d5a.jpg"
    },
    {
        name: "Purple Double Cup Pendant 14k 0.24ctw (vvs)",
        description: "This Icebox Purple Double Cup Pendant is made of 14K White gold with 0.24ctw of diamonds.",
        price: 900,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/39c95478cf17171294da07c1536e34e0.jpg"
    }, 
    {
        name: "Nefertiti Pendant 14k 0.35ctw",
        description: "This Icebox Nefertiti Pendant is made of 14K Yellow gold with 0.35ctw of diamonds.",
        price: 50000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/acd2bd91a967b8fd68e1fe09c3bbab1f.jpg"
    },
    {
        name: "Peace Sign Pendant 14k 0.27ctw",
        description: "This Icebox Peace Sign Pendant is made of 14K Yellow gold with 0.27ctw of diamonds.",
        price: 790,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/7c8a2b99e8875b22108e86edd27ad4c5.jpg"
    },
    {
        name: "Burning Joint Pendant 14k 1.27ctw",
        description: "This Icebox Burning Joint Pendant is made of 14K White gold with 1.27ctw of diamonds.",
        price: 2200 ,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/c6277655de0480076644d38d4f908bd6.jpg"
    },
    {
        name: "Raygun Pendant 14K 0.33ctw",
        description: "This Icebox Raygun Pendant is made of 14K Yellow gold with 0.33ctw of diamonds.",
        price: 600,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/d21d0ac65a3b5237a68cf847a666a339.jpg"
    },
    {
        name: "Triple Cross Pendant 14K 0.45ct",
        description: "This Icebox Triple Cross Pendant is made of 14K Yellow gold with 0.45ctw of diamonds.",
        price: 1215,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/61671c4cecc3f36c3be5fe1eae141d08.jpg"
    },
    {
        name: "Hidden Bail Cross Pendant 14k 0.38ctw",
        description: "This Icebox Hidden Bail Cross Pendant is made of 14K Yellow gold with 0.38ctw of diamonds.",
        price: 800,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/2e76e8956c71cd4d9762b36f5cb916a2.jpg"
    },
    {
        name: "Ghost Emoji Pendant 14k 0.55ctw",
        description: "This Icebox Ghost Emoji Pendant is made of 14K White gold with 0.55ctw of diamonds.",
        price: 1150,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/e1b73ff19aee01ed70c3046538a0e983.jpg"
    },
    {
        name: "Standing Goat Pendant 14k 0.68ctw",
        description: "This Icebox Standing Goat Pendant is made of 14K White gold with 0.68ctw of diamonds.",
        price: 1150,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/25c89bec8343052ab647c4d98ca4c8a4.jpg"
    },
    {
        name: "Jesus Piece Pendant 14k 1.00ctw",
        description: "This Icebox Jesus Piece Pendant is made of 14K Yellow gold with 1.00ctw of diamonds",
        price: 3750,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/2b409aa75fcf04a41ffae11b0a6cacb3.jpg"
    },
    {
        name: "420 Weed Leaf Pendant 14k 0.97ctw",
        description: "This Icebox 420 Weed Leaf Pendant is made of 14K White gold with 0.97ctw of diamonds.",
        price: 1750,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/66a5d4e839326c4369123156fd13dd3d.jpg"
    },
    {
        name: "Heart Pendant 14k 1.29ctw",
        description: "This Icebox Heart is made of 14K Yellow gold with 1.29ctw of diamonds.",
        price: 2000,
image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/db04514b388c92b33cb456c5e26d6fe0.jpg"
    },
    {
        name: "Alien Head Pendant 14k 0.56ctw",
        description: "This Icebox Alien Head Pendant is made of 14K White gold with 0.56ctw of diamonds",
        price: 1000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/a7ce755ee853b3f3fb2b2ccdeda49ae4.jpg"
    },
    {
        name: "Raindrop Pendant 14k 0.33ctw",
        description: "This Icebox Raindrop Pendant is made of 14K Yellow gold with 0.33ctw of diamonds.",
        price: 900,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/eb17cd1b1e9a19836ae521e92ee1a4b6.jpg"
    }, 
    {
        name: "Skateboard Pendant 14k 0.39ctw",
        description: "This Icebox Skateboard Pendant is made of 14K Yellow gold with 0.39ctw of diamonds.",
        price: 940,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/59d7f0ae0cec36385443713ce39955d0.jpg"
    },
    {
        name: "1.50CT Round-Cut Diamond Engagement Ring 18k",
        description: "This handcrafted 18k gold Diamond Engagement Ring is modern with a classic look. This beautiful diamond band is intricately hand carved by our artisans inspired by our iconic u-cut diamond setting designs. The band compliments the center stone with beautiful accent stones. This ring is a sure way to make any one happy.",
        price: 21500,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/128/432/M13031R-2-3__37619.1575575135.jpg?c=2"
    },
    {
        name: "1.52CT Asscher-Cut Diamond Engagement Ring 18k",
        description: "Metal weight will vary according to ring size.",
        price: 23500,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/129/437/BA504ER-1-2__13051.1575573316.jpg?c=2"
    },
    {
        name: "2.03 CT Asscher-Cut Diamond Engagement Ring 18k",
        description: "Metal weight will vary according to ring size. ",
        price: 51000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/130/438/BA681R-1-1__04211.1575597526.jpg?c=2"
    },
    {
        name: "2.50 Carat Emerald-Cut Diamond Engagement Ring",
        description: "Simple and elegant, but boldly luxurious, this three-stone diamond ring is an absolutely brilliant creation. Crafted from highly-polished platinum and featuring a step-cut design, this engagement ring showcases a brilliant 2.01 carat, emerald-cut diamond center stone prong-set between two lustrous trapezoid-cut diamonds.",
        price: 40000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/117/384/test_engagemnt__89523.1560877052.jpg?c=2"
    }, 
    {
        name: "3.09 CT EMERALD-CUT DIAMOND ENGAGEMENT RING PLATINUM",
        description: "Metal weight will vary according to ring size",
        price: 80000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/132/447/BA723R-2__84546.1575675449.jpg?c=2"
    }, 
    {
        name: "6.05 CT Emerald-Cut Diamond Engagement Ring Platinum",
        description: "Simple and elegant, but boldly luxurious, this three-stone diamond ring is an absolutely brilliant creation. Crafted from highly-polished platinum and featuring a step-cut design, this engagement ring showcases a brilliant 2.01 carat, emerald-cut diamond center stone prong-set between two lustrous trapezoid-cut diamonds.",
        price: 425000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/131/442/BA892ER-3__85465.1575674556.jpg?c=2"
    }, 
    {
        name: "Platinum Emerald-Cut Diamond Eternity Band 15.30CT",
        description: "none",
        price: 138750,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/144/492/BA1095EW-1__76774.1576528660.jpg?c=2"
    }, 
    {
        name: "18k White Gold Princess Cut Eternity Band 4.00CT",
        description: "This unique eternity band shines bright with endless row of princess cut diamonds. The hand-set VS diamonds are set in a 18K gold shared prong setting. Minimizing the amount of prongs and maximizing brilliance of the diamonds",
        price: 10000,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/153/533/R-011_FRONT__92777.1579040830.jpg?c=2"
    }, 
    {
        name: "18K Rose Gold Brilliant Cut Diamond Eternity Band 2.40CT",
        description: "This unique eternity band shines bright with endless row of brilliant cut diamonds. The hand-set VS diamonds are set in a 18K rose gold u-cut prong setting. Maximizing brilliance of the diamonds",
        price: 5600,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/193/698/ER16342-5-1_1__98288.1583271929.jpg?c=2"
    }, 
    {
        name: "18K Rose Gold Pink and White Diamond Eternity Band 3.38CT",
        description: "This luxurious eternity band is hand made in 18k rose gold featuring hand set white emerald diamonds accented by pink brilliant cut round diamonds. A unique look for a true Eliantte fan.",
        price: 12400,
        image: "https://cdn11.bigcommerce.com/s-wb2gsypvks/images/stencil/500x500/products/189/683/LKR202-8-1__31086.1583188564.jpg?c=2"
    }, 
    {
        name: "Yacht-Master 2 41mm 14k Iced Out",
        description: "This Yacht-Master 2 is made of 14K Steel and has a 41mm case size with Iced Out of handset diamonds added by Icebox. Our expert watchmakers have serviced this watch inside and out to quality standards.",
        price: 210000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/e05d8044ea71b30ac90ec302484fae8f.jpg"
    }, 
    {
        name: "Rolex Datejust 36mm 18K/SS 3.39ctw",
        description: "This Rolex Datejust is made of 18K/SS Two-Tone and has a 36MM case size with 3.39ctw of handset diamonds added by Icebox. Our expert watchmakers have serviced this watch inside and out to Rolex quality standards.",
        price: 250000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/cad37f6d6a8b33b24eb8b74915e50a0b.jpg"
    }, 
    {
        name: "Datejust 36mm 18K/SS 2.50ctw",
        description: "This Unisex Rolex Datejust is made of 18K/SS and has a 36MM case size with 2.50ctw of handset diamonds added by Icebox. Our expert watchmakers have serviced this watch inside and out to Rolex quality standard",
        price: 45000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/684bd31266e7535484bcae5d0277ddfa.jpg"
    },
    {
        name: "Icebox Hublot Big Bang Black Strap & Diamond Bezel Black Dial 44mm SS 5.00ctw",
        description: "This Male Icebox Hublot Big Bang Black Strap & Diamond Bezel Black Dial is made of SS and has a 44mm case size with 5.00ctw of handset diamonds added by Icebox. Our expert watchmakers have serviced this watch inside and out to Icebox quality standards.",
        price: 320000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/aa1743fddc1635746474932f05f76f23.jpg"
    },
    {
        name: "Rolex Datejust 26mm 18K/SS 1.29ctw",
        description: "This Icebox Datejust is made of 18K/SS Two-Tone gold with 1.29ctw of diamonds. This piece is handcrafted and manufactured by Icebox. All of the diamonds are hand-set by a master diamond setter in the highest quality craftsmanship.",
        price: 334000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/7d64f95ca8d48c125f6ad483987c8230.jpg"
    }, 
    {
        name: "Datejust 36mm SS 2.10ctw",
        description: "This Icebox Datejust is made of SS Steel gold with 2.10ctw of diamonds. This piece is handcrafted and manufactured by Icebox. All of the diamonds are hand-set by a master diamond setter in the highest quality craftsmanship.",
        price: 23000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/56baccd9c4dc3571e93128a213f6b9e4.jpg"
    },
    {
        name: "Cartier Santos Black Strap 38mm SS 11.73ctw",
        description: "This Cartier Santos Black Strap is made of SS Steel and has a 38mm case size with 11.73ctw of handset diamonds added by Icebox. Our expert watchmakers have serviced this watch inside and out to quality standards.",
        price: 90000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/1d14b21310f284acb2b645fd029755e7.jpg"
    }, 
    {
        name: "Rolex Datejust 31mm SS 7.84ctw",
        description: "This Female Rolex DateJust is made of SS and has a 31MM case size with 7.84ctw of handset diamonds added by Icebox. Our expert watchmakers have serviced this watch inside and out to Rolex quality standards.",
        price: 67000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/e311e8c0c9e28c520af14d791be64e3b.jpg"
    },
    {
        name: "Rolex Datejust 31mm SS 7.41ctw",
        description: "This Female Rolex DateJust is made of SS and has a 31MM case size with 7.41ctw of handset diamonds added by Icebox. Our expert watchmakers have serviced this watch inside and out to Rolex quality standards.",
        price: 80000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/ec832d9c26ba5f60e660937b9f26c609.jpg"
    },
    {
        name: "Custom Cartier Chronograph - Male 24.50ctw",
        description: "This Icebox Chronograph is made of SS Steel gold with 24.50ctw of diamonds. This piece is handcrafted and manufactured by Icebox. All of the diamonds are hand-set by a master diamond setter in the highest quality craftsmanship.",
        price: 90000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/1329f5560156053e85d573a82bb078a2.jpg"
    },
    {
        name: "Pre-Owned Rolex Datejust 36mm SS 13.11ctw",
        description: "This Male Rolex DateJust is made of SS and has a 36MM case size with 13.11ctw of handset diamonds added by Icebox. Our expert watchmakers have serviced this watch inside and out to Rolex quality standards",
        price: 70000,
        image: "https://www.icebox.com/unsafe/800x600/icebox-jewelry.s3.amazonaws.com/products/efd764a54710da518517c6f1ef5b9859.jpg"
    }
    
]


users.each { |user|
User.create(name: user[:name], size: user[:size])
}

jewelrys.each { |jewelry|
    Jewelry.create(name: jewelry[:name], description: jewelry[:description], price: jewelry[:price], image: jewelry[:image])
    CustomPiece.create(user_id: User.all.sample.id, description: "so icy")
}

puts "welcome to pluto"






