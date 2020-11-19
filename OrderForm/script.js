var mycart = new Vue({
    el:'#myacrt',
    data:{
        itemList:[
            {
                id:'1',
                itemName:'FEATHER_玫瑰金黑_穿孔耳環',
                price:'580',
                count:'2',
            },
            {
                id:'2',
                itemName:'WING_銀亮金白_穿孔耳環',
                price:'680',
                count:'1',
            },
            {
                id:'3',
                itemName:'GEM_寶石綠_穿孔耳環',
                price:'780',
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