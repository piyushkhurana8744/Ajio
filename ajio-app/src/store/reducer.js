import React from 'react'
let store_data = {
  data: [

    {
      "id": 1,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20221114/f4K9/63726e8eaeb269659c8c2050/-473Wx593H-469217948-red-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20221114/BBhR/637262b9aeb269659c8be735/-78Wx98H-469217948-red-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20221114/EUgF/637281b6f997ddfdbd7467e3/-78Wx98H-469217948-red-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220708/mdzO/62c85a9cf997dd03e2c5cf06/-78Wx98H-469217948-red-MODEL4.jpg"
      ],
      "title": "Logo Print Round-Neck Sweatshirt",
      "brand": "LEVIS",
      "price": 875,
      "offer_percent": 65,
      "category": {
        "gender": "Men",
        "type": "Sweatshirt & Hoodies",
        "model": "Western Wear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 2,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220817/ufyt/62fd02efaeb2691761801d5c/-473Wx593H-469271329-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20221121/DCAz/637b5482aeb269659c9f6ef6/-78Wx98H-469084071-grey-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20221121/v3c3/637b5697aeb269659c9f7cfc/-78Wx98H-469084071-grey-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20221121/dOa2/637b5513f997ddfdbd8773ae/-78Wx98H-469084071-grey-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20221121/jzqu/637b5526aeb269659c9f76b8/-78Wx98H-469084071-grey-MODEL5.jpg"
      ],
      "title": "Mid-Wash Slim Fit Jeans",
      "brand": "LEVIS",
      "price": 1363,
      "offer_percent": 53,
      "category": {
        "gender": "Men",
        "type": "Jeans",
        "model": "Western Wear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 3,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220706/lu1k/62c5a38aaeb26921af667c2d/-473Wx593H-469217984-green-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220706/QU6k/62c5a02baeb26921af6668a0/-78Wx98H-469217984-green-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220706/wJ4x/62c5aa0bf997dd03e2bfbb0b/-78Wx98H-469217984-green-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220706/lu1k/62c5a38aaeb26921af667c1b/-78Wx98H-469217984-green-MODEL4.jpg"
      ],
      "title": "Logo Print Crew-Neck Sweatshirt",
      "brand": "LEVIS",
      "price": 1000,
      "offer_percent": 60,
      "category": {
        "gender": "Men",
        "type": "Swearshirt & Hoodies",
        "model": "Western Wear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 4,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220708/7TlT/62c85e66aeb26921af6c76e5/-473Wx593H-469217950-blue-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220708/8LDD/62c86b9cf997dd03e2c634c1/-473Wx593H-469217950-blue-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220708/pBoU/62c85151aeb26921af6c34cc/-78Wx98H-469217950-blue-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220708/8LDD/62c86b9cf997dd03e2c634c1/-473Wx593H-469217950-blue-MODEL4.jpg"
      ],
      "title": "Printed Round-Neck Sweatshirt",
      "brand": "LEVIS",
      "price": 875,
      "offer_percent": 65,
      "category": {
        "gender": "Men",
        "type": "Swearshirt & Hoodies",
        "model": "Western Wear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 5,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 6,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220610/WTFw/62a250e1f997dd03e26fc198/-78Wx98H-469218022-yellow-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220610/XpUl/62a24e8aaeb26921af1a3153/-78Wx98H-469218022-yellow-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220610/gZkv/62a2481ff997dd03e26f9adf/-78Wx98H-469218022-yellow-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220610/So18/62a23ebbf997dd03e26f727e/-78Wx98H-469218022-yellow-MODEL4.jpg"
      ],
      "title": "Colorblock Panelled Slim Fit Hoodie",
      "brand": "LEVIS",
      "price": 1935,
      "offer_percent": 55,
      "category": {
        "gender": "Men",
        "type": "Jackest & Coats",
        "model": "Western Wear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 7,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220706/J89k/62c48d1eaeb26921af654afe/-78Wx98H-469203856-red-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220706/nKTZ/62c48789aeb26921af6536b0/-78Wx98H-469203856-red-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220706/Z6AO/62c499bef997dd03e2be7fd8/-78Wx98H-469203856-red-MODEL3.jpg"
      ],
      "title": "Brand Print Crew-Neck Sweatshirt",
      "brand": "LEVIS",
      "price": 1310,
      "offer_percent": 43,
      "category": {
        "gender": "Women",
        "type": "Sweatshirt & Hoodies",
        "model": "Western Wear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 8,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220704/TnwV/62c2ff0faeb26921af5ef60a/-78Wx98H-460967099-pink-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220704/0Mwn/62c2fb5daeb26921af5ee31e/-78Wx98H-460967099-pink-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220704/RXHn/62c2fd2ff997dd03e2b7956c/-78Wx98H-460967099-pink-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220704/feVK/62c30260f997dd03e2b7b4b2/-78Wx98H-460967099-pink-MODEL4.jpg"
      ],
      "title": "Typographic Print Crew-Neck Sweatshirt",
      "brand": "LEVIS",
      "price": 1499,
      "offer_percent": 40,
      "category": {
        "gender": "Women",
        "type": "Swearshirt & Hoodies",
        "model": "Western Wear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 9,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220720/9pXj/62d81c3caeb26921af89312d/-78Wx98H-469203893-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220720/7sgW/62d81ad2aeb26921af892b0b/-78Wx98H-469203893-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220720/cNO5/62d81d2caeb26921af893665/-78Wx98H-469203893-black-MODEL3.jpg"
      ],
      "title": "Brand Print Slim Fit Crew-Neck T-shirt",
      "brand": "LEVIS",
      "price": 615,
      "offer_percent": 44,
      "category": {
        "gender": "Women",
        "type": "Tshirts",
        "model": "Western Wear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 10,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220125/UUcK/61ef0912aeb2695cdd2b13f5/-78Wx98H-460960861-blackwhite-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220125/EZ6W/61eef561aeb2695cdd2ac62e/-78Wx98H-460960861-blackwhite-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220125/hVVg/61ef0c90f997dd66233866cb/-78Wx98H-460960861-blackwhite-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220125/WXJA/61ef0e8aaeb2695cdd2b594b/-78Wx98H-460960861-blackwhite-MODEL4.jpg"
      ],
      "title": "Logo Print Crew-Neck T-shirt",
      "brand": "ADIDAS",
      "price": 779,
      "offer_percent": 48,
      "category": {
        "gender": "Men",
        "type": "Tshirts",
        "model": "Western Wear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 11,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20211014/IxgA/6167388bf997ddf8f1cfa1de/-78Wx98H-460738294-blue-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20211014/6CxG/61672ce2aeb269011090b7c5/-78Wx98H-460738294-blue-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20211014/4Tmp/61674279f997ddf8f1d03191/-78Wx98H-460738294-blue-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20211014/nBr1/616742a1aeb2690110917495/-78Wx98H-460738294-blue-MODEL4.jpg"
      ],
      "title": "Statix M Low-Top Sports Shoes",
      "brand": "ADIDAS",
      "price": 1440,
      "offer_percent": 52,
      "category": {
        "gender": "Men",
        "type": "Sport Shoes",
        "model": "Footwear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 12,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220311/Yp2x/622a5400f997dd03e20c7778/-78Wx98H-469131132-blue-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220311/3REU/622a5ba8aeb26921afd26525/-78Wx98H-469131132-blue-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220311/BX1F/622a55d5f997dd03e20c7dc5/-78Wx98H-469131132-blue-MODEL3.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220311/Nqfs/622a47a6f997dd03e20c41e8/-78Wx98H-469131132-blue-MODEL4.jpg"
      ],
      "title": "Shorts with Striped Panels",
      "brand": "ADIDAS",
      "price": 1025,
      "offer_percent": 43,
      "category": {
        "gender": "Men",
        "type": "Shorts & 3/4ths",
        "model": "Western Wear"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 13,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 14,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 15,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 16,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 17,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 18,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 19,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 20,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 21,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 22,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 23,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 24,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 25,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 26,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    },
    {
      "id": 27,
      "image": [
        "https://assets.ajio.com/medias/sys_master/root/20220826/gpd9/6307d653aeb2691761a6a39a/-78Wx98H-469267786-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/uGIL/6307c9fdf997dd394c26655b/-78Wx98H-469267786-black-MODEL2.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20220826/aahm/6307d606aeb2691761a6a255/-78Wx98H-469267786-black-MODEL3.jpg"
      ],
      "title": "Basket-Weave Belt with Buckle Closure",
      "brand": "LEVIS",
      "price": 850,
      "offer_percent": 50,
      "category": {
        "gender": "Men",
        "type": "Bags,Belts & Wallets",
        "model": "Belts"
      },
      "size": [
        "M",
        "S",
        "L",
        "XL",
        "XXL",
        "XXXL"
      ],
      "Quantity": 1
    }

  ],
  cart: [],
  mydata: [],
  myImage: "",
  myPage: {},
  isAuth: "false"

}
export const reducer = (storedata = store_data, action) => {
  switch (action.type) {
    case "add": {
      return {
        ...storedata,
        data: action.payload
      }
    }
    case "change": {
      return {
        ...storedata,
        mydata: action.payload
      }
    }
    case "DELETE": {
      return {
        ...storedata,
        cart: action.payload
      }
    }
    case "setImage": {
      return {
        ...storedata,
        myImage: action.payload
      }
    }

    case "RefreshPage": {
      return {
        ...storedata,
        myPage: action.payload
      }
    }

    case "CART": {
      return {
        ...storedata,
        cart: action.payload
      }
    }

    case "LOGIN": {
      return {
        ...storedata,
        isAuth: true
      }
    }

    default: {
      return storedata
    }
  }
}
