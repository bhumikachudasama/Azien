import React from 'react'
import { View,Text,Button,StyleSheet, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper'

export default function Men() {
    return(

    <ScrollView style={{flex:1}} >

         {/*header style */}
<View style={styles.header} >
          <Text style={styles.headerfont} >Azien</Text>
      </View>

       { /*first Swiper */ }
        <View>
        <Swiper height={170} autoplay={true} style={{marginTop:30}} >          
        <Image source={require('../assest/menC1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/menC2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/menC3.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/menC4.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        </Swiper>
        </View>

       <View>
           <Text style={{textAlign:'center',marginTop:10,fontSize:25,fontWeight:'bold',color:'grey',marginBottom:10}}>Men's Collection</Text>
       </View>
       <View>
       <View style={{backgroundColor:'white', height:470,width:'98%',marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }}>
      <View>
          <Text style={{textAlign:'left',marginTop:10,fontSize:20,fontWeight:'normal',color:'black'}}> Biggest deals on Top Brands</Text>
      </View>
      <View style={styles.distance}>
            <View style={{backgroundColor:'white', height:120,width:110 }} >
            <Image source={require('../assest/mbrand1.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
           <Text style={{textAlign:'center'}}>20-70% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/mbrand2.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>40-60% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/brand3.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>20-40% Off</Text>
            </View>
       </View>
       <View style={styles.distance}>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/mbrand4.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>upto 40% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/mbrand5.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>50-70% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/mbrand6.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>upto 70% Off</Text>
            </View>    
       </View>

       <View style={styles.distance}>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/mbrand7.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>30-40% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/mbrand3.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>upto 30% Off</Text>
            </View>
            <View style={{ height:120,width:110 }} >
            <Image source={require('../assest/mbrand9.png')} style={{flex:2,height:'100%',width:'100%',borderRadius:55}} />
            <Text style={{textAlign:'center'}}>20-40% Off</Text>
            </View>
       </View>
    
       </View>
       </View>

       <View>
        <Swiper height={550} autoplay={true} style={{marginTop:10}} >          
        <Image source={require('../assest/mc1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/mc3.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/mc2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        </Swiper>
        </View>

        <View style={{backgroundColor:'pink', height:120,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
        <Image source={require('../assest/menmin.jpg')} style={{flex:2,height:'100%',width:'100%'}} />
            </View>

         <View>
             <Text style={{textAlign:'center',marginTop:10,fontSize:25,fontWeight:'bold',color:'black'}}>Shop By Category</Text>
         </View>

         <View style={{backgroundColor:'skyblue', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/mshirt.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>    

         <View style={{backgroundColor:'pink', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/mtshirt.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>
        
         <View style={{backgroundColor:'green', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/menethenic.png')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>
         
         <View style={{backgroundColor:'skyblue', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/mencasual.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>
         
         <View style={{backgroundColor:'blue', height:200,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }} >
         <Image source={require('../assest/m3.jpg')} style={{flex:2,height:'100%',width:'100%' , borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10}}/>
         </View>

         <View>
             <Text style={{fontSize:15,color:'black',marginTop:10,paddingLeft:5}}> Brand Edit</Text>
         </View>
         <View style={styles.box}>
        <ScrollView horizontal={true}>
       <View style={{backgroundColor: 'pink',height:190,width:150}} />
       <View style={{backgroundColor: 'lightgrey',height:190,width:150,marginLeft:10}} />
       <View style={{backgroundColor: 'skyblue',height:190,width:150,marginLeft:10}} />
       <View style={{backgroundColor: 'pink',height:190,width:150,marginLeft:10}} />
       <View style={{backgroundColor: 'powderblue',height:190,width:150,marginLeft:10}} />
       <View style={{backgroundColor: 'yellow',height:190,width:150,marginLeft:10}} />
       <View style={{backgroundColor: 'lightgreen',height:190,width:150,marginLeft:10}} />
       <View style={{backgroundColor: 'pink',height:190,width:150,marginLeft:10}} />
       <View style={{backgroundColor: 'skyblue',height:190,width:150,marginLeft:10}} />
       <View style={{backgroundColor: 'pink',height:190,width:150,marginLeft:10}} />

        </ScrollView>
      </View>

      <View>
        <Swiper height={170} autoplay={true} style={{marginTop:30}} >          
        <Image source={require('../assest/mmc1.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/mmc2.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
        <Image source={require('../assest/mmc3.jpg')} style={{flex:2,height:'100%',width:'100%'}}/>
       
        </Swiper>
        </View>


        <View  style={{backgroundColor:'white', height:300,width:'98%',marginTop:10,marginRight:20,marginLeft:5, borderTopLeftRadius:10, borderTopRightRadius:15,borderBottomLeftRadius:15, borderBottomRightRadius:10 }}>
         <View>
             <Text style={{textAlign:'left',marginTop:10,fontSize:20,fontWeight:'bold',color:'black'}}>Winter Trends</Text>
         </View>
         <View style={styles.distance}>
            <View style={{backgroundColor:'powderblue', height:250,width:170 }} >
            <Image source={require('../assest/winter1.jpg')} style={{flex:2,height:'100%',width:'100%'}} />
             </View>
            <View style={{backgroundColor:'powderblue', height:250,width:170 }} >
            <Image source={require('../assest/winter2.jpg')} style={{flex:2,height:'100%',width:'100%'}} />
             </View>

         </View>
         </View>

         <View>
          <Text style={{textAlign:'left',fontSize:20,color:'black',marginTop:10}}>More about shopping at Azien</Text>
          <Text style={{textAlign:'left',fontSize:10,color:'black',marginTop:5,paddingLeft:5}}>See More</Text>
      </View>

      
    </ScrollView>
    )
}


const styles = StyleSheet.create({


    header: {
        width: '100%',
        height: 50,
        backgroundColor:'#0099CC',
        flexDirection:'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
 
    headerfont: {
        fontSize:20,
        fontWeight: 'bold',
        paddingTop:10,
        shadowColor:'white',
        letterSpacing: 1,
        paddingLeft:45,
        color:'white',
    },

    distance: {
        flexDirection: 'row',
        justifyContent:'space-evenly',
        marginTop:10,
       },

       box: {
        margin:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:15,
        borderBottomLeftRadius:15,
        borderBottomRightRadius:10,
    
       }
    
});