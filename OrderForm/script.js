var mycart = new Vue({
    el:'#myacrt',
    data:{
        itemList:[
            {
                id:'1',
                itemName:'Rose Gold EarringsSlivery Medal Anklet',
                price:'3000',
                count:'2',
            },
            {
                id:'2',
                itemName:'Slivery Medal Anklet',
                price:'3000',
                count:'1',
            },
            {
                id:'3',
                itemName:'Classic Slivery',
                price:'3000',
                count:'1',
            },
        ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
                item.count--;
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
    },
    computed:{

    },
});