define(function(){
    return {
        capabilities : {
        },
        configuration: {
            ui : {
                list: {
                    'vertical-align':'top'
                }
            },
            chrome : {
                bars : [
                    {
                        position: 'top',
                        mode : 'push' // push | overlay
//                        template: 'home-appTitle-clock'
                        //template: 'home-appIcon-appTitle-clock'
                    }
                ]
            }
        }
    };
});
