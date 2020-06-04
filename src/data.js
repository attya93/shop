const store = {

    product:
    {
        categoris: {
            realme: [
                {
                    _id: "1",
                    cat: "realme",
                    index: 0,
                    ProdName: "3 Pro",
                    prodTyp: "Realme",
                    isNew: true,
                    isAvailble: true,
                    price: 4750,
                    quantitBox: 20,
                    quantityInBox: 40,
                    desc: "This is new Phone from Realme company , it is a beauful cell phone ever",
                    color: ["red", "blue", "porpule"],
                    Specifications: { ram: "6GB", processor: "snapdragpin710", storge: "128GB", screen: "5.5 Inch FullHD+" },
                    img: "https://mobizil.com/wp-content/uploads/2019/04/realme-3-pro-1.jpg"
                },
                {
                    _id: "2",
                    index: 1,
                    cat: "realme",
                    ProdName: "5 Pro",
                    prodTyp: "Realme",
                    isNew: false,
                    isAvailble: true,
                    price: 5750,
                    quantitBox: 20,
                    quantityInBox: 40,
                    desc: "This is new Phone from Realme company , it is a beauful cell phone ever",
                    color: ["red", "blue", "porpule"],
                    Specifications: { ram: "6GB", processor: "snapdragpin710", storge: "128GB", screen: "5.5 Inch FullHD+" },
                    img: "https://mobizil.com/wp-content/uploads/2019/10/box-2-800x675.jpg"
                },
                {
                    _id: "3",
                    index: 2,
                    cat: "realme",
                    ProdName: "6 Pro",
                    prodTyp: "Realme",
                    isNew: true,
                    isAvailble: false,
                    price: 6550,
                    quantitBox: 20,
                    quantityInBox: 40,
                    desc: "This is new Phone from Realme company <3 , it is a beauful cell phone ever",
                    color: ["red", "blue", "porpule"],
                    Specifications: { ram: "8GB", processor: "snapdragpin710", storge: "128GB", screen: "5.5 Inch FullHD+" },
                    img: "https://mobizil.com/wp-content/uploads/2020/03/Realme-6-Pro-3.jpg"
                },
                {
                    _id: "4",
                    index: 3,
                    cat: "realme",
                    ProdName: "6 ",
                    prodTyp: "Realme",
                    isNew: false,
                    isAvailble: true,
                    price: 6050,
                    quantitBox: 20,
                    quantityInBox: 40,
                    desc: "This is new Phone from Realme company <3 , it is a beauful cell phone ever",
                    color: ["red", "blue", "porpule"],
                    Specifications: { ram: "6GB", processor: "snapdragpin710", storge: "128GB", screen: "5.5 Inch FullHD+" },
                    img: "https://mobizil.com/wp-content/uploads/2020/03/Realme-6-Pro-3.jpg"
                }
                ,
                {
                    _id: "5",
                    index: 4,
                    cat: "realme",
                    ProdName: "6 ",
                    prodTyp: "Realme",
                    isNew: false,
                    isAvailble: true,
                    price: 6050,
                    quantitBox: 20,
                    quantityInBox: 40,
                    desc: "This is new Phone from Realme company <3 , it is a beauful cell phone ever",
                    color: ["red", "blue", "porpule"],
                    Specifications: { ram: "6GB", processor: "snapdragpin710", storge: "128GB", screen: "5.5 Inch FullHD+" },
                    img: "https://mobizil.com/wp-content/uploads/2020/03/Realme-6-Pro-3.jpg"
                },
                {
                    _id: "6",
                    index: 5,
                    cat: "realme",
                    ProdName: "6 ",
                    prodTyp: "Realme",
                    isNew: false,
                    isAvailble: true,
                    quantitBox: 20,
                    quantityInBox: 40,
                    price: 6050,
                    desc: "This is new Phone from Realme company <3 , it is a beauful cell phone ever",
                    color: ["red", "blue", "porpule"],
                    Specifications: { ram: "6GB", processor: "snapdragpin710", storge: "128GB", screen: "5.5 Inch FullHD+" },
                    img: "https://mobizil.com/wp-content/uploads/2020/03/Realme-6-Pro-3.jpg"
                }
            ],
            Apple: [
                {
                    _id: "1",
                    index: 0,
                    cat: "Apple",
                    ProdName: "6s",
                    prodTyp: "Iphone",
                    isNew: false,
                    isAvailble: true,
                    price: 6550,
                    quantitBox: 20,
                    quantityInBox: 20,
                    desc: "This is new Phone from Apple company <3 , it is a beauful cell phone ever",
                    color: ["red", "blue"],
                    Specifications: { ram: "3GB", processor: "AppleA3", storge: "64GB", screen: "4.9 Inch FullHD+" },
                    img: "https://mobizil.com/wp-content/uploads/2017/01/main-qimg-e5c46d50c2044c0406887bdd81a479b1-c.jpg"
                },
                {
                    _id: "2",
                    index: 1,
                    cat: "Apple",
                    ProdName: "7 ",
                    prodTyp: "IPhone",
                    isNew: true,
                    isAvailble: true,
                    price: 8550,
                    quantitBox: 20,
                    quantityInBox: 20,
                    desc: "This is new Phone from Apple company <3 , it is a beauful cell phone ever",
                    color: ["red", "blue"],
                    Specifications: { ram: "3GB", processor: "AppleA3", storge: "64GB", screen: "4.9 Inch FullHD+" },
                    img: "https://mobizil.com/wp-content/uploads/2017/01/product-1-800x800.jpg"
                }
            ]
        }
    },
    user: {
        _id: new Date().toISOString(),
        name: "Moahmmed Mamdouh",
        email: "test@test.com",
        mobile: "123"
    }
};

export default store;