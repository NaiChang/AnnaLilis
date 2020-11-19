
// var mycart = new Vue ({
//     el:'#mycart',
//     data:{
//         itemList:[
//             {
//                 id:'1',
//                 itemName:'Rose Gold EarringsSlivery Medal Anklet',
//                 price:'3000',
//                 count:'2',
//             },
//             {
//                 id:'2',
//                 itemName:'Slivery Medal Anklet',
//                 price:'3000',
//                 count:'1',
//             },
//             {
//                 id:'3',
//                 itemName:'Classic Slivery',
//                 price:'3000',
//                 count:'1',
//             },
//         ]
//     },
//     methods:{
//         handlePlus: function(item){
//             item.count++;
//         },
//         handleSub: function(item){
//             if(item.count>1){
//                 item.count--;
//             }
//         },
//         handledelete: function(index){
//             console.log(this);
//             this.itemList.splice(index,1);
//         }
//     },
//     computed:{

//     },
// });


new Vue({
    el: "#calc",
    data: {
        productA: {price: 3000, count: 1, total: 3000},
        productB: {price: 3000, count: 1, total: 3000},
        productC: {price: 3000, count: 1, total: 3000},
    },
    methods: {
        add : function(product) {
            product.count++;
            product.total = product.price * product.count;
        },
        reduce : function(product) {
            if (product.count > 0) product.count--;
            product.total = product.price * product.count;
        }
    }
});