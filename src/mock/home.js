import Mock from 'mockjs';


export default {
    getHomeData:()=>{
        return{
            code:200,
            data:{
                videoData:[
                    {
                      name:'SpringBoot',
                      value:Mock.Random.float(1000,10000,0,2)  
                    },
                    {
                        name:'Vue',
                        value:Mock.Random.float(1000,10000,0,2)  
                      },
                      {
                        name:'uniapp',
                        value:Mock.Random.float(1000,10000,0,2)  
                      },
                      {
                        name:'java',
                        value:Mock.Random.float(1000,10000,0,2)  
                      },
                      {
                        name:'python',
                        value:Mock.Random.float(1000,10000,0,2)  
                      },
                      {
                        name:'php',
                        value:Mock.Random.float(1000,10000,0,2)  
                      },
                ]
            }
        }
    }
}